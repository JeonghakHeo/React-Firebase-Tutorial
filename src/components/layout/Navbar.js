import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
// we are just connecting to our reducers not firestore.
// thus just connect, not firestoreConnect
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
const Navbar = (props) => {
  // grabbing the auth property we attached down from auth: state.firebase.auth
  const { auth, profile } = props;
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        { isLoaded(auth) && links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    // check out console.log(state).
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)