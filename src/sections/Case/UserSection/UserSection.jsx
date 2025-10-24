// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./UserSection.module.scss";
import { useTheme } from "./../../../context/ThemeContext";
import { useLanguage } from "./../../../context/LanguageContext";
import { userById } from "../../../data/userData";
import { images } from "../../../assets/images/userImages";

const UserSection = ({ id }) => {
  const { lang } = useLanguage();
  const title = {
    en: "Overview",
    es: "Inspiración",
  };
  const subtitle1 = {
    en: "Frustrations",
    es: "Frustraciones",
  };
  const subtitle2 = {
    en: "Goals",
    es: "Aspiraciones",
  };

  const image = images[id];
  const texts = userById[id];

  return (
    <div className={`CaseSection ${styles.UserSection}`}>
      <div className={`CaseTitle ${styles.UserTitle}`}>{title[lang]}</div>
      <div className={styles.UserTop}>
        <div className={styles.ImgContainer}>
          <img src={image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.userZone}>{texts.zone}</div>
          <div className={styles.userName}>{texts.name}</div>
          <div className={styles.userOcupation}>{texts[lang].ocupation}</div>
          <div className={styles.userQuote}>{texts[lang].quote}</div>
        </div>
      </div>
      <div className={styles.UserBottom}>
        <div className={styles.listContainer}>
          <div className={styles.listTitle}>{subtitle1[lang]}</div>
          <ul className={styles.list}>
            {texts[lang].frustrations.map((goal, index) => (
              <li key={index} className={styles.GoalItem}>
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listTitle}>{subtitle2[lang]}</div>
          <ul className={styles.list}>
            {texts[lang].goals.map((goal, index) => (
              <li key={index} className={styles.GoalItem}>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
