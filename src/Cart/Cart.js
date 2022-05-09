import CartContext from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    
    const { cart, totalCost, clearCart } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <>
                <h2>Carrito vacío</h2>
                <Link to={'/'} className='vacio'>Conoce nuestros productos!</Link>
            </>
        )
    }
    
    return (
        <>
            <div>
                <div className="PageHeader">
                    <h2 className="TituloCart">Mi carrito</h2>
                </div>

                {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}

                <p className="Total">Total: ${totalCost()}</p>
                
                <div className="BotonesCart">
                    <Link className="Btn" to={'/'} onClick={() => clearCart()}>Vaciar carrito</Link>
                    <Link className="Btn" to={'/form'}>Continua tu compra</Link>
                </div>
            </div>
        </>
    )
}

export default Cart