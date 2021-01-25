import React from 'react'
import Bar from './Bar'
import {motion} from 'framer-motion'
import languages from './data/resume_data'

const resumeVariant = {
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

const Resume = () => {
  return (
    <motion.div className="container resume"
    variants={resumeVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
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
    </motion.div>
  )
}

export default Resume