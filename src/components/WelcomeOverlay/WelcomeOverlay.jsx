// src/components/WelcomeOverlay/WelcomeOverlay.jsx
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Background from "../Background/Background";
import styles from "./WelcomeOverlay.module.scss";
import starLight from "../../assets/icons/star-light.svg";
import starDark from "../../assets/icons/star-dark.svg";

const WelcomeOverlay = () => {
  const { mode, showWelcome, hideWelcome } = useTheme();
  const { lang } = useLanguage();

  const text = {
    en: "Hi, I am Andrea",
    es: "Hola, soy Andrea",
  };
  
  const star = {
    light: starLight,
    dark: starDark,
  };

  if (!showWelcome) {
    return null;
  }

  return (
    <div className={`${styles.overlay} ${styles[mode]}`} onClick={hideWelcome}>
      <div className={styles.welcome}>
        <img src={star[mode]} alt="Logo" className={styles.star} />
        <div className={styles.title}>{text[lang]}</div>
        <img src={star[mode]} alt="Logo" className={styles.star} />
      </div>
    </div>
  );
};

export default WelcomeOverlay;
