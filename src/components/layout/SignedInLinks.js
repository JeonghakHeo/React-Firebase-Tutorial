import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
// to get 'active' class and show when only signed in

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

// this is not a functional component so we need to take props
// so we can't this.props 
const SignedInLinks = (props) => {

  return(
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      {/* if it was onClick={props.signOut() the function will run automatically when the page loads} */}
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
        {props.profile.initials}
        </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)