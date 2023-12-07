import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import appartData from '../../data/data.js';
import "../../styles/fichierstyles/carrousel.scss";

function Carrousel() {
  // État pour stocker les images de l'appartement
  const [pictures, setPictures] = useState([]);
  // Extraction de l'ID de l'appartement à partir de l'URL
  const { appartId } = useParams();

  // Effet pour charger les images de l'appartement
  useEffect(() => {
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart && foundAppart.pictures) {
      setPictures(foundAppart.pictures);
    }
  }, [appartId]);

  // Affichage d'un indicateur de chargement si aucune image n'est trouvée
  if (pictures.length === 0) {
    return <div>Loading...</div>;
  }

  // Fonction pour définir les styles des flèches de navigation
  const arrowStyles = (left = true) => ({
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    [left ? 'left' : 'right']: 10,
    width: 40,
    height: 40,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    outline: 'none'
  });

  // Styles pour la légende sous chaque image
  const legendStyles = {
    color: 'white',
    fontSize: '1.2rem',
    bottom: 20, 
    background: 'transparent'
  };

  return (
    <div className="carrousel-container">
      <Carousel 
        // Propriétés du composant Carousel
        showArrows={pictures.length > 1}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={pictures.length > 1}
        useKeyboardArrows={true}
        autoPlay={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          // Rendu conditionnel de la flèche précédente
          hasPrev && (
            <button type="button" onClick={onClickHandler} style={arrowStyles(true)}>
              <FontAwesomeIcon icon={faChevronLeft} size="3x" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          // Rendu conditionnel de la flèche suivante
          hasNext && (
            <button type="button" onClick={onClickHandler} style={arrowStyles(false)}>
              <FontAwesomeIcon icon={faChevronRight} size="3x" />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index) =>
          // Rendu des indicateurs de sélection
          <button
            type="button"
            onClick={onClickHandler}
            aria-label={`Image ${index + 1}`}
            style={{ background: isSelected ? '#ff6060' : 'transparent' }}
          />
        }
      >
        {pictures.map((pic, index) => (
          // Rendu de chaque image dans le carrousel
          <div key={index} className="slide-container">
            <img src={pic} alt={`Image de l'appartement ${index + 1}`} />
            {pictures.length > 1 && <p className="legend" style={legendStyles}>{`${index + 1} / ${pictures.length}`}</p>}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;
