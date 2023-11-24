import React from 'react'
import "./gallery.css";
import CardsAppartement from './cardsAppartement';


function Gallery() {
  return (
    <div className='gallery'>
        <CardsAppartement/>
        <CardsAppartement/>
        <CardsAppartement/>
        <CardsAppartement/>
    </div>
  )
}

export default Gallery;