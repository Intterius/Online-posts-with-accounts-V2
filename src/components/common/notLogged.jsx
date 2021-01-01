import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotLogged(props) {
  return (
    <div style={{color:'black',overflow:'hidden', borderRadius:'35px'}}>
      <Card style={{ width: '45%', left:'27%',marginTop:'6%',border:'1px solid black' }}>
        {' '}
        <Card.Img variant='top' src='https://picsum.photos/1920/1080' />
        <Card.Body>
          <Card.Title>Not logged in.</Card.Title>
          <Card.Text>
          We are sorry to warn you, but to read our posts you have to be
              signed in, or <Link to="/registration" >registered</Link>.
          </Card.Text>
          <Button variant='primary'><Link to="sign-in" style={{color:'white',textDecoration:'none'}}>Sign in</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NotLogged;
