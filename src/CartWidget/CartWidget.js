import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../Context/CartContext"

const CartWidget = () => {

    const { getQuantity } = useContext (CartContext)

    return (
        <>
            <div>
                <Link to='/cart' className="divCarrito">
                    <img src='./carrito2.png' className="carrito">
                    </img>

                    <div className="contadorCarrito">
                        { getQuantity() }
                    </div>

                </Link>
                
            </div>
        </>
    )
}

export default CartWidget