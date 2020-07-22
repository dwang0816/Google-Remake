import React from 'react';
import logo from './logo.svg';
import './App.css';
import google from './google.png'

function App() {
  return (
    <body>
      <header>
        <nav>
          <a class="menu-item" href="/">Gmail</a>
          <a class="menu-item" href="/">Images</a>
          <i id="dropdown-menu" class="material-icons">apps</i>
          <img alt="Profile Pic" src= {google}></img>
        </nav>
      </header>
    </body>
  );
}

export default App;
