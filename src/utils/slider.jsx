import React from 'react';

const SliderTemplate = ({ videoModel, model }) => {
  return (
    <div className='slider-container-wrapper'>
      {/* Insérez ici le contenu du slide en fonction de videoModel et model */}
      <h2>Video Model: {videoModel}</h2>
      <p>Model: {model}</p>
    </div>
  );
};

export default SliderTemplate;