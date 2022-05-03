import { getProductsbyId } from "../asyncmock";
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { firestoreDb } from "../services/firebase"
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
            setLoading(true)

        })

        return (() => {
            setProduct()
        })

    }, [productId])

    return (
        <div className="ItemDetailContainer">
        {
            loading ?
            (product ?
                <ItemDetail  {...product} setCart={setCart} cart={cart}/>:
                <h1>No se encuentran los productos.</h1>)
            :
            <p className='spinner'></p>
        }
    </div>
    )
}

export default ItemDetailContainer

