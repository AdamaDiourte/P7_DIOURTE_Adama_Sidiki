import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./pageApp.css";

function PageApp() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipement = () => {
    setIsEquipementOpen(!isEquipementOpen);
  };

  return (
    <div className='pageAppart'>
      <div className='banner-container-appart'>
        {/* image du carrousel */}
      </div>
      
      <div className='appartData'>
        
        <div className='appartData-2'>

          <div className='dataAppart-bis-1'>
            <h1 className='titreAppart'>Cozy Loft on the Canal Saint-Martin</h1>
            <p className='lieuParis'>Paris Ile-de-France</p>

            <div className='tagDiv'>
              <button>Cozy</button>
              <button>Canal</button>
              <button>Paris 10</button>
            </div>
          </div>

          <div className='dataAppart-bis-2'>
            <div className='idProprio'>
                <div className='nomPrenomProprio'>
                  <p className='prenomProprio'>Alexandre</p>
                  <p className='nomProprio'>Dumas</p>
                </div>
                <div className='photoProprio'></div>
            </div>
          
              <div className='etoile'>
                <FontAwesomeIcon icon={faStar} style={{color: "#ff6060"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ff6060"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ff6060"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#e0d7d7"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#e0d7d7"}} />
              </div>
          </div>

        </div>

        <div className='descriptEquip'>
          <div className='description'>
            <div className='description_buton' onClick={toggleDescription}>
              <button>Description</button>
              {isDescriptionOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </div>
            {isDescriptionOpen && <p className='description_texte'>
                Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). 
              </p>}
          </div>

          <div className='equipement'>
            <div className='equipement_buton' onClick={toggleEquipement}>
              <button>Equipement</button>
              {isEquipementOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </div>
            {isEquipementOpen && <ul className='equipement_texte'>
              <li>Climatisation</li>
              <li>Wifi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche cheveux</li>
              <li>Cintres</li>
              </ul>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageApp;
