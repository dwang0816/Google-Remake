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
          <div id="app-dropdown">
            <div class="app-item">
              <img src="http://pluspng.com/img-png/google-logo-png-open-2000.png" alt="Google Search"/>
              <p>Search</p>
            </div>
            <div class="app-item">
              <img src="http://pluspng.com/img-png/google-maps-png-google-maps-icon-1600.png" alt="Google Map"/>
              <p>Maps</p>
            </div>
            <div class="app-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive"/>
              <p>Drive</p>
            </div>
            <div class="app-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Google_Calendar.png" alt="Google Calendar"/>
              <p>Calendar</p>
            </div>
            <div class="app-item">
              <img src="https://blogs.acu.edu/innovation_foundry/files/2017/06/google_photos1600.png" alt="Google Photos"/>
              <p>Photos</p>
            </div>
            <div class="app-item">
              <img src="https://i.pinimg.com/originals/09/96/92/099692d1d651d51b7caf3040fce0f748.png" alt="Google Keep"/>
              <p>Keep</p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
