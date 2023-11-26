import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import appartData from '../../data/data.js'; // Assurez-vous que le chemin d'accès est correct
import "./equipements.css";

function Equipments() {
  const [isOpen, setIsOpen] = useState(false);
  const [equipments, setEquipments] = useState([]); // État pour stocker les équipements
  const { appartId } = useParams(); // Récupère l'ID de l'appartement depuis l'URL

  useEffect(() => {
    // Trouver l'appartement avec l'ID correspondant
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart && foundAppart.equipments) {
      setEquipments(foundAppart.equipments); // Mettre à jour les équipements
    }
  }, [appartId]);

  const toggleEquipments = () => {
    setIsOpen(!isOpen);
  };

  // Gérer le cas où les équipements ne sont pas trouvés
  if (equipments.length === 0) {
    return <div>Équipements non disponibles</div>;
  }

  return (
    <div className='equipements'>
      <div className='equipement_buton' onClick={toggleEquipments}>
        <button>Equipement</button>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && (
        <ul className='equipement_texte'>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Equipments;
