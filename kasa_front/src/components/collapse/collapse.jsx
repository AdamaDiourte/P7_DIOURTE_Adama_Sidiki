import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../../styles/fichierstyles/collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Styles conditionnels pour le conteneur du collapse
  const containerStyles = {
    backgroundColor: isOpen ? '#f4efef' : 'transparent', // Couleur de fond appliquée seulement si ouvert
    boxShadow: isOpen ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none' // Box-shadow appliqué seulement si ouvert
  };

  return (
    <div className='collapse-container' style={containerStyles}>
      <div className='collapse-button' onClick={toggleCollapse}>
        <button>{title}</button>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && <div className='collapse-content'>{content}</div>}
    </div>
  );
}

export default Collapse;
