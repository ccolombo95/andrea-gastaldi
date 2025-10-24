// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./StyleGuideSection.module.scss";
import { useLanguage } from "./../../../context/LanguageContext";

import { styleGuidesById } from "../../../data/styleGuideData";
import { images } from "../../../assets/images/styleGuideImages";

const StyleGuideSection = ({ id }) => {
  const styleGuide = styleGuidesById[id];
  const { lang } = useLanguage();
  const title = {
    en: "Style Guide",
    es: "Guía de estilo",
  };

  return (
    <div className={`CaseSection ${styles.StyleGuideSection}`}>
      <div className={`CaseTitle ${styles.StyleGuideTitle}`}>{title[lang]}</div>
      <div className={styles.DataContainer}>
        <div className={styles.ImgContainer}>
          <img src={images[styleGuide.image]} alt={styleGuide.image} />
        </div>
        <div className={styles.ColorsContainer}>
          {styleGuide.colors.map((color, index) => (
            <div
              key={index}
              className={styles.ColorBox}
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sizesText}>{styleGuide.sizes}</div>
    </div>
  );
};

export default StyleGuideSection;
