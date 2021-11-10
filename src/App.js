
import './App.css';
import ItemCount from './components/itemCount/itemCount';


import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Tittle from './components/Tittle/Tittle';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tittle name="Joaquin"/>
      <ItemListContainer>
      </ItemListContainer>
      <ItemCount/>
    </div>
    
  );
}

export default App;
