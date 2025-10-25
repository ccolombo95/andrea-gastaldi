import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../assets/images/logo-andre-dark.svg';
import logoLight from '../../assets/images/logo-andre-light.svg';

const LogoIcon = ({ className = '', alt = 'logo', ...props }) => {
  const { mode } = useTheme();
  
  const logos = {
    dark: logoDark,
    light: logoLight,
  };

  return (
    <img 
      src={logos[mode]} 
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default LogoIcon;
