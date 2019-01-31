import React from 'react';

class App extends React.Component{
  render(){
    return(<div>
      <h2>大家好，我是军区司令。。。</h2>
      <PaoBingLian capture={'我是师长。。。'}/>
    </div>);
  }
}

class PaoBingLian extends React.Component{
  constructor(){
    super();
    this.state = {soliders: ['小兵张嘎', '拴住', '铁蛋']};
  }
  joinTheArmy = () => {
    this.setState({
      soliders: [...this.state.soliders, '新兵蛋子' + Math.random()]
    });
  }
  render(){
    const {soliders} = this.state;
    return(<div>
      <h2>官职：{this.props.capture}</h2>
      <button onClick={this.joinTheArmy}>报告，有人参军</button>
      <ul>
        {
          soliders.map((value, idx) => {
            return (<li key={idx}>{value}</li>);
          })
        }
      </ul>
    </div>);
  }
}
export default App;