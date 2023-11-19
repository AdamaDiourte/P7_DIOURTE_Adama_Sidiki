import React from 'react'
import "./footer.css";
import Imagefooter from "../images/Logo.png"; 

function Footer() {
  return (
    <div>
        <footer className='footer'>
            <div className='imgfooter'>
                <img src={Imagefooter} alt="Logo Kasa" /> 
            </div>
            <p className='textfooter'>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer;
