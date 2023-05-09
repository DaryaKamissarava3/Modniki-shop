import React from 'react';
import './picture.css'

const Picture = ({imageUrl, name}) => {
  return (
    <img
      className="product-img"
      src={imageUrl}
      alt={name}
    />
  );
};

export default Picture;