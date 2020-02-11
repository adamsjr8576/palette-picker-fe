import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addInitialProjects } from '../../actions/index';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './ProjectContainer.scss';
import { getProjects } from '../../apiCalls';

export const ProjectContainer = ({ addInitialProjects, projects }) => {

  let projectCards

  useEffect(() => {
    getProjects()
      .then(data => {
        addInitialProjects(data)
      })
  }, []);

  if(projects.length) {
    projectCards = projects.map(project => {
      return(
        <ProjectCard
          key={project.id}
          name={project.name}
          id={project.id}
        />
      )
    })
  }

  return(
    <div className='project-cards-div'>
    <h2 className='your-projects-h2'>Your Projects</h2>
    <section className='section-project-container'>
      {projectCards}
    </section>
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
