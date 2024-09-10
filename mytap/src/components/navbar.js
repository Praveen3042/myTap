import Container from 'react-bootstrap/Container'
import Nav from  'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import React  from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const Navbar1 = () => {
  const fixednavbar= {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000, 
      backgroundColor: '#343a40',
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={fixednavbar}>
    <Container>
      <Navbar.Brand href="#home">The Automation People</Navbar.Brand>
        <Nav className=" justify-content-end">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/datatable">datatable</Nav.Link>
        </Nav>
    </Container>
   </Navbar>
  )
}

export default Navbar1