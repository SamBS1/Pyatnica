import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Link to="/">
        <Navbar.Brand className={location.pathname === '/' ? 'btn btn-success' : 'btn btn-outline-success'}>Home</Navbar.Brand>
        </Link>

        <Link to="/add">
        <Navbar.Brand className={location.pathname === '/add' ? 'btn btn-success' : 'btn btn-outline-success'}>Add</Navbar.Brand>
        </Link>
{/* 
        <Link to="/details/:id">
        <Navbar.Brand className={location.pathname === '/details/:id' ? 'btn btn-success' : 'btn btn-outline-success'}>Details</Navbar.Brand>
        </Link> */}


      </Container>
    </Navbar>
  )
}

export default Header