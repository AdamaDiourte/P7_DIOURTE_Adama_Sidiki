import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import appartData from '../../data/data.js';
import "../../styles/fichierstyles/carrousel.scss";

function Carrousel() {
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { appartId } = useParams();

    // Charge les images lors du montage du composant
    useEffect(() => {
        const foundAppart = appartData.find(appart => appart.id === appartId);
        if (foundAppart && foundAppart.pictures) {
            setPictures(foundAppart.pictures);
        }
    }, [appartId]);

    // Fonctions pour naviguer entre les images
    const nextSlide = () => setCurrentIndex((currentIndex + 1) % pictures.length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);

    // Condition pour afficher la navigation
    const showNavigation = pictures.length > 1;

    return (
        <div className="carrousel-container">
            {showNavigation && (
                <>
                    <button className="carousel-arrow left" onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
                    </button>
                    <button className="carousel-arrow right" onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} size="3x" />
                    </button>
                </>
            )}

            <div className="slide-container">
              {pictures.map((pic, index) => (
                  <img
                      key={index}
                      src={pic}
                      alt={`Image ${index + 1}`}
                      className={index === currentIndex ? 'animate-in' : ''}
                      style={{ display: index === currentIndex ? 'block' : 'none' }}
                  />
              ))}
            </div>


            {showNavigation && <p className="legend">{`${currentIndex + 1} / ${pictures.length}`}</p>}
        </div>
    );
}

export default Carrousel;

