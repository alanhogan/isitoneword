import React, { Component } from 'react';
import { createComponent } from 'react-fela'

const headingStyle = () => {
  return {
    fontWeight: 600,
    color: "#555",
    fontSize: "3.2rem",
  };
};

const phraseStyle = () => {
  return {
    fontWeight: 700,
    color: "#444",
    fontSize: "2rem",
  };
};


const posStyle = () => {
  return {
    fontWeight: 500,
    fontStyle: "italic",
    color: "#666"
  };
};

const variantWithPOSStyle = () => {
  return {
    listStyleType: "none",
    textIndent: 0,
    paddingLeft: 0,
    fontSize: "1.6rem"
  };
};

const variantsStyle = () => {
  return {
    marginLeft: 0,
    paddingLeft: 0,
    listStyleType: "none",
  };
};

const Heading = createComponent(headingStyle, 'header');
const PhraseVariant = createComponent(phraseStyle, 'span');
const POS = createComponent(posStyle, 'span');
const VariantWithPOS = createComponent(variantWithPOSStyle, 'li');
const Variants = createComponent(variantsStyle, 'ul');

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
        <Heading>“{phrase.valid[0].phrase}” is {phrase.oneWord} one word.</Heading>
        {
          phrase.illustrations && phrase.illustrations.length > 0
          ?
          <img src={`${process.env.PUBLIC_URL}/img/${phrase.illustrations[0]}`}
            className="" alt={`Illustration for ${phrase.valid[0].phrase}`} />
          : null
        }
        <Variants>
          {phrase.valid.map(function(validObj, i){
            return (<VariantWithPOS key={i}>
              <PhraseVariant>{validObj.phrase}</PhraseVariant>
              {" "}
              <POS>{longerPos(validObj.pos)}</POS>
            </VariantWithPOS>)
          })}
        </Variants>
        <p>{phrase.notes}</p>
      </section>
    );
  }
}

export default Phrase;
