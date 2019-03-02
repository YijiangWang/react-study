import React from 'react';

class App extends React.Component{
  render(){
    const {store, join, leave, joinAsync} = this.props;
    return (<div>
      <h2>欢迎来到学校报名<br/>已报名{store.getState()}</h2>
      <button onClick={()=>store.dispatch(join())}>新生报到</button>
      <button onClick={()=>store.dispatch(leave())}>办理退学</button>
      <button onClick={()=>store.dispatch(joinAsync())}>我过两天退学</button>
    </div>);
  }
}
  
export default App;  