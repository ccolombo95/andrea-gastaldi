// src/components/LanguageSwitch/LanguageSwitch.jsx
import { useLanguage } from "../../context/LanguageContext";
import { FlagIcon } from "../Icons";
import styles from "./LanguageSwitch.module.scss";
import globo from "./../../assets/images/globo.png";

const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();
  const text = {
    en: "ES",
    es: "EN",
  };

  return (
    <div className={styles.languageSwitch} onClick={toggleLang}>
      <button className={styles.langBtn}>{text[lang]}</button>
    </div>
  );
};

export default LanguageSwitch;
