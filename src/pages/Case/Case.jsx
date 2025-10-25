import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { ThemeProvider } from "./../../context/ThemeContext";

import IndexSection from "../../sections/Case/IndexSection/IndexSection";
import OverviewSection from "../../sections/Case/OverviewSection/OverviewSection";
import ProblemSection from "../../sections/Case/ProblemSection/ProblemSection";
import StyleGuideSection from "../../sections/Case/StyleGuideSection/StyleGuideSection";
import GoalsSection from "../../sections/Case/GoalsSection/GoalsSection";
import UserSection from "../../sections/Case/UserSection/UserSection";
import ImpactsSection from "../../sections/Case/ImpactsSection/ImpactsSection";
import ReflectionSection from "../../sections/Case/ReflectionSection/ReflectionSection";
import Footer from "../../components/Footer/Footer";
import { imagesMockup } from "../../assets/images/mockUpImages";
import { imagesPrincipal } from "../../assets/images/caseImages";

import styles from "./Case.module.scss";

const Case = () => {
  const { projectId } = useParams();
  const imagePrincipal = imagesPrincipal[projectId];
  const imageMockup = imagesMockup[projectId];

  return (
    <>
      <Navbar />
      <div
        className={`${styles.bodyContainer} ${
          styles[`body-${projectId}`] || ""
        }`}
      >
        <div
          className={`${styles.ImgContainer} ${
            styles[`img-${projectId}`] || ""
          }`}
        >
          {" "}
          <img
            src={imagePrincipal}
            className={styles[`imgPrincipal${projectId}`]}
            alt=""
          />
        </div>

        <div
          className={`${styles.infoContainer} ${styles[`info-${projectId}`]}`}
        >
          <div
            className={`${styles.ImgMockUpContainer} ${
              styles[`img-${projectId}`] || ""
            }`}
          >
            {" "}
            <img
              src={imageMockup}
              className={styles[`imgMockUp${projectId}`]}
              alt=""
            />
          </div>
          <OverviewSection id={Number(projectId)} />
          <ProblemSection id={Number(projectId)} />
          <StyleGuideSection id={Number(projectId)} />
          <GoalsSection id={Number(projectId)} />
          <UserSection id={Number(projectId)} />
          <ImpactsSection id={Number(projectId)} />
          <ReflectionSection id={Number(projectId)} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Case;
