import { connect } from 'react-redux';
import React from 'react';
import './PaletteCard.scss';
import images from '../../images/images';

const PaletteCard = ({ locked, hexCode }) => {
  const image = locked? images.locked : images.unlocked;
  return (
    <article className="palette-article" style={{backgroundColor: `${hexCode}`}}>
      <div className="palette-info-container">
        <section className="lock-button-section">
          <img src={image} alt="lock icon" className="lock-button-image"/>
        </section>
        <section className="hex-code-section">
          <p className="hex-p">{hexCode}</p>
        </section>
      </div>
    </article>
  );
}

export default PaletteCard;
