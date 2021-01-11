import React from 'react';
import NavBar from './navBar';
import '../css/addPost.css';
import NotLogged from './common/notLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from '../utils/checkLogged';
import AddPostForm from './addPostForm';
function AddPost(props) {
  return (
    <div className='addPost'>
      <NavBar />
      {!checkLogged() ? <NotLogged /> : <AddPostForm />}
      <LogOutBtn />
    </div>
  );
}

export default AddPost;
