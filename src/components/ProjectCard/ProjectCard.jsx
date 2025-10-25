import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow/Arrow";
import { useLanguage } from "../../context/LanguageContext";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  id,
  titleLine1,
  titleLine2,
  imageSrc,
  imageAlt,
  description,
}) => {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const handleCaseClick = () => {
    navigate(`/case/${id}`);
    window.scrollTo(0, 0);
  };

  const texts = {
    en: ["Go"],
    es: ["Caso de estudio"],
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardTop}>
        <div className={styles.projectCardTitle}>
          {titleLine1}
          <br />
          {titleLine2}
        </div>
        <div className={styles.projectsSectionImgContainer}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`${styles.logo} ${styles[`logo${imageAlt}`] || ""}`}
          />
        </div>
      </div>
      <div className={styles.projectCardSubtitle}>{description}</div>
      <div className={styles.projectCardLink}>
        <button onClick={handleCaseClick} className={styles.caseButton}>
          <Arrow mode="dark" text={texts[lang]} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
