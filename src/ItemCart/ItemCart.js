import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import './ItemCart.css'

const ItemCart = ({ id, nombre, precio, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div className='prodCart'>
                <p className='datosCarrito'>{nombre}</p>
                <p className='cantidadCarrito'>{quantity}</p>
                <p className='precioCarrito'>Precio unitario: ${precio}</p>
                <p className='subTotalCarrito'>Subtotal: <span>${quantity * precio}</span></p>
                <button className="RemoveButton" onClick={() => removeItem(id)}>x</button> 
            </div>
        </>
    )
}

export default ItemCart