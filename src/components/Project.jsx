import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../assets/project.json'

function Project() {
  const project = data.project
  const h = project.map((item) => <ProjectCard item={item}/>)
 
  return (
    <div id="project">
      {h}
      {/* <h1 className="project_header">Project</h1> */}
      {/* <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/> */}
    </div>
    
  )
}

export default Project