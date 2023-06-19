import React from 'react';

const FashionStyleButton = ({ dressCode, generateOutfit }) => {
  const handleClick = () => {
    generateOutfit(dressCode);
  };

  return (
    <button onClick={handleClick}>
      {dressCode.charAt(0).toUpperCase() + dressCode.slice(1)}
    </button>
  );
};

export default FashionStyleButton;
