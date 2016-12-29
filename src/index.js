import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Router, hashHistory} from 'react-router';
import reducers from './reducers';
import routes from 'src/routes';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a store with promise and thunk middleware.
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(promise, thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
