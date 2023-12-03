import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importation des styles de base du carrousel
import appartData from '../../data/data.js';
import "../../styles/carrousel.css";

function Carrousel() {
  const [pictures, setPictures] = useState([]);
  const { appartId } = useParams();

  useEffect(() => {
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart && foundAppart.pictures) {
      setPictures(foundAppart.pictures);
    }
  }, [appartId]);

  if (pictures.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carrousel-container">
      <Carousel 
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
      >
        {pictures.map((pic, index) => (
          <div key={index} className="slide-container">
            <img src={pic} alt={`Image de l'appartement ${index + 1}`} />
            <p className="legend">{`${index + 1} / ${pictures.length}`}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;


