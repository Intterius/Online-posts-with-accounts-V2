import React, { useEffect } from 'react';
import NavBar from './navBar';
import NotLogged from './common/notLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from '../utils/checkLogged';
import AddPostBtn from './common/addPostBtn';
import Post from './common/post';
import LoadingPosts from './common/loadingPosts';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/actions';
import { getMyPosts } from '../redux/actions/actions';
import { useLocation } from 'react-router-dom';
import '../css/allPosts.css';

function AllPosts({ posts, getPosts, getMyPosts }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/allposts') {
      getPosts();
    } else if (pathname === '/myposts') {
      getMyPosts();
    }
  }, [pathname]);

  const validateContent = () => {
    return !checkLogged() ? (
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
    );
  };

  return (
    <div>
      <NavBar />
      {validateContent()}
      <AddPostBtn />
      <LogOutBtn />
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.data.posts,
});

export default connect(mapStateToProps, { getPosts, getMyPosts })(AllPosts);
