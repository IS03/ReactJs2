import Contador from '../Contador/ItemCount';
import "./ItemDetail.css"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemDetail = ({id, nombre, precio, img, stock, info}) => {

    const [quantity, setQuantity]= useState(0)

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

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
                
                {false ? <Link to='/cart' className='goCart'><span>Ir al carrito</span></Link> : <Contador initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd} />}

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
