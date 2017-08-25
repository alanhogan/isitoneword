import React, { Component } from 'react';
import './App.css';
import Styleguide from './Styleguide.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Is it one word?</h2>
        </div>
        <Styleguide />
      </div>
    );
  }
}

export default App;
