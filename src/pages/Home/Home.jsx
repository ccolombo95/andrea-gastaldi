import { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarSM from "../../components/NavbarSM/NavbarSM";
import { useTheme } from "./../../context/ThemeContext";
import useMediaQuery from "../../hooks/useMediaQuery";

import Background from "../../components/Background/Background";
import WelcomeSection from "../../sections/Home/WelcomeSection/WelcomeSection";
import ProjectsSection from "../../sections/Home/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/Home/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { setActiveSection } = useTheme();
  const welcomeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === welcomeRef.current) {
            setActiveSection("about");
          } else if (entry.target === projectsRef.current) {
            setActiveSection("projects");
          } else if (entry.target === contactRef.current) {
            setActiveSection("contact");
          }
        }
      });
    }, observerOptions);

    if (welcomeRef.current) observer.observe(welcomeRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (welcomeRef.current) observer.unobserve(welcomeRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [setActiveSection]);

  return (
    <>
      <Background />
      {isMobile ? <NavbarSM /> : <Navbar />}
      <div className={styles.bodyContainer}>
        <div ref={welcomeRef}>
          <WelcomeSection />
        </div>
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
