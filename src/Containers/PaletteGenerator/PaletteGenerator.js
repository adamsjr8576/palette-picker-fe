import React from 'react';
import './PaletteGenerator.scss';

const PaletteGenerator = () => {

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
  }

  const createPalette = () => {
    const palette = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()]
    console.log(palette);
  }

  return (
    <section className="palette-section">
      <section>
      </section>
      <button type="button" className="palette-button" onClick={() => createPalette()}>Create New Palette!</button>
    </section>
  );
}

export default PaletteGenerator;
