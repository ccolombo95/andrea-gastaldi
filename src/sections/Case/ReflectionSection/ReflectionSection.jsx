// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./ReflectionSection.module.scss";

import { useLanguage } from "../../../context/LanguageContext";
import { reflectionById } from "../../../data/reflectionData";
import TitleText from "../../../components/TitleText/TitleText";

const ReflectionSection = ({ id }) => {
  const { lang } = useLanguage();
  const title = {
    en: "Reflection",
    es: "Reflexión",
  };
  const text = reflectionById[id];

  return (
    <div className={styles.ReflectionSection}>
      <TitleText title={title[lang]} data={text[lang]} />
    </div>
  );
};

export default ReflectionSection;
