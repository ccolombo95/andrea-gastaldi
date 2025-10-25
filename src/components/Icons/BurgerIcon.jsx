import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import burgerDark from '../../assets/icons/burger-dark.svg';
import burguerLight from '../../assets/icons/burguer-light.svg';

const BurgerIcon = ({ className = '', alt = 'menu' }) => {
  const { mode } = useTheme();
  
  const icons = {
    dark: burgerDark,
    light: burguerLight,
  };

  return (
    <img 
      src={icons[mode]} 
      alt={alt}
      className={className}
    />
  );
};

export default BurgerIcon;
