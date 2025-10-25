// src/components/LanguageSwitch/LanguageSwitch.jsx
import { useLanguage } from "../../context/LanguageContext";
import { FlagIcon } from "../Icons";
import styles from "./LanguageSwitch.module.scss";
import globo from "./../../assets/images/globo.png";

const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();
  const text = {
    en: "Cambiar a Español",
    es: "Switch to English",
  };

  return (
    <div className={styles.languageSwitch} onClick={toggleLang}>
      <img src={globo} alt={text[lang]} className={styles.globo} />
      <button className={styles.langBtn}>
        {text[lang]}
        <FlagIcon lang={lang === 'en' ? 'es' : 'en'} className={styles.flagImg} />
      </button>
    </div>
  );
};

export default LanguageSwitch;
