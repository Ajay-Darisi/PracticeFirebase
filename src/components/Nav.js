import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <div>
          <li><Link to="home">Home</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="signup">Signup</Link></li>
          <li><Link to="login">Login</Link></li>
      </div>
    )
  }
}

export default Nav