import React, { useState } from 'react';
import FashionStyleButton from './FashionStyleButton';
import OutfitDisplay from './OutfitDisplay';
import { clothing } from '../data/clothing';

const OutfitApp = () => {
  const [outfit, setOutfit] = useState(null);

  const generateOutfit = (dressCode) => {
    const validItems = clothing.filter(item => item.dressCode === dressCode);
    const randomTop = getRandomItem(validItems, 'top');
    const randomBottom = getRandomItem(validItems, 'bottom');
    const randomShoes = getRandomItem(validItems, 'shoes');

    const generatedOutfit = {
      top: randomTop,
      bottom: randomBottom,
      shoes: randomShoes
    };

    setOutfit(generatedOutfit);
  };

  const getRandomItem = (items, itemType) => {
    const filteredItems = items.filter(item => item.type === itemType);
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    return filteredItems[randomIndex];
  };

  return (
    <div>
      <div>
        <FashionStyleButton dressCode="casual" generateOutfit={generateOutfit} />
        <FashionStyleButton dressCode="sport" generateOutfit={generateOutfit} />
        <FashionStyleButton dressCode="formal" generateOutfit={generateOutfit} />
      </div>
      <div>
        <OutfitDisplay outfit={outfit} />
      </div>
    </div>
  );
};

export default OutfitApp;
