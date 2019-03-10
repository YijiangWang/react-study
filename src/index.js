import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import reducers from './reducer';
import Auth from './auth';
import Dashboard from './dashboard';


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    // 判断 devToolsExtension 是否存在，如果存在就获取 devToolsExtension()，否则就是用一个空函数
    window.devToolsExtension ? window.devToolsExtension() : () => { }
  )
);

// Provider 的使用
ReactDOM.render(<div>
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/auth' exact component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/auth'></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
</div>, document.getElementById('root'));