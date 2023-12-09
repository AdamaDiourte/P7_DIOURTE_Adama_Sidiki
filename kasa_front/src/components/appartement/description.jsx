import React from 'react';
import "../../styles/fichierstyles/description.scss";
import Collapse from '../collapse/collapse.jsx';

function AppartementDescription({ description }) {
  //Adapation du collapse à la description de l'appartement
  return (
    <Collapse title="Description" content={description} />
  );
}

export default AppartementDescription;
