import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/errorpage.css";
import Layout from '../components/layout/layout.jsx';


function Errorpage() {
  return (
    <div className='divErrorPage'>
        <span className='typeError'>404</span>

        <p className='textError'>Oups! La page que vous demandez n'existe pas.</p>

        <NavLink to="/" className='returnLink'> 
            <ul>
                <li className='liReturnLink'>Retourner sur la page d’accueil</li>
            </ul>
        </NavLink>
    </div>
  );
}

export default Errorpage;
