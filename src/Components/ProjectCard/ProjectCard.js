import React, { useEffect } from 'react';
import './ProjectCard.scss';
import { connect } from 'react-redux';
import ProjectPalette from '../ProjectPalette/ProjectPalette';
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
    <section>
      <h2>{name}</h2>
      {paletteCards}
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