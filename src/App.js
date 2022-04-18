import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './Item/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import Etiqueta from './Etiqueta/Etiqueta';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>

    </BrowserRouter>

    </>
    
  );
}

export default App;
