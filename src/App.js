import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './Item/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="App-header">

      <ItemListContainer />
      </div>

    </div>
  );
}

export default App;
