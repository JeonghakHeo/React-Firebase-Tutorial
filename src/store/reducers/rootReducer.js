// combine two reducers to one reducer

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineRecuers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer