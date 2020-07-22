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
          <img id="profile-pic" alt="Profile Pic" src= {google}></img>
        </nav>
      </header>

      <main>
        <section>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" id="google-logo"/>
          <br/>
          <div id="input-wrapper">
            <input id="search-box"/>
            <img src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Voice Search Icon"/>
          </div>
          <div>
            <button class="custom-btn">Google Search</button>
            <button class="custom-btn">I'm Feeling Lucky</button>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
