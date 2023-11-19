import React from 'react'
import logo from '../images/Logo.png';
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/">
                <div className="navbar-logo">
                    <img src={logo} alt="Nom du site" />
                </div>
            </Link>

            <ul className='menu'>
                <li>
                    <Link to="/">Accueil</Link>
                </li>

                <li>
                    <Link to="/apropos">A propos</Link>
                </li>
            </ul>

        </nav>
    );
}


export default Navbar;
