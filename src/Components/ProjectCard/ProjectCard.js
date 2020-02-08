import React, { useEffect } from 'react';
import './ProjectCard.scss';
import { connect } from 'react-redux';
import { addPalettes } from '../../actions/index';

export const ProjectCard = ({ name, id, addPalettes, palettes }) => {

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`) 
      .then(response => response.json())
      .then(data => {
        addPalettes(data)
      })
      .catch(err => console.log(err))
  }, []);

  return(
    <article>
      <h2>{name}</h2>
    </article>
  )
}

export const mapStateToProps = state => ({
  paletttes: state.paletttes
});

export const mapDispatchToProps = dispatch => ({
  addPalettes: palettes => dispatch( addPalettes(palettes) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);