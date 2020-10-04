import React from 'react'
import './DescriptionBox.css';

function DescriptionBox(props) {
  return (
    <div className="DescriptionBox">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default DescriptionBox;