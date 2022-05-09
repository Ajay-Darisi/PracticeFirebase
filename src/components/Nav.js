import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <div>
          <li><Link to="">Home</Link></li>
          <li><Link to="contact">Contact</Link></li>
      </div>
    )
  }
}

export default Nav