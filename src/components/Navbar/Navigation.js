import React, { Component } from 'react';
import './Navigation.scss';
import logo from "../../logo.png"
import {NavLink} from "react-router-dom"
class Navigation extends Component {
    render() {
        return (
            <div>
              <nav className="navbar">
            <img src={logo} alt="city tours logo"></img>
            <ul className="nav-links">
                <li>
                <NavLink className="nav-link" exact activeStyle={{color:"green"}} to="/">Home</NavLink>
                </li>

                <li>
                <NavLink className="nav-link" exact activeStyle={{color:"green"}} to="/about">About</NavLink>
                </li>

                <li>
                <NavLink className="nav-link" exact activeStyle={{color:"green"}} to="/tour">Tour</NavLink>
                </li>
            </ul>
        </nav>  
            </div>
        );
    }
}

export default Navigation;