import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import api from './Api/ApiReducers';
import app from './App/AppReducers';

const reducer = combineReducers({
  api,
  app
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    )
)

const store = createStore(reducer, enhancer);


export default store
