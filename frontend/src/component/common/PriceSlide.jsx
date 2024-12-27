import React from 'react';

const priceSlide = ({ defaultValue, max, step, className }) => {
  return (
    <input
      type="range"
      defaultValue={defaultValue}
      max={max}
      step={step}
      className={`w-full ${className}`}
    />
  );
};

export default priceSlide;