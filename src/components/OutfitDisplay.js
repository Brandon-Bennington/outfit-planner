import React from 'react';
import './OutfitDisplay.css';

const OutfitDisplay = ({ outfit }) => {
  if (!outfit) {
    return <div>No outfit generated</div>;
  }

  const { top, bottom, shoes } = outfit;

  return (
    <div>
      <h3>Outfit</h3>
      <div className="outfit-images-container">
        <img src={top.imageUrl} alt={top.description} />
        <img src={bottom.imageUrl} alt={bottom.description} />
        <img src={shoes.imageUrl} alt={shoes.description} />
      </div>
      <div>
        <p>{top.description}</p>
        <p>{bottom.description}</p>
        <p>{shoes.description}</p>
      </div>
    </div>
  );
};

export default OutfitDisplay;
