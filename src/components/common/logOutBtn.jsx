import React from 'react';
import { Link } from 'react-router-dom';
import checkLogged from '../utils/checkLogged';

function LogOutBtn(props) {
  const logOut = () => {
    localStorage.setItem('username', '');
  };
  return (
    checkLogged() && (
      <div style={{ position: 'fixed', right: '2%', top: '2%' }}>
        <button className='btn btn-danger btn-sm'>
          <Link
            to='sign-in'
            style={{ textDecoration: 'none', color: 'white' }}
            onClick={logOut}
          >
            Log out, {localStorage.getItem('username')}.
          </Link>
        </button>
      </div>
    )
  );
}

export default LogOutBtn;
