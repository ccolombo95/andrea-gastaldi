// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./ProblemSection.module.scss";
import { useTheme } from "./../../../context/ThemeContext";
import { useLanguage } from "./../../../context/LanguageContext";

import { problemsById } from "../../../data/problemData";

const ProblemSection = ({ id }) => {
  const { mode } = useTheme();
  const { lang } = useLanguage();
  const title = {
    en: "Problem Statement",
    es: "Planteamiento del problema",
  };

  const texts = problemsById[id]?.[lang];

  if (!texts) return null;

  return (
    <div className={`CaseSection ${styles.ProblemSection}`}>
      <div className={`CaseTitle `}>{title[lang]}</div>
      {texts.subtitle && (
        <div className={styles.ProblemSubtitle}>{texts.subtitle}</div>
      )}
      <div className={styles.ProblemParagraph}>
        <div className={styles.ProblemParagraph}>{texts.paragraph1}</div>
        <div className={styles.ProblemParagraph}>{texts.paragraph2}</div>
      </div>
    </div>
  );
};

export default ProblemSection;
