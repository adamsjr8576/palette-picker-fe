import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../../actions/index';
import './ProjectForm.scss';

export const ProjectForm = ({ addProject }) => {

  const [ newProject, setNewProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(newProject);
    resetInputs();
  }

  const resetInputs = () => {
    setNewProject('');
  }

  return(
    <form>
      <label for='make-project'>Make a new project:</label>
      <input 
        className='input-make-project'
        aria-label='name-project-input'
        placeholder='Project Name'
        maxLength='30'
        type='text'
        value={newProject}
        onChange={ e => setNewProject(e.target.value) }
      />
      <button type='button' className='save-project-btn' role='button' onClick={ e => handleSubmit(e) }>Save project</button>
    </form>
  )
}

export const mapDispatchToProps = dispatch => ({
  addProject: projectName => dispatch( addProject(projectName) )
});

export default connect(null, mapDispatchToProps)(ProjectForm);