// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./ImpactsSection.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { impactsById } from "../../../data/impactsData";
import TextList from "../../../components/TitleList/TitleList";

const ImpactsSection = ({ id }) => {
  const { lang } = useLanguage();

  const title = {
    en: "Impact",
    es: "Impacto",
  };
  const impacts = impactsById[id][lang];

  return (
    <div className="CaseSection">
      <TextList title={title[lang]} data={impacts} />
    </div>
  );
};

export default ImpactsSection;
