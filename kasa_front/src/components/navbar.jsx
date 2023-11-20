import React from 'react'
import logo from '../images/Logo.png';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar-logo">
                    <img src={logo} alt="Nom du site" />
                </div>
            </NavLink>

            <div className='div-navlink'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : ''}>
                    Accueil
                </NavLink>
                
                <NavLink to="/apropos" className={({ isActive }) => isActive ? 'link-active' : ''}>
                    A propos
                </NavLink>
            </div>

        </nav>
    );
}

export default Navbar;
