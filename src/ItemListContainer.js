import Contador from "./ItemCount"


const ItemListContainer = () => {

    const handleOnAdd = (cantidad) => {
        console.log ("Se agregaron "+ cantidad + " productos.")
    }

    return (
       
        <Contador initial={1} stock={10} onAdd={handleOnAdd} />
        
    )
}


export default ItemListContainer