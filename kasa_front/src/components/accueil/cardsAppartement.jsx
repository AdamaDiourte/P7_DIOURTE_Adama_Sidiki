import React from 'react';
import { Link } from 'react-router-dom';
import appartData from '../../data/data.js';

import "./cardsApp.css";

function CardsAppartement() {
  return (
    <div className='div_Appart'>
      {appartData.map(item => (
        <Link to={`appartement/${item.id}`} key={item.id}>
          <div className='cardAppart'>
            <img className='img_cover' src={item.cover} alt={item.title} />
            <h2 className='title_Appart'>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardsAppartement;
