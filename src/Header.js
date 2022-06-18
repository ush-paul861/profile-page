import React from 'react';
import Image from './user.jpg';
import {Nav,Navbar,Container,Form,Button} from 'react-bootstrap';
import './Header.css';

const Header = ()=> {
    return(
    <>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='nav' href="#home">Connecting Alumnus</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
    <Nav>
            <Nav.Link href="/signup">SIGN UP</Nav.Link>
            <Nav.Link eventKey={2} href="/login">LOG IN</Nav.Link>
          </Nav>
    </Container>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
      <Button variant="outline-success">GO</Button>
        </Form>
        <Nav.Link href='/profile'><img className='size' src ={Image}/></Nav.Link>
</Navbar>
    <Navbar className='edit'></Navbar>
    </>
    );
};

export default Header;   