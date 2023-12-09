import React from 'react';
import '../../styles/fichierstyles/tag.scss'; 

function TagName({ tags }) {
  // Rendu des tags
  return (
    <div className='tagDiv'>
      {tags.map(tag => (
        <span className='tagSpan' key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default TagName;

