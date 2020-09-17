import React from 'react'
import ProjectSummary from './ProjectSummary'

// receiving those props by doing ({projects})
const ProjectList = ({projects}) => {
  
  return(
    <div className="porjcet-list section">
      {/* if done project.map(project => {}) */}
      {/* we might not have any projects to start with thus nothing to show */}
      {/* or until  our component reaches out to an external database in the future */}
      {/* we might not have any projects */}
      {/* by adding porjects && and it's saying if we have projects then do the projects.map() */}
      
      { projects && projects.map(project => {
        return(
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList