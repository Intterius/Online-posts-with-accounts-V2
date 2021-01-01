import React from 'react';
import NavBar from './navBar';
import '../css/signIn.css';
import SignInForm from './signInForm';
import AlreadyLogged from './common/alreadyLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from './utils/checkLogged';
import AddPostBtn from './common/addPostBtn';

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
