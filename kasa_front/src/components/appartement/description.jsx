import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./description.css";
import appartData from '../../data/data.js'; // Assurez-vous que le chemin vers data.js est correct

function Description() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [description, setDescription] = useState(""); // État pour stocker la description
  const { appartId } = useParams(); // Récupère l'ID de l'appartement depuis l'URL

  useEffect(() => {
    // Trouver l'appartement avec l'ID correspondant
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart) {
      setDescription(foundAppart.description); // Mettre à jour la description
    }
  }, [appartId]);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  // Gérer le cas où la description n'est pas trouvée
  if (!description) {
    return <div>Description non disponible</div>;
  }

  return (
    <div className='description'>
      <div className='description_buton' onClick={toggleDescription}>
        <button>Description</button>
        <FontAwesomeIcon icon={isDescriptionOpen ? faChevronDown : faChevronUp} />
      </div>
      {isDescriptionOpen && <p className='description_texte'>{description}</p>}
    </div>
  );
}

export default Description;
