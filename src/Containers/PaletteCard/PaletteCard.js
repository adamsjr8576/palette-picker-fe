import { connect } from 'react-redux';
import React from 'react';
import './PaletteCard.scss';

const PaletteCard = ({ hexCode }) => {

  return (
    <article className="palatte-article" style={{backgroundColor: `${hexCode}`}}>
    </article>
  );
}

export default PaletteCard;
