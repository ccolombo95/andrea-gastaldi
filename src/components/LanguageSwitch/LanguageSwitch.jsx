// src/components/LanguageSwitch/LanguageSwitch.jsx
import { useLanguage } from "../../context/LanguageContext";
import styles from "./LanguageSwitch.module.scss";
import flagEN from "./../../assets/icons/flag-en.svg";
import flagES from "./../../assets/icons/flag-es.svg";
import globo from "./../../assets/images/globo.png";

const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();
  const flag = {
    en: flagES,
    es: flagEN,
  };
  const text = {
    en: "Cambiar a Español",
    es: "Switch to English",
  };

  return (
    <div className={styles.languageSwitch} onClick={toggleLang}>
      <img src={globo} alt={text[lang]} className={styles.globo} />
      <button className={styles.langBtn}>
        {text[lang]}
        <img src={flag[lang]} className={styles.flagImg} />
      </button>
    </div>
  );
};

export default LanguageSwitch;
