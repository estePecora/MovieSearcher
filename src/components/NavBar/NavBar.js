import React from 'react';
import { NavLink } from 'react-router-dom';
import Logonav from '../../img/movie-logo-01.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navtitle">
                    <img id="logo" src={Logonav} width="30" height="30" className="logostyle" alt="" />
                    <NavLink exact to="/" className="titlespan">
                        <h4>MOVIE LIST</h4>
                    </NavLink>
                </div>
                
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/" >HOME</NavLink>
                            <NavLink to="/favs" >MY FAVORITES</NavLink>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}