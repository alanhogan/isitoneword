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
    margin: 0
  };
};

const ghlStyle = () => {
  return {
    color: "#347",
    textDecoration: "underline",
  };
};

const footerStyle = () => {
  return {
    textAlign: "center",
    margin: "1.6rem 0",
    color: "#666",
    fontSize: "0.85em",
  };
};

const Header = createComponent(headerStyle, 'h1');
const GitHubLink = createComponent(ghlStyle, 'a', ['href', 'title', 'target']);
const Footer = createComponent(footerStyle, 'footer');

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          Is it one word?
        </Header>
        <Styleguide />
        <Footer>
          You can improve this website. <GitHubLink href="https://github.com/alanhogan/isitoneword">It’s open source!</GitHubLink>
        </Footer>
      </div>
    );
  }
}

export default App;
