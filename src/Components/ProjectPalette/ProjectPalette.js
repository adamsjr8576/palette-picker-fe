import React from 'react';
import './ProjectPalette.scss';
import images from '../../images/images';
import { connect } from 'react-redux';
import { deletePalette } from '../../apiCalls';
import { deletePaletteFromStore } from '../../actions/index';

export const ProjectPalette = ({ name, id, colors, deletePaletteFromStore, palettes }) => {

  const getColors = colors.map(color => {
    return(
      <div className='color-box' style={{ backgroundColor: `${color}` }} key={color}>
        <p>{color}</p>
      </div>
    )
  })

  const removePalette = (id) => {
    const paletteToDelete = palettes.find(item => item.id === id)
    deletePalette(id, paletteToDelete)
    .then(res => console.log(res));

    deletePaletteFromStore(paletteToDelete)
  }

  return(
    <article className='project-colors-article'>
      <div>
        <h3>{name}</h3>
        <button data-testid='delete-button' className='trash-btn' onClick={ () => removePalette(id) }><img className='icon-bin' src={images.bin} /></button>
      </div>
      <div className='colors-div-container'>
        {getColors}
      </div>
    </article>
  )
}

export const mapStateToProps = state => ({
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({
  deletePaletteFromStore: palette => dispatch( deletePaletteFromStore(palette) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPalette);
