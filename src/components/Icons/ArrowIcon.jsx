import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import arrowBGDark from '../../assets/icons/arrow-bg-dark.svg';
import arrowBGLight from '../../assets/icons/arrow-bg-light.svg';

const ArrowIcon = ({ direction = 'next' }) => {
  const { mode } = useTheme();
  
  const arrows = {
    dark: arrowBGDark,
    light: arrowBGLight,
  };
  
  const rotation = direction === 'next' ? 0 : 180;

  return (
    <img 
      src={arrows[mode]} 
      alt={`arrow ${direction}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default ArrowIcon;
