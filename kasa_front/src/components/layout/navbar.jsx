import React from 'react';
import "../../styles/fichierstyles/navbar.scss";
import logo from '../../images/Logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar-logo">
                    <img src={logo} alt="Nom du site" />
                </div>
            </NavLink>

            <ul className='nav-links'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'link-active' : ''}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/apropos" className={({ isActive }) => isActive ? 'link-active' : ''}>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
