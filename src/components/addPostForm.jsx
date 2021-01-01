import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
function AddPostForm(props) {
  const user = localStorage.getItem('username');
  const [userInput, setUserInput] = useState({ title: '', content: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handlePosting = (user) => {
    const timestamp = new Date();
    axios.post('http://localhost:3000/users-posts', {
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
      handlePosting(user);
      toast.success('Successfully created a new post!');
      e.currentTarget.reset();
    }
  };
  return (
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
          <button className='btn btn-success btn-sm'>Create a new post</button>
        </div>
      </form>
    </div>
  );
}

export default AddPostForm;
