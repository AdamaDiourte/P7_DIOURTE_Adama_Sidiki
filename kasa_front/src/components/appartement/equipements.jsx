// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "../../styles/fichierstyles/equipements.scss"; 
// import Collapse from '../collapse/collapse.jsx'; 
// import appartData from '../../data/data.js';


// function Equipement() {
//   const [equipments, setEquipments] = useState([]);
//   const { appartId } = useParams();

//   useEffect(() => {
//     // Trouver l'appartement avec l'ID correspondant
//     const foundAppart = appartData.find(appart => appart.id === appartId);
//     if (foundAppart) {
//       setEquipments(foundAppart.equipments); // Mettre à jour les équipements
//     }
//   }, [appartId]);

//   // Gérer le cas où les équipements ne sont pas trouvés
//   if (!equipments.length) {
//     return <div>Équipements non disponibles</div>;
//   }

//   // Préparer le contenu des équipements sous forme de liste
//   const equipmentContent = (
//     <ul>
//       {equipments.map((equipment, index) => (
//         <li key={index}>{equipment}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Collapse title="Équipements" content={equipmentContent} />
//   );
// }

// export default Equipement;


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
