import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPalette } from '../../actions/actions';
import './PaletteForm.scss';

const PaletteForm = (props) => {

  const [ project, selectProject ] = useState('');
  const [ paletteName, setPalette ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paletteToAdd = {
      name: paletteName,
      project_id: project
    }

    props.palettes(paletteToAdd)
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
        <option>One</option>
        <option>Two</option>
      </select>
      <input
        placeholder='Name Your Palette'
        className='palette-name-input'
        type='text'
        maxLength='30'
        value={paletteName}
        onChange={ e => setPalette(e.target.value) }
      />
      <button className='select-palette-btn' type='button' onClick={ e => handleSubmit(e) }>Save Palette</button>
    </form>
  )
}

export const mapDispatchToProps = dispatch => ({
  palettes: (palette) => dispatch(addPalette(palette))
});

export default connect(null, mapDispatchToProps)(PaletteForm);