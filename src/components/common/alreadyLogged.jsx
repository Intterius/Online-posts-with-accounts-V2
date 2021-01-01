import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AlreadyLogged(props) {
    return (
        <div style={{color:'black',overflow:'hidden', borderRadius:'35px'}}>
      <Card style={{ width: '45%', left:'27%',marginTop:'6%',border:'1px solid black' }}>
        {' '}
        <Card.Img variant='top' src='https://picsum.photos/1920/1080' />
        <Card.Body>
          <Card.Title>You are already logged :)</Card.Title>
          <Card.Text>
         Go and check people's latest <Link to="/allposts" >posts</Link>.
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
    );
}

export default AlreadyLogged;