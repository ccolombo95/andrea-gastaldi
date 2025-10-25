import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import crossDark from '../../assets/icons/cross-dark.svg';
import crossLight from '../../assets/icons/cross-light.svg';

const CrossIcon = ({ className = '', alt = 'close' }) => {
  const { mode } = useTheme();
  
  const icons = {
    dark: crossDark,
    light: crossLight,
  };

  return (
    <img 
      src={icons[mode]} 
      alt={alt}
      className={className}
    />
  );
};

export default CrossIcon;
