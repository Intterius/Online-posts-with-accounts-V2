import React from 'react';
import { Link } from 'react-router-dom';
import checkLogged from '../../utils/checkLogged';

function AddPostBtn(props) {
  return (
    checkLogged() && (
      <div style={{ position: 'fixed', left: '2%', bottom: '2%' }}>
        <button className='btn btn-success btn-sm'>
          <Link to='addpost' style={{ textDecoration: 'none', color: 'white' }}>
            Add post
          </Link>
        </button>
      </div>
    )
  );
}

export default AddPostBtn;
