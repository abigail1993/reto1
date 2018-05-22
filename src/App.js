import React, { Component } from 'react';
import './App.css';
import Cubo from './Components/Cubo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Reto 1 de Front End para Leopark.</h1>
        </header>
        <div id="border-1"> 
          <div id="right"><Cubo /></div>
          <div id="center"><Cubo /></div>
          <div id="left"><Cubo /></div>
        </div>
        <footer>
          <p>Elaborado por Abigail Flores.</p>
        </footer>
      </div>
    );
  }
}

export default App;
