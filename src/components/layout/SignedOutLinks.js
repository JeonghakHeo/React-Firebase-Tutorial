import React from 'react'
import { NavLink } from 'react-router-dom'
// to get 'active' class and show when only signed in
const SignedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/signup'>SignUp</NavLink></li>
      <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks