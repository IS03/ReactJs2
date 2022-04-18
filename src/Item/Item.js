import './Item.css';
import Contador from '../Contador/ItemCount';
import { getProducts } from '../asyncmock';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from '../Etiqueta/Etiqueta';
import Etiqueta from '../Etiqueta/Etiqueta';


const Item = ({nombre, img, precio, stock, id} ) => {
    
    const handleOnAdd = (cantidad) => {
        console.log ("Se agregaron "+ cantidad + " "+ nombre)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Se agregaron "+ cantidad + " " + nombre,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return(
        <div className='itemConteiner'>
        <div className="divItem" >
            <h1 className="h1Item">
            {nombre}
            </h1>

            <img src={img} className="imgProductos"></img>

            <p className="precioItem">
                ${precio}
            </p>
            
            <Link to={`/detail/${id}`} className="botonVerDetalles">
                Ver detalles
            </Link>

            <p className="">
                Stock disponible: {stock}
            </p>

        </div>
        <Etiqueta/>
        </div>
        
    )
} 

export default Item