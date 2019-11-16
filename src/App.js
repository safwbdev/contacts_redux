import React from 'react';
import './App.css';
import List from './features/list'
import Form from './features/form'

function App() {
  return (
    <div className="App">
      <nav>
        <div class="nav-wrapper">
        <div class="container">
          {/* <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li> 
          </ul>
            */}
        </div>
        </div>
      </nav>
      <div class="container">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
