import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse-container'>
      <div className='collapse-button' onClick={toggleCollapse}>
        <button>{title}</button>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && <p className='collapse-content'>{content}</p>}
    </div>
  );
}

export default Collapse;
