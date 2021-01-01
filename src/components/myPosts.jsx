import React, { useEffect } from 'react';
import NavBar from './navBar';
import '../css/myPosts.css';
import NotLogged from './common/notLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from './utils/checkLogged';
import AddPostBtn from './common/addPostBtn';
import Post from './common/post';
import { toast } from 'react-toastify';
import LoadingPosts from './common/loadingPosts';

import getCertainUsersPost from './utils/getCertainUsersPost';
import {
  fetchPostsError,
  fetchPostsRequest,
  fetchPostsSuccess,
} from './redux/actions/actions';
import { connect } from 'react-redux';

function MyPosts({
  posts,
  fetchPostsSuccess,
  fetchPostsRequest,
  fetchPostsError,
  isLoading,
}) {
  useEffect(() => {
    fetchPostsRequest();
    getCertainUsersPost()
      .then((result) => {
        fetchPostsSuccess(result);

        if (checkLogged()) {
          if (result.length === 0) {
            toast.error(`Unfortunately you haven't uploaded anything yet.`);
          }
        }
      })
      .catch((er) => fetchPostsError(er));
  }, []);

  return (
    <div className='myPosts'>
      <NavBar />
      {!checkLogged() ? (
        <NotLogged />
      ) : !posts ? (
        <LoadingPosts />
      ) : (
        posts.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            user={post.user}
            content={post.content}
          />
        ))
      )}
      <AddPostBtn />
      <LogOutBtn />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
  };
};

const mapDispatchToProps = {
  fetchPostsError,
  fetchPostsRequest,
  fetchPostsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//id={post.id} title={post.title} user={post.user} content={post.user}
