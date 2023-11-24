import React from 'react';
import "./header.css";

function Header(props) {
  const children = props.children;
  return (
    <div className='header'>
      <div>{children}</div>

    </div>
  );
}

export default Header;
