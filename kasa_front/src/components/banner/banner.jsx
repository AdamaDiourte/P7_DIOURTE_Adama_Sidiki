import React from 'react';
import "../../styles/fichierstyles/banner.scss";

function Banner({ backgroundImage, text }) {
  return (
    <picture className="banner-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {text && <h1 className="banner-text">{text}</h1>}
    </picture>
  );
}

export default Banner;
