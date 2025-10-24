// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./OverviewSection.module.scss";
import { useTheme } from "./../../../context/ThemeContext";
import { useLanguage } from "./../../../context/LanguageContext";
import { overviewById } from "../../../data/overviewData";
import TitleText from "../../../components/TitleText/TitleText";
import { images } from "../../../assets/images/overviewImages";

const OverviewSection = ({ id }) => {
  const { lang } = useLanguage();
  const title = {
    en: "Overview",
    es: "Inspiración",
  };
  const text = overviewById[id];
  const image = images[id];

  return (
    <div className={`CaseSection`}>
      <TitleText title={title[lang]} data={text[lang]} />
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default OverviewSection;
