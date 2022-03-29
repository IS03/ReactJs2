import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <p className="logo">E-commerce</p>
            <p>Autos</p>
            <p>Celulares</p>
            <p>Auriculares</p>
            <CartWidget/>
            <button className="log">Login</button>
        </nav>
    )

}

export default NavBar