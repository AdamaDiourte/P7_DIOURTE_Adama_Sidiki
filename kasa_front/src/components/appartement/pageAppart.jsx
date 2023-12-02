import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import appartData from '../../data/data.js';
import Description from './description';
import Equipement from './equipements';
import TagName from './tag';
import Carrousel from './carrousel';
import Errorpage from '../errorPage/errorpage.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './pageAppart.css';

function PageAppart() {
  const [appartement, setAppartement] = useState(null);
  const { appartId } = useParams();

  useEffect(() => {
    const foundAppart = appartData.find(appart => appart.id === appartId);
    if (foundAppart) {
      setAppartement(foundAppart);
    }
  }, [appartId]);

  if (!appartement) return <Errorpage/>;

  return (
    <div className='pageAppart'>
      <Carrousel pictures={appartement.pictures} />

      <div className='appartInfo'>
        <div className='appartText'>
          <h1 className='appartName'>{appartement.title}</h1>
          <p className='locationInfo'>{appartement.location}</p>
          <TagName />
        </div>

        <div className='hostEtNotation'>
          <div className='hostInfo'>
            <p className='hostInfo_Name'>{appartement.host.name}</p>
            <img className='imgHost' src={appartement.host.picture} alt={`Hôte : ${appartement.host.name}`} />
          </div>

          <div className='rating'>
            {[...Array(parseInt(appartement.rating))].map((_, index) => (
              <FontAwesomeIcon className="ratingStars" icon={faStar} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className='descriptionAndEquipement'>
        <Description description={appartement.description} />
        <Equipement equipments={appartement.equipments} />
      </div>
    </div>
  );
}

export default PageAppart;
