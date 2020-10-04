import React from 'react';
import DescriptionBoxes from './DescriptionBoxes.jsx';
import Heading from './heading.jsx';
import "./Content.css"

function Content() {
  return (
    <div className="Content">
      <Heading />
      <DescriptionBoxes />
    </div>
  );
}

export default Content;