// keep the template of ProjectList, making the app more modular

import React from 'react'
import moment from 'moment'
// receive individual project from ProjectList
const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by {project.authorFirstname} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
  )
}

export default ProjectSummary