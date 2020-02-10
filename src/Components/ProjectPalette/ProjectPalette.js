import React from 'react';
import './ProjectPalette.scss';

export const ProjectPalette = ({ name, id, colors }) => {

  const getColors = colors.map(color => {
    return(
      <div className='color-box' style={{ backgroundColor: `${color}` }} key={color}></div>
    )
  })

  return(
    <article>
      <h3>{name}</h3>
      {getColors}
    </article>
  )
}

export default ProjectPalette;
