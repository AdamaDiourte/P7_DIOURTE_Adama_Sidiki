import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/fichierstyles/tag.scss'; 
import appartData from '../../data/data.js';


function TagName() {
  const { appartId } = useParams(); // Récupérer l'ID de l'appartement

  // Trouver l'appartement correspondant à partir de l'ID
  const appart = appartData.find(item => item.id === appartId);

  if (!appart) return <div>Appartement non trouvé</div>; // Le cas où l'appartement n'est pas trouvé

  return (
    <div className='tagDiv'>
      {appart.tags.map(tag => (
        <span className='tagSpan' key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default TagName;

