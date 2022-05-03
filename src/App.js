import './App.css';
import React from 'react';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import ItemListContainer from './Item/ItemListContainer';
import Form from './Form/Form';
import Cart from './Cart/Cart';
import NotFound from './NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
              <Route path='*' element={<NotFound />}/>
              <Route path='/form' element={<Form />}/>
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </>
    
  );
}

export default App;
