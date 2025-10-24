import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import Display from "../Display/Display";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import ScrollUp from "../ScrollUp/ScrollUp";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const { mode } = useTheme();

  const linksText = {
    en: "By Andrea Gastaldi",

    es: "Por Andrea Gastaldi",
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.FooterDataContainer}>
        <div className={styles.text}>{linksText[lang]} © 2025</div>
        <div className={styles.button}>
          <ScrollUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
