import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './screens/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer'
import {Router} from './Router/Router';
import {BrowserRouter} from 'react-router-dom'
import './App.css';


const App = ()  => {
  return <>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar/>
          <Router />
        </BrowserRouter>
      </header>
    </div>
  </>
}

export default App;