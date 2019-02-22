import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './app';
import {reducer} from './index.redux';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
};
render();
store.subscribe(render);