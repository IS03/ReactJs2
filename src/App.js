import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './Item/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import Etiqueta from './Etiqueta/Etiqueta';
import { CartContextProvider } from './Context/CartContext';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1 className='error'>Error en la carga!</h1>}/>
          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </>
    
  );
}

export default App;
