import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPalettes } from '../../actions/index';
import './PaletteForm.scss';

export const PaletteForm = ({ addPalette }) => {

  const [ project, selectProject ] = useState('');
  const [ paletteName, setPalette ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const paletteToAdd = {
      name: paletteName,
      project_id: project
    }

    addPalette(paletteToAdd)
    resetInputs();
  }

  const resetInputs = () => {
    selectProject('');
    setPalette('');
  }

  return(
    <form>
      <label for='select-project'>Select Project: </label>
      <select
        id='select-project'
        className='project-selector'
        value={project}
        onChange={ e => selectProject(e.target.value) }
      >
        <option value='one'>One</option>
        <option value='two'>Two</option>
      </select>
      <input
        aria-label='palette-name-input'
        placeholder='Name Your Palette'
        className='palette-name-input'
        type='text'
        maxLength='30'
        value={paletteName}
        onChange={ e => setPalette(e.target.value) }
      />
      <button className='select-palette-btn' type='button' roll='button' onClick={ e => handleSubmit(e) }>Save Palette</button>
    </form>
  )
}

export const mapDispatchToProps = dispatch => ({
  addPalettes: palette => dispatch( addPalettes(palette) )
});

export default connect(null, mapDispatchToProps)(PaletteForm);