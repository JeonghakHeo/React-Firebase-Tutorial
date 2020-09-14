import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create store in index.js
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

// allows our application to have access to reducer
import { Provider } from 'react-redx'

// going to create multiple reducers to manage different actions
// actions for handling project actions; create project, delete project
// for authentication; signup,login 
// then combine into a single root reducer
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
