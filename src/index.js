import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create store in index.js
// import applyMiddleware from redux for thunk
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'

// allows our application to have access to reducer
import { Provider } from 'react-redux'

// going to create multiple reducers to manage different actions
// actions for handling project actions; create project, delete project
// for authentication; signup,login 
// then combine into a single root reducer

// npm install redux-thunk 
// redux thunk is a middleware so we need to apply it to our store
import thunk from 'redux-thunk'

// applyMiddleware is a store enhancer, giving extra functionalities
// we can have many enhancers inside createstore(rootReducer, A, B, C...)
// they enhance store with extra functionalities 
// with functionalities, we can return a function inside our action creators then interact with database

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'
import { useSelector  } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'


// we want to use both getFirestore and getFirebase so we can access the firebase
// or firestore API inside the function in projectAction.js
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // tells where to connect to
    reduxFirestore(fbConfig),
    // reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
  )
);

// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true
// }
// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,

// }

// // function AuthIsLoaded({children}) {
// //   const auth = useSelector(state => state.firebase.auth)
// //   if(!isLoaded(auth)) return<div>Loading screen...</div>;
// //   return children
// // }


//     ReactDOM.render(
//       <Provider store={store}>
//         <ReactReduxFirebaseProvider {...rrfProps}>
//           {/* <AuthIsLoaded> */}
//             <App />
//           {/* </AuthIsLoaded> */}
//         </ReactReduxFirebaseProvider>
//       </Provider>, document.getElementById('root'));
//       serviceWorker.unregister();    

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"> <p>Loading Mario Plan...</p></div>;
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
      
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();