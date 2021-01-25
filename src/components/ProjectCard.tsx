import React from 'react';
import github from '../assets/icons/github.svg'

const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
  return (
    <div className="projectCard col-md-6 col-lg-4">
      <figure className="projectCard-wrapper">
        <a href={deployed_url} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="projectCard-image"/>
        </a>
        <div className="projectCard-title">
          <a href={github_url} target="_blank" rel="noreferrer">
            <img src={github} alt="github_link" className="projectCard-icon"/>
          {name}</a>
          
        </div>
      </figure>
    </div>
  )
}

export default ProjectCard
