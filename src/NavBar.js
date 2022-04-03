import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <p className="logo">E-COMMERCE</p>
            <p>Home</p>
            <p>Categorias</p>
            <p>Productos</p>
            <CartWidget/>
        </nav>
    )

}

export default NavBar