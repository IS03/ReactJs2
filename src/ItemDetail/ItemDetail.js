import './Item.css';
import Contador from '../Contador/ItemCount';
import { getProducts } from '../asyncmock';
import "./ItemDetail.css"

const ItemDetail = (nombre, precio, img, stock, info) => {

    const handleOnAdd = (cantidad) => {
        console.log ("Se agregaron "+ cantidad + " productos.")
    }

    return (
        <div className="divItem" >
        <h1 className="h1Item">
        {nombre}
        </h1>

        <img src={img} className="imgProductos"></img>

        <p className='info'>
            Detalles: {info}
        </p>

        <p className="precioItem">
            ${precio}
        </p>

        <Contador initial={1} stock={stock} onAdd={handleOnAdd}/>

    </div>
    );

}

export default ItemDetail