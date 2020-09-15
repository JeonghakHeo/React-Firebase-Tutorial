export const createProject = (project) => {
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project
  // } 
  // above is normal way

  // with thunk we can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    
    // create a constant that gives a reference to firestore database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstname: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
    // when async process is done then after that we dispatch action
    
  }
};

// npm install react-redux-firebase redux-firestore
// react-redux-firebase provides bidings to the firebase service as a whole
// redux-firestore provides redux bindings for firestore databases