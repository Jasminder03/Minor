import React from 'react'
import "./NavIbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { r2 } from '../../assets';
import { Link, json } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Navibar = () => {

  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem('name');
    navigate('/')
  }



  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg" sticky='top' data-bs-theme="dark">
        <Container className='fs-3' >
          <Navbar.Brand href="#home"><img src={r2} className='ig' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" bsPrefix='right'>
              <Nav.Link><Link to='/' className='no_link2'> Home </Link></Nav.Link>
              <Nav.Link><Link to='/all' className='no_link2' >All </Link></Nav.Link>
              <Nav.Link><Link to='/Top_rated' className='no_link2'> Top </Link></Nav.Link>
              <Nav.Link> <Link to='/latest' className='no_link2'> Latest </Link></Nav.Link>

              {
                isAuthenticated ?
                  <div className='namee'>
                    <Nav>
                      <NavDropdown title={user.nickname} className='no-link'  >
                        <NavDropdown.Item onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </div>
                  :
                  <Nav.Link>
                    <button className='bt' onClick={() => loginWithRedirect()}>
                      Login/SignUp    </button></Nav.Link>
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navibar