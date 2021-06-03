import React from 'react'

function NavBar() {
    return ( <>
        <ul>
          <h2>TecnoLibre</h2>
          <li><a href="http://localhost:3000/" className="App-link">Monitores</a></li>
          <li><a href="http://localhost:3000/" className="App-link">Teclados</a></li>
          <li><a href="http://localhost:3000/" className="App-link">Mouses</a></li>
          <li><a href="http://localhost:3000/" className="App-link">Auriculares</a></li>
          <li><a href="http://localhost:3000/" className="App-link">Gabinetes</a></li> 
        </ul>
        </>   
    );     
} 

export default NavBar;