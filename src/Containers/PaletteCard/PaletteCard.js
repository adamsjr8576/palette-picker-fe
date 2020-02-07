import { connect } from 'react-redux';
import React from 'react';
import './PaletteCard.scss';

const PaletteCard = ({ hexCode }) => {

  return (
    <article className="palatte-article" style={{backgroundColor: `${hexCode}`}}>
      <section className="hex-code-section">
        <p className="hex-p">{hexCode}</p>
      </section>
    </article>
  );
}

export default PaletteCard;
