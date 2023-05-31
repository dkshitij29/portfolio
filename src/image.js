import React from 'react';

const Image = ({ src, alt, caption }) => {
  return (
    <div className="image-container">
      <img src=""  className="portfolio-image" />
      {caption && <div className="image-caption">{caption}</div>}
    </div>
  );
};

export default Image;
