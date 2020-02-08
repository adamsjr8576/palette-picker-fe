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
        {locked: false, color: '#444343'},
        {locked: false, color: '#6D6D6D'},
        {locked: false, color: '#9B9B9B'},
        {locked: false, color: '#C2C2C2'},
        {locked: false, color: '#DCDCDC'}];
    }
    addNewPalette(palette);
  }

  return (
    <section className="palette-section">
      <section className="palette-card-section">
        {paletteCards}
      </section>
      <button type="button" className="palette-button" role="create-palette" onClick={() => createPalette()}>Create New Palette!</button>
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
