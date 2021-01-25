import React from 'react'
import react from '../assets/icons/react.svg'
import Bar from './Bar'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import ang from '../assets/icons/angular.svg'
import api from '../assets/icons/api.svg'

interface languages {
  icon: string,
  name: string,
  level: number
}

const languages = [
  {
    icon: html,
    name:'HTML',
    level:'80'
  },
  {
    icon: css,
    name:'CSS',
    level:'70'
  },
  {
    icon: js,
    name:'JavaScript',
    level:'50'
  },
  {
    icon: ang,
    name:'Angular',
    level:'40'
  },
  {
    icon: react,
    name:'React',
    level:'40'
  },
  {
    icon: api,
    name:'API',
    level:'50'
  },
]



const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">
            Education
          </h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">
              Computer Science
            </h5>
            <p className="resume-card-name">
              Titu Maiorescu University of Bucharest
            </p>
            <p className="resume-card-details">Studying in the last year.</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">
            Experience
          </h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">
              Freelancing
            </h5>
            <p className="resume-card-name">
              Web Development
            </p>
            <p className="resume-card-details">My professional experience is based on freelancing but very few projects.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg 6 resume-languages">
          <h5 className="resume-language-heading">
            Language and Framework
          </h5>
          <div className="resume-language-body">
            {
              languages.map(language =>
                <Bar value={language} />
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume