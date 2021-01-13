import React from 'react';
import NavBar from './navBar';
import SignInForm from './signInForm';
import AlreadyLogged from './common/alreadyLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from '../utils/checkLogged';
import AddPostBtn from './common/addPostBtn';
import '../css/signIn.css';

function SignIn(props) {
  return (
    <div className='signIn'>
      <NavBar />
      {checkLogged() ? <AlreadyLogged /> : <SignInForm />}
      <LogOutBtn />
      <AddPostBtn />
    </div>
  );
}

export default SignIn;
