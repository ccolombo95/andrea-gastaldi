import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./ScrollUp.module.scss";
import Arrow from "./../Arrow/Arrow";

const ScrollUp = () => {
  const { mode } = useTheme();
  const { lang } = useLanguage();
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const linksText = {
    en: "Scroll up",
    es: "Ir al comienzo",
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('[class*="Footer"]');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isVisible = footerRect.top < window.innerHeight;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`${styles.ScrollUpButton} ${!isFooterVisible ? styles.rotated : ''}`}
      onClick={scrollToTop}
    >
      <div className={styles.Text}> {linksText[lang]}</div>
      <div className={styles.icon}>
        <Arrow direction="vertical" forceWhite={isFooterVisible} />
      </div>
    </div>
  );
};

export default ScrollUp;
