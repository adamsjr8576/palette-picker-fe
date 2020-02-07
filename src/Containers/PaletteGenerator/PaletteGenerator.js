import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import './PaletteGenerator.scss';
import { addNewPalette } from '../../actions';
import PaletteCard from '../PaletteCard/PaletteCard';

const PaletteGenerator = ({ addNewPalette, currentPalette }) => {
  useEffect(() => {
    createPalette();
  }, []);
  let paletteCards
  if (currentPalette.length) {
    paletteCards = currentPalette.map(color => {
      return (
        <PaletteCard hexCode={color} />
      )
    });
  }
  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
  }
  const createPalette = () => {
    const palette = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
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
  addNewPalette: currentPalette => dispatch( addNewPalette(currentPalette) )
});

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteGenerator);
