import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/blog'>Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
