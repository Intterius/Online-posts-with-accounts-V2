import React from 'react';
import AddPostBtn from './common/addPostBtn';
import AlreadyLogged from './common/alreadyLogged';
import LogOutBtn from './common/logOutBtn';
import RegisterForm from './registerForm';
import checkLogged from '../utils/checkLogged';

function Register(props) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {checkLogged() ? <AlreadyLogged /> : <RegisterForm />}
      <LogOutBtn />
      <AddPostBtn />
    </div>
  );
}

export default Register;
