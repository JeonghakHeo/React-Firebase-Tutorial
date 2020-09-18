// combine two reducers to one reducer

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// a premade reducer that is made for syncing our firestore data with our state
import { firestoreReducer } from 'redux-firestore'

// for firebase authentication 
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer