import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addInitialProjects } from '../../actions/index';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './ProjectContainer.scss';

export const ProjectContainer = ({ addInitialProjects, projects }) => {

  let projectCards

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/projects') 
      .then(response => response.json())
      .then(data => {
        addInitialProjects(data)
      })
  }, []);

  if(projects.length) {
    projectCards = projects.map(project => {
      return(
        <ProjectCard 
          name={project.name}
          id={project.id}
        />
      )
    })
  }

  return(
    <div>
      <h2>Your Projects</h2>
      {projectCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  addInitialProjects: projectName => dispatch( addInitialProjects(projectName) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);