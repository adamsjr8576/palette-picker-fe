import React from 'react';
import './ProjectPalette.scss';
import images from '../../images/images';

export const ProjectPalette = ({ name, id, colors }) => {

  const getColors = colors.map(color => {
    return(
      <div className='color-box' style={{ backgroundColor: `${color}` }} key={color}>
        <p>{color}</p>
      </div>
    )
  })

  return(
    <article className='project-colors-article'>
      <div>
        <h3>{name}</h3>
        <button className='trash-btn'><img className='icon-bin' src={images.bin} /></button>
      </div>
      <div className='colors-div-container'>
        {getColors}
      </div>
    </article>
  )
}

export default ProjectPalette;
