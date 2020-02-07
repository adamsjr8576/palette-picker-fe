import React, { useState, useEffect } from 'react';
import './PaletteForm.scss';

const PaletteForm = () => {

  const [ project, selectProject ] = useState('');
  const [ paletteName, setPalette ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default PaletteForm;