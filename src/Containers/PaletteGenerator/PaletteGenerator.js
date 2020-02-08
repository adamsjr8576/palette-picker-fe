import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import './PaletteGenerator.scss';
import { addNewPalette, updatePaletteLocked } from '../../actions';
import PaletteCard from '../PaletteCard/PaletteCard';

export const PaletteGenerator = ({ addNewPalette, currentPalette, updatePaletteLocked }) => {
  useEffect(() => {
    createPalette();
  }, []);

  let paletteCards;

  if (currentPalette.length) {
    paletteCards = currentPalette.map((color, index) => {
      return (
        <PaletteCard locked={color.locked} hexCode={color.color} key={index} id={color.color} updatePaletteLocked={updatePaletteLocked} />
      )
    });
  }

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
  }

  const createPalette = () => {
    let palette;
    if (currentPalette.length) {
      palette = currentPalette.map(palette => {
        if (!palette.locked) {
          const newColor = getRandomColor();
          return {locked: palette.locked, color: newColor}
        }
        return palette;
      });
    } else {
      palette = [
        {locked: false, color: getRandomColor()},
        {locked: false, color: getRandomColor()},
        {locked: false, color: getRandomColor()},
        {locked: false, color: getRandomColor()},
        {locked: false, color: getRandomColor()}]
    }
    addNewPalette(palette);
  }

  return (
    <section className="palette-section">
      <section className="palette-card-section">
        {paletteCards}
      </section>
      <button type="button" className="palette-button" onClick={() => createPalette()}>Create New Palette!</button>
    </section>
  );
};

export const mapDispatchToProps = dispatch => ({
  addNewPalette: currentPalette => dispatch( addNewPalette(currentPalette) ),
  updatePaletteLocked: hexCode => dispatch( updatePaletteLocked(hexCode) )
});

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteGenerator);
