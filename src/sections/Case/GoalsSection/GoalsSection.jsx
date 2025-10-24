// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./GoalsSection.module.scss";
import { useLanguage } from "../../../context/LanguageContext";

import { images } from "../../../assets/images/goalsImages";

import { goalsById } from "../../../data/goalsData";
import TextList from "../../../components/TitleList/TitleList";

const GoalsSection = ({ id }) => {
  const { lang } = useLanguage();

  const title = {
    en: "Goals",
    es: "Metas",
  };
  const goals = goalsById[id][lang];
  const image = images[id];

  return (
    <div className={`CaseSection ${styles.GoalsSection}`}>
      <div className={styles.GoalsImg}>
        <img src={image} />
      </div>
      <div className={styles.GoalsData}>
        <TextList title={title[lang]} data={goals} />
      </div>
    </div>
  );
};

export default GoalsSection;
