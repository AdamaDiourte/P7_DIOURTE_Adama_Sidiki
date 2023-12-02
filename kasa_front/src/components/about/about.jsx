import React from 'react'
import "./about.css";
import Collapse from '../appartement/Collapse';
import Banner from '../banner/banner';
import bannerImage from '../../images/BackgroundApropos.png';

function About() {
  return (
    <div >
      <div>
        <Banner backgroundImage={bannerImage} />
      </div>

      <div className='about'>
      <Collapse 
        title="Fiabilité" 
        content="Notre engagement est de fournir des services fiables et de haute qualité à nos clients." 
      />
      <Collapse 
        title="Respect" 
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
      />
      <Collapse 
        title="Service" 
        content="Nous nous engageons à offrir un service client exceptionnel et une assistance continue." 
      />
      <Collapse 
        title="Sécurité" 
        content="La sécurité est notre priorité. Nous appliquons les meilleures pratiques pour assurer la sécurité de nos clients." 
      />
      </div>
    </div>
  );
}

export default About;
