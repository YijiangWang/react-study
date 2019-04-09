import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import App from './app';
import {logout} from './auth.redux';

class Erban extends React.Component{
  render(){
    return <h2>Erban</h2>
  }
}
class Sanban extends React.Component{
  render(){
    return <h2>Sanban</h2>
  }
}
let Dashboard = class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    // const redirectToLogin = <Redirect to ='/login'></Redirect>;
    return (<div>
      <ul>
        <li>
          <Link to='/dashboard/yiban'>一班</Link>
        </li>
        <li>
          <Link to='/dashboard/erban'>二班</Link>
        </li>
        <li>
          <Link to='/dashboard/sanban'>三班</Link>
        </li>
      </ul>
      <Route path='/dashboard/yiban' component={App}></Route>
      <Route path='/dashboard/erban' component={Erban}></Route>
      <Route path='/dashboard/sanban' component={Sanban}></Route>
    </div>)
  }
}

const mapStateToProps = state => {
  return {state: state.auth};
};
const actionCreators = {logout};
Dashboard = connect(mapStateToProps, actionCreators)(Dashboard);

export default Dashboard;