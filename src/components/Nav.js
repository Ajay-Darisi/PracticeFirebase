import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Signout from './Signout.js'

export class Nav extends Component {
  render() {
    return (
      <div>
          <li><Link to="home">Home</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <Signout />
      </div>
    )
  }
}

export default Nav