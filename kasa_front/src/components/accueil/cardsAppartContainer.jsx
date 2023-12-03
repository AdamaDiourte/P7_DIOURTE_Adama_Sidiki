import React from 'react';
import "../../styles/fichierstyles/cardsAppartContainer.scss";

function ContenerMain(props) {
  const children = props.children;
  return (
    <div className='main'>
      <div>{children}</div>
    </div>
  );
}

export default ContenerMain;
