import React from 'react';
import "./App.scss";
import {BrowserRouter} from "react-router-dom"
import Navtest from './components/Navbar/Navtest';
import Myroute from './components/Myroute/Myroute';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navtest></Navtest>
        <Myroute></Myroute>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
