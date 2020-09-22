// rafce + tap => create the template below 
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import moment from 'moment'
// props have been attatched from App.js
// <Route path="/project/:id" component={ProjectDetails} />
// when we use router to load a component, React automatically 
// attatches props to it
// check props from console.log(props) for the id constant below
const ProjectDetails = (props) => {
//  const id = props.match.params.id;
//  console.log(props)
const { project, auth } = props;
if(!auth.uid) return <Redirect to='/signin' />

if (project) {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {project.authorFirstname} {project.authorLastName}</div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  )
} else {
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>  
  )
}
 
}

// the object in return represents what we want to attatch to props
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
