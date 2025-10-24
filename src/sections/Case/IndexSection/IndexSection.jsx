// src/sections/ProblemSection/ProblemSection.jsx
import React from "react";
import styles from "./IndexSection.module.scss";
import { useTheme } from "./../../../context/ThemeContext";

// import { styleGuidesById } from "../../../data/styleGuideData";

const IndexSection = ({ id }) => {
  //   const { mode } = useTheme();

  //   const styleGuide = styleGuidesById[id];

  return (
    <div className="CaseSection">
      {/* <div className={styles.StyleGuideTitle}>Style Guide</div>
      <div className={styles.DataContainer}>
        <div className={styles.ImgContainer}>
          <img
            src={require(`../../../assets/images/${styleGuide.image}-img.svg`)}
            alt={styleGuide.image}
          />
        </div>
        <div className={styles.ColorsContainer}>
          {styleGuide.colors.map((color, index) => (
            <div
              key={index}
              className={styles.ColorContainer}
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sizesText}>{styleGuide.sizes}</div> */}
    </div>
  );
};

export default IndexSection;
