import './Item.css';
import Contador from '../Contador/ItemCount';
import { getProducts } from '../asyncmock';
import { Link } from 'react-router-dom';


const Item = ({nombre, img, precio, stock, id} ) => {
    
    const handleOnAdd = (cantidad) => {
        console.log ("Se agregaron "+ cantidad + " productos.")
    }
    
    return(
        <div className="divItem" >
            <h1 className="h1Item">
            {nombre}
            </h1>

            <img src={img} className="imgProductos"></img>

            <p className="precioItem">
                ${precio}
            </p>
            
            <Link to={"/detail/" + id} className="botonContadorCompras">
                Ver Detalles
            </Link>



            <Contador initial={1} stock={stock} onAdd={handleOnAdd}/>

        </div>
    )
} 

export default Item