// rafce + tap => create the template below 
import React from 'react'

// props have been attatched from App.js
// <Route path="/project/:id" component={ProjectDetails} />
// when we use router to load a component, React automatically 
// attatches props to it
// check props from console.log(props) for the id constant below
const ProjectDetails = (props) => {
 const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et tempora ipsa eum, voluptatem odio quia incidunt reiciendis dolorem culpa reprehenderit esse quo dolores nihil dolore beatae ducimus, itaque totam.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
