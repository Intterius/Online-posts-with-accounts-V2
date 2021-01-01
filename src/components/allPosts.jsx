import React, { useEffect } from 'react';
import NavBar from './navBar';
import '../css/allPosts.css';
import NotLogged from './common/notLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from './utils/checkLogged';
import AddPostBtn from './common/addPostBtn';
import Post from './common/post';
import getAllPosts from './utils/getAllPosts';
import LoadingPosts from './common/loadingPosts';
import { toast } from 'react-toastify';


import {
  fetchPostsError,
  fetchPostsRequest,
  fetchPostsSuccess,
} from './redux/actions/actions';
import { connect } from 'react-redux';

function AllPosts({posts,fetchPostsSuccess,fetchPostsRequest,fetchPostsError,isLoading}) {

  useEffect(() => {
    fetchPostsRequest()
    getAllPosts().then((result) => {
      fetchPostsSuccess(result);
      if (checkLogged()) {
        if (result.length === 0) {
          toast.success(`Be our first publisher!`);
        }
      }
    }).catch(er=>fetchPostsError(er));
  }, []);

  return (
    <div>
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
    isLoading:state.posts.isLoading
  };
};

const mapDispatchToProps = {
  fetchPostsError,
  fetchPostsRequest,
  fetchPostsSuccess,
};

export default connect(mapStateToProps,mapDispatchToProps,)(AllPosts);