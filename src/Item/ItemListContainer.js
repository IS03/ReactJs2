import Contador from "../Contador/ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <ItemList products={products}/>
        </div>  
    )
}


export default ItemListContainer