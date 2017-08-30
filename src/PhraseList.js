import React, { Component } from 'react';
import Phrase from './Phrase.js';

import data from './phrases.json';

const phrases = data.phrases;

class PhraseList extends Component {
  render() {
    return (
      <div>
        {Object.keys(phrases).sort((a, b) => {
          return phrases[a].valid[0].phrase.localeCompare(
            phrases[b].valid[0].phrase
          )
        }).map(function(key){
          return <Phrase phrase={phrases[key]} />;
        })}
      </div>
    );
  }
}

export default PhraseList;
