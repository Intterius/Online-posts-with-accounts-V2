import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import deletePost from '../utils/deletePost';
import { Link } from 'react-router-dom';
function Post({ id, title, content, user }) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const activeUser = localStorage.getItem('username');
    if (user === activeUser) {
      setCurrentUser(activeUser);
    }
  }, []);
  const setPostId = (id) => {
    localStorage.setItem('postId', id);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'black',
        opacity: '0.7',
        marginBottom: '1%',
      }}
      key={id}
    >
      <Card style={{ width: '45%' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <hr style={{ border: '1px solid black' }} />
        <p>Posted by {user}</p>

        {currentUser && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className='btn btn-success' onClick={() => setPostId(id)}>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/edit-post/${id}`}
              >
                Edit
              </Link>
            </button>
            <button
              onClick={() =>
                deletePost(id).then((resp) => window.location.reload())
              }
              className='btn btn-danger'
            >
              Delete
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default Post;
