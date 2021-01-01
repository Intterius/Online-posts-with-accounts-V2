import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/notFound.css'
function NotFound(props) {
  return (
    <div style={{color:'black',overflow:'hidden', borderRadius:'35px'}}>
    <Card style={{ width: '45%', left:'27%',marginTop:'6%',border:'1px solid black' }}>
      {' '}
      <Card.Img variant='top' src='https://picsum.photos/1920/1080' />
      <Card.Body>
      <Card.Title>404</Card.Title>
        <Card.Title>Ooops! Page not found...</Card.Title>
        <Card.Text>
       Go to the home <Link to="/allposts" >page.</Link>
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>
  );
}

export default NotFound;
