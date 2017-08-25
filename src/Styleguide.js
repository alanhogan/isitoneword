import React, { Component } from 'react';
import Phrase from './Phrase.js';

import data from './phrases.json';

const phrase = data.phrases.catchup;

class Styleguide extends Component {
  render() {
    return (
      <Phrase phrase={phrase} />
    );
  }
}

export default Styleguide;
