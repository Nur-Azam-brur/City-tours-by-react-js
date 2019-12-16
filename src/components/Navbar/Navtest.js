import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Navbar/Navtest.scss'
import logo from "../../logo.png"
import Navbar from "react-bootstrap/Navbar";

import {NavLink} from "react-router-dom"

import Nav from "react-bootstrap/Nav";

class Navtest extends Component {

  

    render() {
      
        return (
            <div>
              
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                      <img
                        src={logo}
                        
                        className="d-inline-block align-top navimg"
                        alt="React Bootstrap logo"
                      />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  <NavLink className="nav-link" exact activeStyle={{color:"white"}} to="/">Home</NavLink>
                  <NavLink className="nav-link" exact activeStyle={{color:"white"}} to="/about">About</NavLink>
                  <NavLink className="nav-link" exact activeStyle={{color:"white"}} to="/tour">Tour</NavLink>                 
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}

export default Navtest;