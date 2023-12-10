import React from 'react';
import "../../styles/fichierstyles/equipements.scss"; 
import Collapse from '../collapse/collapse.jsx'; 

function Equipement({ equipments }) {
  // Présentation du contenu des équipements sous forme de liste
  const equipmentContent = (
    <ul>
      {equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  return (
    <Collapse title="Équipements" content={equipmentContent} />
  );
}

export default Equipement;
