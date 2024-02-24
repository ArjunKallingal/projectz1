import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './headfoot.css'

const Header = () => {

  const navigate=useNavigate();

  return (
    <div className='container-fluid head'>
      <div className='bg-primary head-news' style={{borderRadius:'0px 0px 17px 17px'}}>
        <p className='text-center text-white'>latest news - Shhh! I'm Hinting (Cyber) Risks ↘	</p>
      
      <Navbar expand="lg" className="bg-body-tertiary" style={{borderRadius:'0px 0px 15px 15px'}}>
        <Container fluid>
          <Navbar.Brand href="#" className='ms-3 me-3'><h2>tezco</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Our Projects</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/feedback">feedback</Nav.Link>
            </Nav>
            <Button className='me-3' onClick={()=>navigate('/login')} variant="outline-primary">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
    </div>
  )
}

export default Header