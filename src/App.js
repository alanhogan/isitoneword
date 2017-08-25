import React, { Component } from 'react';
import logo from './img/catchup.png';
import './App.css';
import Styleguide from './Styleguide.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Is it one word?</h2>
        </div>
        <Styleguide />
      </div>
    );
  }
}

export default App;
