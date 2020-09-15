import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
class CreateProjects extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      // to indetify which property to update
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // project passed down here is from this.state 
    createProject: (project) => dispatch(createProject(project))
  }
}

// first parameter shoulb be mapStateToProps but since we don't have 
// we just pass null 
export default connect(null, mapDispatchToProps)(CreateProjects)
