import React from 'react';
import "./main.css";

function ContenerMain(props) {
  const children = props.children;
  return (
    <div className='main'>
      <div>{children}</div>
    </div>
  );
}

export default ContenerMain;
