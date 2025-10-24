// src/components/TitleList/TitleList.jsx

import styles from "./TitleText.module.scss";

const TitleText = ({ title, data }) => {
  return (
    <div className={styles.ListContainer}>
      <div className={`CaseTitle ${styles.Title}`}>{title}</div>
      <div className={styles.Text}>{data}</div>
    </div>
  );
};

export default TitleText;
