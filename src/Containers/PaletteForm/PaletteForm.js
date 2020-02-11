import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPalettes } from '../../actions/index';
import './PaletteForm.scss';
import { postPalette, getPaletteById } from '../../apiCalls';

export const PaletteForm = ({ addPalettes, projects, currentPalette }) => {
  const [ newProject, selectNewProject ] = useState('');
  const [ paletteName, setPalette ] = useState('');
  const [ error, setError ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProject === '' || paletteName === '') {
      setError(true);
      resetInputs();
    } else {
      postNewPalette(paletteName, currentPalette);
      resetInputs();
      setError(false);
    }
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
          .catch(err => console.log(error));
      })
      .catch(err => console.log(error));
  }

  const createProjectOptions = (newProject) => {
    return projects.map(project => {
      return (
        <option selected={newProject === project.name} value={project.name} key={project.name}>
          {project.name}
        </option>
      );
    });
  }

  let outlineColor = '#017DF1';
  if (currentPalette.length) {
    outlineColor = currentPalette[0].color;
  }

  const options = createProjectOptions(newProject);
  return(
    <form className='palette-form'>
      <p className='palette-form-header'>Add Palette To Project: </p>
      <div className="project-selector-container">
        <label for='select-project' className='palette-form-label'>Select Project: </label>
        <select
          id='select-project'
          data-testid='select-project'
          className='project-selector'
          value={newProject}
          onChange={ e => selectNewProject(e.target.value) }
        >
          <option value="">Please Select</option>
          {options}
        </select>
      </div>
      <input
        data-testid='palette-name-input'
        placeholder='Palette Name'
        className='palette-name-input'
        type='text'
        maxLength='30'
        value={paletteName}
        onChange={ e => setPalette(e.target.value) }
        style={{border: `3px solid ${outlineColor}`}}
      />
      <div className='project-form-error-container'>
        <p data-testid='project-form-error' className='project-form-error' hidden={!error}>Error: Please Enter a Name and Project</p>
      </div>
      <button className='select-palette-btn' type='button' onClick={ e => handleSubmit(e) }>Save Palette</button>
    </form>
  )
}

export const mapDispatchToProps = dispatch => ({
  addPalettes: palette => dispatch( addPalettes(palette) )
});

export const mapStateToProps = state => ({
  projects: state.projects,
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteForm);
