import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="bg-blue-400 h-30 flex justify-center">
                <NavLink to="/">
                    <img 
                    className="color-white h-20"
                    src="https://static.thenounproject.com/png/4932-200.png"
                    alt=""
                    ></img>
                </NavLink>
            </nav>
        )
    }
}

export default NavBar;