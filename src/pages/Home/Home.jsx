import Navbar from "../../components/Navbar/Navbar";
import NavbarSM from "../../components/NavbarSM/NavbarSM";
import { ThemeProvider } from "./../../context/ThemeContext";
import useMediaQuery from "../../hooks/useMediaQuery";

import Background from "../../components/Background/Background";
import WelcomeSection from "../../sections/Home/WelcomeSection/WelcomeSection";
import ProjectsSection from "../../sections/Home/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/Home/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Background />
      {isMobile ? <NavbarSM /> : <Navbar />}
      <div className={styles.bodyContainer}>
        <WelcomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
