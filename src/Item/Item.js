import './Item.css';
import Contador from './ItemCount';
import { getProducts } from '../asyncmock';

const Item = ({nombre, img, precio} ) => {
    
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
            
            <div>
                <button className="botonContadorCompras">
                    Ver Detalles
                </button>
            </div>

            <Contador initial={1} stock={10} onAdd={handleOnAdd}/>

        </div>
    )
} 

export default Item