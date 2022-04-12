import { getProductsById } from "../asyncmock";
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item/Item";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [products, setProducts] = useState ([])

    const { prodId } = useParams();

    useEffect (() => {
        getProductsById (prodId).then((Item) => {
            setProducts(Item);
            console.log(Item)
        });
    }, [prodId]);

    return (
        <div>
            <ItemDetail {...products} />
        </div>
    );
};

export default ItemDetailContainer

