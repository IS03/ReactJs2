import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { getCategories } from "../asyncmock"
import React, { useEffect, useState } from "react"


const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar">
            <Link to="/" className="logo">
                <p>E-COMMERCE</p>
            </Link>

            <div className="categoriasDiv">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className="cat">
                    {cat.description}</NavLink>)}   
            </div>
            
            <CartWidget/>
        </nav>
    )

}

export default NavBar