import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/fichierstyles/description.scss";
import appartData from '../../data/data.js';
import Collapse from '../collapse/collapse.jsx';

function AppartementDescription() {
  const [description, setDescription] = useState('');
  const { appartId } = useParams();

  useEffect(() => {
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart) {
      setDescription(foundAppart.description);
    }
  }, [appartId]);

  if (!description) {
    return <div>Description non disponible</div>;
  }

  return (
    <Collapse title="Description" content={description} />
  );
}

export default AppartementDescription;
