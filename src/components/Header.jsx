import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home">
        <Link to={'/'} style={{textDecoration:'none',color:'white',fonstsize:'30px' }}>
        <i class="fa-solid fa-video fa-bounce text-warning me-4"></i> {' '}
    Video Player</Link>
      
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header