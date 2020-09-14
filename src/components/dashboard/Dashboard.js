import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

// glues react(Dashboard.js) to redux(store)
import { connect } from 'react-redux'

class Dashboard extends Component {
  render(){
    // console.log(this.props);
    const { projects } = this.props;

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* passing projects object down to ProjectList */}
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}


// return{} this returend object represents which properties are attached to
// the props of this component so then we can access them inside this component
const mapStateToProps = (state) => {
  return {
    // rootReducer -> connect project property in the state 
    // then go to projectReducer.js then connect project: [{id: '1' ...}]
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)