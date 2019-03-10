import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import App from './app';
import { reducer } from './index.redux';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  // 判断 devToolsExtension 是否存在，如果存在就获取 devToolsExtension()，否则就是用一个空函数
  window.devToolsExtension ? window.devToolsExtension() : () => { }
)
);

function Erban() {
  return <h2>二班</h2>;
}
function Sanban() {
  return <h2>三班</h2>;
}
class Test extends React.Component{
  render(){
    console.log(this.props);
    return (<div>
      测试组件：{this.props.match.params.location}
    </div>)
  }
}

// Provider 的使用
ReactDOM.render(<div>
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>一班</Link>
          </li>
          <li>
            <Link to='/erban'>二班</Link>
          </li>
          <li>
            <Link to='/sanban'>三班</Link>
          </li>
        </ul>
        {/* 设置路由渲染对应的页面 */}
        <Route path='/' exact component={App}></Route>
        <Route path='/erban' component={Erban}></Route>
        <Route path='/sanban' component={Sanban}></Route>
        <Route path='/:location' component={Test}></Route>
      </div>
    </BrowserRouter>
  </Provider>
</div>, document.getElementById('root'));