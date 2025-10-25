import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import downloadDark from '../../assets/icons/download-dark.svg';
import downloadLight from '../../assets/icons/download-light.svg';

const DownloadIcon = ({ className = '', alt = 'download' }) => {
  const { mode } = useTheme();
  
  const icons = {
    dark: downloadDark,
    light: downloadLight,
  };

  return (
    <img 
      src={icons[mode]} 
      alt={alt}
      className={className}
    />
  );
};

export default DownloadIcon;
