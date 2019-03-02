import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './app';
import {reducer, join, leave, joinAsync} from './index.redux';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    // 判断 devToolsExtension 是否存在，如果存在就获取 devToolsExtension()，否则就是用一个空函数
    window.devToolsExtension ? window.devToolsExtension() : () => {}
  )
);

const render = () => {
  ReactDOM.render(<App store={store} join={join} leave={leave} joinAsync={joinAsync}/>, document.getElementById('root'));
};
render();
store.subscribe(render);