import React, { useState } from 'react';
import './ProjectForm.scss';

const ProjectForm = () => {

  const [ newProject, setNewProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    resetInputs()
  }

  const resetInputs = () => {
    setNewProject('')
  }

  return(
    <form>
      <label for='make-project'>Make a new project:</label>
      <input 
        className='input-make-project'
        placeholder='Project NAme'
        maxLength='30'
        type='text'
        value={newProject}
        onChange={ e => setNewProject(e.target.value) }
      />
      <button type='button' className='save-project-btn' onClick={ e => handleSubmit(e) }>Save project</button>
    </form>
  )
}

export default ProjectForm;