import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPalettes } from '../../actions/index';
import './PaletteForm.scss';
import { postPalette, getPaletteById } from '../../apiCalls';

const PaletteForm = ({ addPalettes, projects, currentPalette }) => {

  const [ newProject, selectNewProject ] = useState('');
  const [ paletteName, setPalette ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewPalette(paletteName, currentPalette);
    resetInputs();
  }

  const resetInputs = () => {
    selectNewProject('');
    setPalette('');
  }

  const createPostBody = () => {
    const selectedProject = projects.find(project => project.name === newProject);
    const projectId = selectedProject.id;
    return currentPalette.reduce((acc, color, index) => {
      if (index === 0) {
        acc.color_one = color.color;
      }
      if (index === 1) {
        acc.color_two = color.color;
      }
      if (index === 2) {
        acc.color_three = color.color;
      }
      if (index === 3) {
        acc.color_four = color.color;
      }
      if (index === 4) {
        acc.color_five = color.color;
      }
      return acc;
    }, {name: paletteName, project_id: projectId });
  }

  const postNewPalette = (paletteName, currentPalette) => {
    const body = createPostBody()
    postPalette(body)
      .then(id => {
        getPaletteById(id)
          .then(palette => {
            addPalettes(palette);
          })
      })
  }

  const createProjectOptions = () => {
    return projects.map(project => {
      return (
        <option>
          {project.name}
        </option>
      );
    });
  }

  const options = createProjectOptions();
  return(
    <form>
      <label for='select-project'>Select Project: </label>
      <select
        id='select-project'
        className='project-selector'
        value={newProject}
        onChange={ e => selectNewProject(e.target.value) }
      >
        <option>Select Project</option>
        {options}
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
  addPalettes: (palette) => dispatch(addPalettes(palette))
});

export const mapStateToProps = state => ({
  projects: state.projects,
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);
