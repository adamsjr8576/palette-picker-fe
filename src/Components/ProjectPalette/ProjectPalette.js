import React from 'react';
import './ProjectPalette.scss';

export const ProjectPalette = ({ name, id, colors }) => {

  const getColors = colors.map(color => {
    return(
      <div className='color-box' style={{ backgroundColor: `${color}` }} key={color}></div>
    )
  })

  return(
    <article className='project-colors-article'>
      <h3>{name}</h3>
      <div className='colors-div-container'>
        {getColors}
      </div>
    </article>
  )
}

export default ProjectPalette;
