import React from 'react'
import "../styles/fichierstyles/aboutpage.scss";
import Collapse from '../components/collapse/collapse';
import Banner from '../components/banner/banner';
import bannerImage from '../images/BackgroundApropos.png';


function About() {
  // Données pour les différents collapses
  const collapsesData = [
    {
      title: "Fiabilité",
      content: "Notre engagement est de fournir des services fiables et de haute qualité à nos clients."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "Nous nous engageons à offrir un service client exceptionnel et une assistance continue."
    },
    {
      title: "Sécurité",
      content: "La sécurité est notre priorité. Nous appliquons les meilleures pratiques pour assurer la sécurité de nos clients."
    },
    {
      title: "Sécurité 2",
      content: "Ltoto our assurer la sécurité de nos clients."
    }
  ];

  return (
    <div >
      <Banner backgroundImage={bannerImage} />
      <div className='about'>
        {collapsesData.map((collapse, index) => (
          <Collapse 
            key={index}
            title={collapse.title} 
            content={collapse.content} 
          />
        ))}
      </div>
    </div>
  );
}

export default About;

