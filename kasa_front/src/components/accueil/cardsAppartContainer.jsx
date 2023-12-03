import React from 'react';
import "../../styles/cardsAppartContainer.css";

function ContenerMain(props) {
  const children = props.children;
  return (
    <div className='main'>
      <div>{children}</div>
    </div>
  );
}

export default ContenerMain;
