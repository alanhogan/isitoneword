import React, { Component } from 'react';
import { createComponent } from 'react-fela'

const palatino = 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif';

const sectionStyle = () => {
  return {
    margin: "2rem 0",

    // clearfix
    "::after": {
      content: "''",
      display: "table",
      clear: "both",
    }
  };
};

const headingStyle = () => {
  return {
    fontWeight: 300,
    color: "#222",
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
    display: 'inline-block',
    fontWeight: 600,
    fontStyle: "italic",
    color: "#666",
    paddingLeft: "0.2em",
    fontFamily: palatino,
  };
};

const variantWithPOSStyle = () => {
  return {
    listStyleType: "none",
    textIndent: 0,
    paddingLeft: 0,
    fontSize: "1.6rem",
    lineHeight: "1.4",
  };
};

const variantsStyle = () => {
  return {
    marginLeft: 0,
    paddingLeft: 0,
    listStyleType: "none",
  };
};

const notesStyle = () => {
  return {
    fontSize: "1.1rem",
    marginLeft: "4rem",
    maxWidth: "40em",
    fontFamily: palatino,
    lineHeight: "1.8",
  };
};

const floatedImageStyle = () => {
  return {
    float: "right",
    marginLeft: "2rem",
    maxWidth: "35%",
  };
};

const PhraseAsSection = createComponent(sectionStyle, 'section');
const Heading = createComponent(headingStyle, 'header');
const PhraseVariant = createComponent(phraseStyle, 'span');
const POS = createComponent(posStyle, 'span');
const VariantWithPOS = createComponent(variantWithPOSStyle, 'li');
const Variants = createComponent(variantsStyle, 'ul');
const Notes = createComponent(notesStyle, 'p');
const FloatedImage = createComponent(floatedImageStyle);

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
      <PhraseAsSection>
        <Heading>“{phrase.valid[0].phrase}” is {phrase.oneWord} one word.</Heading>
        {
          phrase.illustrations && phrase.illustrations.length > 0
          ?
          <FloatedImage><img src={`${process.env.PUBLIC_URL}/img/${phrase.illustrations[0]}`}
            className="" alt={`Illustration for ${phrase.valid[0].phrase}`} /></FloatedImage>
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
        <Notes>{phrase.notes}</Notes>
      </PhraseAsSection>
    );
  }
}

export default Phrase;
