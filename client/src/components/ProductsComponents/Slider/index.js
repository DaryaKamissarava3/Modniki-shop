import React from 'react';
import './slider.css';

const Slider = ({ sliderBtn, changeSlide, classForBtn, minNumberOfImg, maxNumberOfImg, numberOfImg }) => {
  if (!(minNumberOfImg === 0 || maxNumberOfImg >= numberOfImg)) {
    return <img
      src={sliderBtn}
      alt="change slide button"
      className={classForBtn}
      onClick={changeSlide} />;
  }
};

export default Slider;