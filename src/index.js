import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create store in index.js
// import applyMiddlewarfe from redux for thunk
import { createStore, applyMiddleware } from 'redux'
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
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
