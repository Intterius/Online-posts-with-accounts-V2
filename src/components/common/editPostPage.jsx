import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
function EditPostPage() {
  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
  });
  const [userInput, setUserInput] = useState({ title: '', content: '' });
  const { id: paramsId } = useParams();
  const history = useHistory();
  const user = localStorage.getItem('username');
  const postId = localStorage.getItem('postId');
  useEffect(() => {
    if (postId !== paramsId) {
      history.push('/not-found');
    }
    getPostContent().then((res) => {
      const { title, content } = res;
      setUserInput({ title, content });
      setPostContent({ title, content });
    });
  }, []);

  const getPostContent = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/users-posts/${postId}`
    );
    return data;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handlePosting = async (user) => {
    const timestamp = new Date();
    await axios.patch(`http://localhost:3000/users-posts/${postId}`, {
      title: userInput.title,
      content: userInput.content,
      user: user,
      time: timestamp.getTime(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.title || !userInput.content) {
      return toast.error('Please fill in the inputs.');
    } else {
      handlePosting(user)
        .then((res) => {
          localStorage.removeItem('postId');
          history.push('/allposts');
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    postContent.title && (
      <div
        className='form'
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: '15px',
          marginTop: '5%',
        }}
      >
        <form
          className='sign-form'
          style={{ backgroundColor: 'transparent' }}
          onSubmit={handleSubmit}
        >
          <div className='form-group'>
            <label htmlFor='title' style={{ color: 'white' }}>
              <h1>Title</h1>
            </label>
            <input
              name='title'
              id='title'
              type='text'
              value={userInput.userTitle}
              defaultValue={postContent.title}
              autoFocus={true}
              className='form-control'
              minLength='10'
              maxLength='100'
              onChange={handleChange}
            />
            <label htmlFor='content' style={{ color: 'white' }}>
              <h1>Your Content</h1>
            </label>
            <textarea
              value={userInput.userContent}
              defaultValue={postContent.content}
              name='content'
              id='content'
              cols='100'
              rows='9'
              style={{ resize: 'none' }}
              className='form-control'
              minLength='50'
              maxLength='560'
              onChange={handleChange}
            ></textarea>
            <br />
            <button className='btn btn-success btn-sm'>Save</button>
          </div>
        </form>
      </div>
    )
  );
}

export default EditPostPage;
