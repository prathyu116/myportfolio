import React from 'react'
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import {projectsData} from './../../assets/projectsData'
import ProjectCards from './ProjectCard'
import './Projects.css'

const Projects = () => {
    return (
        <div className='section-container'>
          <Header heading='My Projects'
          details='Check Out My Projects'
           />
           <div className="project-card-container">
               {
                 projectsData.map((projects)=>{
                     return (
                       <ProjectCards
                         projectName={projects.projectName}
                         projectDescription={projects.projectDescription}
                         imageUrl={projects.imageUrl}
                         projectUrl={projects.projectUrl}
                         gitHubUrl={projects.gitHubUrl}
                         techStack={projects.techSTack}
                         features={projects.features}
                       />
                     );
                 })
               }

           </div>
           <FooterLink content='check out '
           toaddress='/contact'
           link='get in touch🤘!'
           
           />
        </div>
    )
}

export default Projects
