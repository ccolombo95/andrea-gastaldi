// src/components/LanguageSwitch/LanguageSwitch.jsx
import { useLanguage } from "../../context/LanguageContext";
import { FlagIcon } from "../Icons";
import styles from "./LanguageSwitchSM.module.scss";

const LanguageSwitchSM = () => {
  const { lang, toggleLang } = useLanguage();
  const text = {
    en: "Español",
    es: "English",
  };

  return (
    <div className={styles.languageSwitch} onClick={toggleLang}>
      <button className={styles.langBtn}>
        <FlagIcon lang={lang} className={styles.flagImg} />
        {text[lang]}
      </button>
    </div>
  );
};

export default LanguageSwitchSM;
