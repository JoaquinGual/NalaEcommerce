
import './App.css';
import Catalogo from './components/Catalogo/Catalogo';
import Listado from './components/Listado/Listado';
import NavBar from './components/NavBar/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <Listado/>
    </div>
  );
}

export default App;
