import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        
        <div className="divCarrito">
            <Link to='/cart'>
                <img src='./carrito2.png' className="carrito">
                </img>
                
            </Link>
            
        </div>
    )
}

export default CartWidget