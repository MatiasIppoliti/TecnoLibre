import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer'
import './App.css';


const App = ()  => {
  return <>
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>
    </div>
  </>
}

export default App;