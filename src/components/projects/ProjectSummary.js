import React from 'react'

// keep the template of ProjectList, making the app more modular
const ProjectSummary = () => {
  return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Projcet Title</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
  )
}

export default ProjectSummary