// src/components/TitleList/TitleList.jsx

import styles from "./TitleList.module.scss";

const TitleList = ({ title, data }) => {
  return (
    <div className={styles.ListContainer}>
      <div className={`CaseTitle ${styles.title}`}>{title}</div>
      <ul className={styles.List}>
        {data.map((dato, index) => (
          <li key={index} className={styles.ListItem}>
            {dato}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitleList;
