import React, { Component } from 'react';
import Styleguide from './Styleguide.js';
import { createComponent } from 'react-fela'

const headerStyle = () => {
  return {
    textTransform: "uppercase",
    fontWeight: 800,
    color: "#999",
    fontSize: "8vmax",
    lineHeight: 1.0,
    textAlign: "center",
  };
};

const Header = createComponent(headerStyle, 'h1');

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          Is it one word?
        </Header>
        <Styleguide />
      </div>
    );
  }
}

export default App;
