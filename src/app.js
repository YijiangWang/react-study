import React from 'react';
import {connect} from 'react-redux';
import {join, leave, joinAsync} from './index.redux';

let App = class App extends React.Component{
  render(){
    const {num, join, leave, joinAsync} = this.props;
    return (<div>
      <h2>欢迎来到学校报名,已报名：{num.reducer}</h2>
      <button onClick={join}>新生报到</button>
      <button onClick={leave}>办理退学</button>
      <button onClick={joinAsync}>我过两天报到</button>
    </div>);
  }
};

const mapStateToProps = state => {
  return {num: state};
};
const actionCreators = {join, leave, joinAsync};
App = connect(mapStateToProps, actionCreators)(App);
  
export default App;  