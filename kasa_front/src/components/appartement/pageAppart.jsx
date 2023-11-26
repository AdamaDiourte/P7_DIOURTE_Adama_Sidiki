import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import pour accéder aux paramètres de l'URL
import appartData from '../../data/data.js'; // Import des données des appartements
import Description from './description'; // Import du composant Description
import Equipement from './equipements'; // Import du composant Equipement
import TagName from './tag'; // Import du composant TagName
import Carrousel from './carrousel'; // Import du composant Carrousel
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import des icônes FontAwesome
import './pageAppart.css'; // Import du fichier CSS pour le style

function PageAppart() {
  // State pour stocker les informations de l'appartement sélectionné
  const [appartement, setAppartement] = useState(null);
  
  // Récupération de l'ID de l'appartement depuis l'URL
  const { appartId } = useParams();

  // Utilisation d'effect pour charger les données de l'appartement
  useEffect(() => {
    // Recherche de l'appartement correspondant à l'ID
   
    const foundAppart = appartData.find(appart => appart.id === appartId);
  
    // Mise à jour de l'état avec les données trouvées
    if (foundAppart) {
      setAppartement(foundAppart);
    } else {
      console.log('Appartement non trouvé');
    }
  }, [appartId]);
 

  // Affichage d'un message de chargement si les données ne sont pas encore disponibles
  if (!appartement) return <div>Loading...</div>;

  // Rendu du composant avec les détails de l'appartement
  return (
    <div className='pageAppart'>
      {/* Carrousel pour afficher les images de l'appartement */}
      <Carrousel pictures={appartement.pictures} />

      {/* Informations sur l'appartement */}
      <div className='appartInfo'>
        <div className='appartText'>
          <h1 className='appartName'>{appartement.title}</h1>
          
          <p className='locationInfo'>{appartement.location}</p>
          <TagName/>
        </div>

        <div className='hostEtNotation'>
          {/* Informations sur l'hôte de l'appartement */}
          <div className='hostInfo'>
            <p className='hostInfo_Name'>{appartement.host.name}</p>
            <img className='imgHost'src={appartement.host.picture} alt={`Hôte : ${appartement.host.name}`} />
          </div>

          {/* Notation de l'appartement */}
          <div className='rating'>
            {[...Array(parseInt(appartement.rating))].map((_, index) => (
              <FontAwesomeIcon  className="ratingStars" icon={faStar} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Composants pour la description et les équipements de l'appartement */}
      <div className='dscripEq'>
        <Description description={appartement.description} /> 
        <Equipement equipments={appartement.equipments} />
      </div>
      
    </div>
  );
}

export default PageAppart;

