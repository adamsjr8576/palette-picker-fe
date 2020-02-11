import { connect } from 'react-redux';
import React from 'react';
import './PaletteCard.scss';
import images from '../../images/images';
import { updatePaletteLocked } from '../../actions';

export const PaletteCard = ({ locked, rightColor, leftColor, hexCode, updatePaletteLocked }) => {
  const image = locked? images.locked : images.unlocked;
  return (
    <article className="palette-article" style={{backgroundColor: `${hexCode}`}}>
      <div className="complimentary-colors-container">
        <div className="color-circle" style={{backgroundColor: `${rightColor}`}}></div>
        <div className="color-circle" style={{backgroundColor: `${leftColor}`}}></div>
      </div>
      <div className="palette-info-container">
        <section tabIndex="1"
          className="lock-button-section"
          role="update-palette=locked"
          onClick={() => updatePaletteLocked(hexCode)}
          onKeyDown={event => {
          if (event.key === "Enter") {
            updatePaletteLocked(hexCode);
          }
          }}>
          <img src={image} alt="lock icon" className="lock-button-image" />
        </section>
        <section className="hex-code-section">
          <p className="hex-p">{hexCode}</p>
        </section>
      </div>
    </article>
  );
};

export default PaletteCard;
