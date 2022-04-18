import Contador from '../Contador/ItemCount';
import "./ItemDetail.css"
import Swal from 'sweetalert2'

const ItemDetail = ({nombre, precio, img, stock, info}) => {

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

                <Contador initial={1} stock={stock} onAdd={handleOnAdd}/>
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