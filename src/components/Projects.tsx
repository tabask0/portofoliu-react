import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion'


const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }

    const projectsVariant = {
      hidden:{
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.2, duration: 0.6
        }
      }
    }
    return (
        <motion.div className="container projects"
        variants={projectsVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="projects-navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('framework')}>Frameworks</div>
                <div onClick={() => handleFilterCategory('html-css-js')}>HTML-CSS-JS</div>
                <div onClick={() => handleFilterCategory('wordpress')}>Wordpress</div>
            </div>
            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>
    );
};

export default Projects;