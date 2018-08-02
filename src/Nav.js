import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/card">Search Cards</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        }
      />
    );
  }
}

export default Nav