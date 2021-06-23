import {NavBar} from './components/NavBar/NavBar'
import {Router} from './Router/Router';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import { Whatsapp } from './components/AddOns/components/Whatsapp';


const App = ()  => {
  return <>
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <Router />
          <Whatsapp />
        </BrowserRouter>
    </div>
  </>
}

export default App;