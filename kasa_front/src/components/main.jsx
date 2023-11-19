import React from 'react';
import "./main.css";

function Main(props) {
  const children = props.children;
  return (
    <div className='main'>
      <div>{children}</div>
    </div>
  );
}

export default Main;
