import './Form.css'
import CartContext from '../Context/CartContext'
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from "../services/firebase"
import Swal from 'sweetalert2'


const Form = () => {

    const [input, setInput] = useState({nombre: '', telefono: '', correo: '', correo: '', correoConfirm: '' })

    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState(null)
    
    const { cart, totalCost } = useContext(CartContext)

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) =>  {
        if (input.mail === input.mailConfirm) {
            setButtonDisabled(false)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mail incorrecto!',
                footer: 'Chequea tus datos por favor'
            })
        }
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.nombre, quantity: prod.quantity, priceUni: prod.precio }) }),
            buyer: input,
            total: totalCost(),
            date: new Date
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })

            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } 
                else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }

            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <>  
            <h1 className="tituloCompra">Muchas gracias por tu compra!</h1>
            <h3 className="codigoCompra">Tu código de compra es: {orderId}</h3>
            </>
        )
    }

    if (loading) {
        return <h1 className='codigoCompra'>Procesando tu compra</h1>
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1 className='Title'>Tus datos</h1>
            <div className='Form'>
                <div className='Field'>
                    <div className='Inputs'>
                        <label><input placeholder="Nombre y apellido" type='text' onChange={handleChange} name="nombre" value={input.nombre}/></label>
                        <label><input required className={(input.mailConfirm === input.mail) ? 'greenOk' : 'redWrong' } placeholder="Email" type='text' onChange={handleChange} name="correo" value={input.correo || ""} /></label>
                        <label><input required className={(input.mailConfirm === input.mail) ? 'greenOk' : 'redWrong'} placeholder="Nuevamente tu Email" type='text' onChange={handleChange} onBlur={onBlurHandler} name="correoConfirm" value={input.correoConfirm || ""} /></label>
                        <label><input placeholder="Dirección de envío" type='text' onChange={handleChange} name="direccion" value={input.direccion}/></label>
                        <label><input placeholder="Teléfono" type="text" onChange={handleChange} name="telefono" value={input.telefono}/></label>
                    </div>
                    <div>
                        <button onClick={() => createOrder()} className="Finish" disabled={buttonDisabled}>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form