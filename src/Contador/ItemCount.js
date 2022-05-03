import { useState } from "react"
import './ItemCount.css';

const Contador = ({initial=1, stock, onAdd}) => {
    const [contador, setCount] = useState(initial)

    const sumarContador = () => {
        if ((contador > 1)){
            setCount(contador - 1)
        }
    }

    const restarContador = () => {
        if (contador < stock){
            setCount(contador + 1)
        }
    }

    const ceroContador = () => {
        setCount(initial)
    }

    return (
        <>  <div className="divContador">
            <button onClick={restarContador} className="botonContador"><img src="/mas1.png"></img></button>
            <p className="contador">{contador}</p>
            <button onClick={sumarContador} className="botonContador"><img src="/menos1.png"></img></button> 
            <button onClick={ceroContador} className="botonContador"><img src="/basura.png"></img></button>   
              
            </div>
            <button onClick={() => onAdd (contador) } className="botonContadorAgregar">Agregar al Carrito</button>  
        </>
    ) 
}

export default Contador