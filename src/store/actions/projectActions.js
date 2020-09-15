export const createProject = (project) => {
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project
  // } 
  // above is normal way

  // with thunk we can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    // we can pause dispatch and then we can caryy on with dispatch
    dispatch({ type: 'CREATE_PROJECT', project: project });
  }
};

// npm install react-redux-firebase redux-firestore
// react-redux-firebase provides bidings to the firebase service as a whole
// redux-firestore provides redux bindings for firestore databases