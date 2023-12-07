import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../../styles/fichierstyles/collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
            <div className={`collapse-button ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                <button>{title}</button>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
