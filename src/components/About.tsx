import React from 'react'
import SkillCard from './SkillCard'
import {motion} from 'framer-motion'
import skills from './data/about_data'


const aboutVariant = {
hidden:{
  opacity: 0
},
visible: {
  opacity: 1,
  transition: {
    delay: 0.2, duration: 0.6
  }
},
exit: {
  opacity: 0,
  transition: {
    ease: 'easeInOut'
  }
}
}

const About = () => {
  return (
    <motion.div className="about"
    variants={aboutVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
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
    </motion.div>
  )
}

export default About