import Contador from '../Contador/ItemCount';
import "./ItemDetail.css"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemDetail = ({id, nombre, precio, img, stock, info}) => {

    const [quantity, setQuantity]= useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        console.log ("Se agregaron "+ cantidad + " "+ nombre)
        setQuantity(cantidad)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Se agregaron "+ cantidad + " " + nombre,
            showConfirmButton: false,
            timer: 1500
          })

          const productObj = {
            id, nombre, precio
        }

        addItem ({...productObj, quantity: cantidad})
    }

    return (
        <div className="divDetalles" >
            <div>
                <h1 className="h1Item">
                {nombre}
                </h1>

                <img src={img} className="imgProductos"></img>


                <p className="precioItem">
                    ${precio}
                </p>
        
                {isInCart(id) > 0 ? <div className='divIrAlCarrito'><Link to='/cart' className='linkIrAlCarrito'><h1 className='irAlCarrito'>Ir al carrito</h1></Link></div> : <Contador initial={1} stock={stock} onAdd={handleOnAdd}/>}

                <p className="">
                    Stock disponible: {stock}
                </p>    
            </div>
            <div>
                <p className='info'>
                    Detalles: {info}
                </p>
                
            </div>
        </div>
    );

}

export default ItemDetail