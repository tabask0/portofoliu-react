import React from 'react'
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard'
import computer from '../assets/icons/computer.svg'
import algo from '../assets/icons/algo.svg'
import puzzle from '../assets/icons/puzzle.svg'
import repair from '../assets/icons/repair.svg'

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: "I can develop SPAs using React/Angular."
  },
  {
    icon: algo,
    title: "Backend Development",
    about: "My backend skills are a little low but I'm learning."
  },
  {
    icon: repair,
    title: "Design",
    about: "I can make some easy logos, banners or Photoshop material that needs to be implemented."
  },
  {
    icon: puzzle,
    title: "Continuous Professional Self-Development",
    about: "I started coding as a passion, it is still a passion which I want to develop."
  },
  {
    icon: api,
    title: "API",
    about: "I can work with HTTP requests."
  },
  {
    icon: computer,
    title: "The Mission",
    about: "In the close future I want to make full-stack projects."
  }
] 


const About = () => {
  return (
    <div className="about">
      <h6 className="about_intro">
        Hi, my name is Andrei and I am a Frontend Developer studying computer science in the last year at Titu Maiorescu University of Bucharest.
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What I can offer</h6>
        <div className="row">
          {
            skills.map(skill=> 
              <SkillCard skill={skill}/>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default About