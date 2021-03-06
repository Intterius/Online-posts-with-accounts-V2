import React from 'react';
import { Card } from 'react-bootstrap';

function LoadingPosts(props) {
  return (
    <div style={{ color: 'black', overflow: 'hidden', borderRadius: '35px' }}>
      <Card
        style={{
          width: '45%',
          left: '27%',
          marginTop: '6%',
          border: '1px solid black',
        }}
      >
        {' '}
        <Card.Img variant='top' src='https://picsum.photos/1920/1080' />
        <Card.Body>
          <Card.Title>Loading...</Card.Title>
          <Card.Text>We are loading our database :)</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoadingPosts;
