import React from 'react';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import email from '../assets/icons/email.svg'
import avatar from '../assets/projects_images/0.jpg'
import {motion} from 'framer-motion'



const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:bucur37@gmail.com")
  }

  const sidebarVariant = {
    hidden: {
      x: '-20vh'
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1, duration: 0.5, type: 'spring'
      }
    }
  }

  return (
    <motion.div className="sidebar"
    variants={sidebarVariant}
    initial='hidden'
    animate='visible'
    >
      <img src={avatar} alt="avatar" className="sidebar_image"/>
      <div className="sidebar_name">Andrei <span>Bucur</span></div>
      <div className="sidebar_item sidebar_title"><span>Frontend</span> Developer</div>
      <a href={require('../assets/projects_images/resume.pdf')} download="resume.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={tie} alt="resume" className="sidebar_icon"/>Resume
        </div>
      </a>
      <div className="sidebar_contact">
        <div className="sidebar_item sidebar_github">
          <a href="https://github.com/tabask0?tab=repositories" target="_blank" rel="noreferrer"><img src={github} alt="email" className="sidebar_icon mr-3" />Github</a>
        </div>
        <div className="sidebar_item sidebar_github">
        <a href="https://www.linkedin.com/in/andrei-bucur-258ab2182/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" className="sidebar_icon mr-3" />Linkedin Profile</a>
        </div>
        <div className="sidebar_location">
          <img src={pin} alt="location" className="sidebar_icon mr-3 mb-2"/>
          Bucharest, Romania</div>
        <div className="sidebar_item"><img src={email} alt="email" className="sidebar_icon mr-3 mb-2"/>bucur37@gmail.com</div>
    </div>
    <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Contact me!</div>
    </motion.div>
  )
}

export default Sidebar;