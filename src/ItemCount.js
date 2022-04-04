import { useState } from "react"
import './ItemCount.css';

const Contador = ({initial, stock, onAdd}) => {
    const [contador,setContador] = useState(1)
    
    const sumarContador = () => {
        if (contador < stock ){
        setContador(contador + 1)
    }}

    const restarContador = () => {
        if (contador > initial){
        setContador(contador - 1)
    }}

    const ceroContador = () => {
        setContador(contador === initial)
    }

    if (contador > stock)  {
        alert("No hay más stock! el stock es de: " + stock)

    }

    return (
        <>  <div className="divContador">
            <button onClick={sumarContador} className="botonContador"><img src="/mas1.png"></img></button>
            <p className="contador">{contador}</p>
            <button onClick={restarContador} className="botonContador"><img src="/menos1.png"></img></button> 
            <button onClick={ceroContador} className="botonContador"><img src="/basura.png"></img></button>   
              
            </div>
            <button onClick={() => onAdd (contador) } className="botonContadorAgregar">Agregar al Carrito</button>  
        </>
    ) 
}

export default Contador