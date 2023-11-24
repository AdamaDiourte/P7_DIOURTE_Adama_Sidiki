import React from 'react'
import "./cardsApp.css";
import { Link } from 'react-router-dom';


function CardsAppartement() {
  return (
    <div>
        <Link to="appartement">
          <div className='cardAppart'>
            <h2>Titre de la location</h2>
          </div>
        </Link>
    </div>
  )
}

export default CardsAppartement