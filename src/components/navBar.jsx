import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../css/navBar.css';

function NavBar(props) {
  return (
    <Navbar expand='lg'>
      <Nav
        className='mx-auto links'
        style={{ paddingRight: '55px', paddingLeft: '55px' }}
      >
        <NavLink className='' to='/sign-in'>
          Sign In
        </NavLink>
        <NavLink className='' to='/allposts'>
          Show all posts
        </NavLink>
        <NavLink className='' to='/myposts'>
          My posts
        </NavLink>
        <NavLink className='' to='/addpost'>
          Add a new post
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
