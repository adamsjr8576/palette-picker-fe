import React, { useEffect } from 'react';
import './ProjectCard.scss';
import { connect } from 'react-redux';
import ProjectPalette from '../ProjectPalette/ProjectPalette';
import images from '../../images/images';
import { addPalettes } from '../../actions/index';

export const ProjectCard = ({ name, id, addPalettes, palettes }) => {

  let paletteCards

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`) 
      .then(response => response.json())
      .then(data => {
        addPalettes(data)
      })
      .catch(err => console.log(err))
  }, []);

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
    <section className='project-cards-section'>
      <div className='project-title-div'>
        <button className='project-delete-icon-btn'><img className='project-delete-icon' src={images.cancel}/></button>
        <h2 className='project-name'>{name}:</h2>
      </div>
      <div className='palette-card-div'>
        {paletteCards}
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  palettes: state.palettes
});

export const mapDispatchToProps = dispatch => ({
  addPalettes: palettes => dispatch( addPalettes(palettes) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);