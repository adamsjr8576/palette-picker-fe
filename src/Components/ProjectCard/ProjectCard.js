import React, { useEffect } from 'react';
import './ProjectCard.scss';
import { connect } from 'react-redux';
import ProjectPalette from '../ProjectPalette/ProjectPalette';
import images from '../../images/images';
import { addPalettes, deleteProjectFromStore, deletePaletteByProjectId } from '../../actions/index';
import { deleteProject, getPaletteByProjectId  } from '../../apiCalls';

export const ProjectCard = ({ name, id, addPalettes, palettes, projects, deleteProjectFromStore, deletePaletteByProjectId }) => {

  let paletteCards

  useEffect(() => {
    getPaletteByProjectId(id)
      .then(data => {
        addPalettes(data)
      })
      .catch(err => console.log(err))
  }, []);

  const removeProject = (id) => {
    const projectToDelete = projects.find(item => item.id === id)
    deleteProject(id, projectToDelete)
    .then(res => console.log(res))

    deletePaletteByProjectId(id)
    deleteProjectFromStore(projectToDelete)
  }

  if(palettes.length) {
    const filteredPalettes = palettes.filter(palette => palette.project_id === id)
    paletteCards = filteredPalettes.map(palette => {
      return(
        <ProjectPalette
          key={palette.id}
          name={palette.name}
          id={palette.id}
          colors={palette.colors}
        />
      )
    })
  }

  return(
    <section data-testid='project-id' className='project-cards-section'>
      <div className='project-title-div'>
        <button data-testid='button-id' className='project-delete-icon-btn' onClick={ () => removeProject(id) }><img className='project-delete-icon' src={images.quit}/></button>
        <h2 data-testid='project-name'  className='project-name'>{name}:</h2>
      </div>
      <div className='palette-card-div'>
        {paletteCards}
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  palettes: state.palettes,
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  addPalettes: palettes => dispatch( addPalettes(palettes) ),
  deletePaletteByProjectId: id => dispatch( deletePaletteByProjectId(id) ),
  deleteProjectFromStore: project => dispatch( deleteProjectFromStore(project) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
