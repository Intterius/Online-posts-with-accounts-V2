import React, { useEffect } from 'react';
import NavBar from './navBar';
import '../css/myPosts.css';
import NotLogged from './common/notLogged';
import LogOutBtn from './common/logOutBtn';
import checkLogged from './utils/checkLogged';
import AddPostBtn from './common/addPostBtn';
import Post from './common/post';
import LoadingPosts from './common/loadingPosts';
import { getMyPosts } from './redux/actions/actions';
import { connect } from 'react-redux';

function MyPosts({ posts, getMyPosts }) {
  useEffect(() => {
    getMyPosts();
  }, []);
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
    <div className='myPosts'>
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
export default connect(mapStateToProps, {getMyPosts})(MyPosts);

//id={post.id} title={post.title} user={post.user} content={post.user}
