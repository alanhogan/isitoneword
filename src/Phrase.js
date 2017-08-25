import React, { Component } from 'react';
// import logo from './img/catchup.png';
// import './App.css';

function longerPos(pos) {
  switch (pos) {
    case 'n':
      return 'noun';
    case 'v':
      return 'verb';
    case 'adv':
      return 'adverb';
    case 'adj':
      return 'adjective';
    case 'prep':
      return 'preposition';
    default:
      return pos;
  }
}

class Phrase extends Component {
  render() {
    const phrase = this.props.phrase;

    return (
      <section>
        <heading>“{phrase.valid[0].phrase}” is {phrase.oneWord} one word.</heading>
        {
          phrase.illustrations && phrase.illustrations.length > 0
          ?
          <img src={`${process.env.PUBLIC_URL}/img/${phrase.illustrations[0]}`}
            className="" alt={`Illustration for ${phrase.valid[0].phrase}`} />
          : null
        }
        <ul className="">
          {phrase.valid.map(function(validObj, i){
            return (<li key={i}>
              <span>{validObj.phrase}</span>
              {" "}
              <span>{longerPos(validObj.pos)}</span>
            </li>)
          })}
        </ul>
        <p>{phrase.notes}</p>
      </section>
    );
  }
}

export default Phrase;
