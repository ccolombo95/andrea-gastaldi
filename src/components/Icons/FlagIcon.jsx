import React from 'react';
import flagEN from '../../assets/icons/flag-en.svg';
import flagES from '../../assets/icons/flag-es.svg';

const FlagIcon = ({ lang, className = '', alt = 'flag' }) => {
  const flags = {
    en: flagEN,
    es: flagES,
  };

  return (
    <img 
      src={flags[lang]} 
      alt={alt}
      className={className}
    />
  );
};

export default FlagIcon;
