import React, { useState } from 'react';
import { BurgerIcon, CrossIcon } from '../Icons';
import styles from './Menu.module.scss';

const Menu = ({ className = '', onToggle, isOpen = false }) => {
  const handleClick = () => {
    onToggle && onToggle(!isOpen);
  };

  return (
    <button 
      className={`${styles.menuButton} ${className}`}
      onClick={handleClick}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      {isOpen ? (
        <CrossIcon className={styles.icon} alt="cerrar menú" />
      ) : (
        <BurgerIcon className={styles.icon} alt="abrir menú" />
      )}
    </button>
  );
};

export default Menu;
