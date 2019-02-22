import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './app';
import {reducer, join, leave, joinAsync} from './index.redux';

const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);

const render = () => {
  ReactDOM.render(<App store={store} join={join} leave={leave} joinAsync={joinAsync}/>, document.getElementById('root'));
};
render();
store.subscribe(render);