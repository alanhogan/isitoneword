import React, { Component } from 'react';
import Phrase from './Phrase.js';

import data from './phrases.json';

const phrases = data.phrases;

class Styleguide extends Component {
  render() {
    return (
      <div>
        <Phrase phrase={phrases.catchup} />
        <Phrase phrase={phrases.login} />
        <Phrase phrase={phrases.anymore} />
      </div>
    );
  }
}

export default Styleguide;
