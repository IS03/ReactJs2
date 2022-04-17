import { getProductsbyId } from "../asyncmock";
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductsbyId(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Cargando los productos...</h1> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>No se encuentran los productos.</h1> 
            }
        </div>
    )
}

export default ItemDetailContainer

