import {NavBar} from './components/NavBar/NavBar'
import {Router} from './Router/Router';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import { Whatsapp } from './components/AddOns/components/Whatsapp';
import { CartComponentContext } from './Context/CartContext';


const App = ()  => {
  return <>
    <div className="App">
      <CartComponentContext> 
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <Router />
          <Whatsapp />
        </BrowserRouter>
      </CartComponentContext>
    </div>
  </>
}

export default App;