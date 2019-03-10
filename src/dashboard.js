import React from 'react';
import { Link, Route } from 'react-router-dom';
import App from './app';

class Dashboard extends React.Component {
  render() {
    return (<div>
      <ul>
        <li>
          <Link to='/dashboard/yiban'>一班</Link>
        </li>
      </ul>
      <Route path='/dashboard/yiban' component={App}></Route>
    </div>)
  }
}

export default Dashboard;