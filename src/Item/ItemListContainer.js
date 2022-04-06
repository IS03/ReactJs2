import Contador from "./ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../asyncmock"

const ItemListContainer = () => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts ().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log (error)
        })
    }, [])

    return (
        <div>
            <ItemList products={products}/>
        </div>  
    )
}


export default ItemListContainer