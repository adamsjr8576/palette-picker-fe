import React, { useState } from 'react';
import './PaletteForm.scss';

const PaletteForm = () => {

  return(
    <div>
      <label for='select-project'>Select Project: </label>
      <select
        id='select-project'
        name='select-project'
        className='project-selector'
        value=''
        // onChange={}
      >
        <option>placeholder</option>
      </select>
      <input
        name='palette-name'
        placeholder='Name Your Palette'
        className='palette-name-input'
        type='text'
        maxLength='30'
        value=''
        // onChange={}
      />
      <button className='select-palette-btn' type='button'>Save Palette</button>
    </div>
  )
}

export default PaletteForm;