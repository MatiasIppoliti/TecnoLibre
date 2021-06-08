import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/Cart/ItemListContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
      </header>
    </div>
  );
}

export default App;