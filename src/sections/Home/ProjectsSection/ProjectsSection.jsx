// src/sections/ProjectsSection/ProjectsSection.jsx
import React, { useEffect, useRef } from "react";
import styles from "./ProjectsSection.module.scss";
import cardStyles from "./../../../components/ProjectCard/ProjectCard.module.scss";
import justinaLogo from "./../../../assets/images/logo-justina.svg";
import handLogo from "./../../../assets/images/logo-hand.svg";
import adoptappLogo from "./../../../assets/images/logo-adoptapp.svg";
import ProjectCard from "./../../../components/ProjectCard/ProjectCard";
import { useLanguage } from "./../../../context/LanguageContext";
import useOnScreen from "./../../../hooks/useOnScreen";

const ProjectsSection = () => {
  const carouselRef = useRef();
  const sectionRef = useRef();
  const { lang } = useLanguage();
  
  // Detectar cuando la sección está 100% visible
  const isVisible = useOnScreen(sectionRef, 1.0);

  useEffect(() => {
    if (!isVisible) return; // Solo animar cuando esté visible
    
    let direction = 1;

    const scroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        container.scrollLeft += direction;

        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        const atEnd = scrollLeft >= maxScrollLeft - 1;
        const atStart = scrollLeft <= 1;

        if (atEnd || atStart) {
          direction *= -1;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isVisible]);

  const descriptions = {
    en: [
      "Android app for selling used items, designed with a seller-first approach and supporting circular commerce.",
      "A web app for organ donation through paired exchange, optimizing donor-recipient matches to save more lives.",
      "A platform to connect shelters with adopters, streamlining the pet adoption process.",
    ],
    es: [
      "Aplicación Android para vender artículos usados, diseñada con un enfoque en el vendedor y fomentando el comercio circular.",
      "Hand2Hand es una aplicación web de compraventa de artículos usados, centrada en el vendedor, quien además puede adquirir productos dentro de la plataforma, fomentando el comercio circular.",
      "Justina.io proporcionó flujos duales para pacientes y doctores, una interfaz intuititiva y Cora, un chatbot de apoyo emocional, convirtiendo la tradicional coordinación médica compleja en una experiencia clara y cercana.",
    ],
  };

  return (
    <div className={styles.projectsSection} ref={sectionRef}>
      <div className={styles.projectsSectionTitle}>Projects</div>
      <div
        className={styles.projectsSectionCarouselContainer}
        ref={carouselRef}
      >
        <ProjectCard
          id="1"
          titleLine1="Justina"
          titleLine2=".Io"
          imageSrc={justinaLogo}
          imageAlt="Justina.Io"
          imageClassName={cardStyles.justinaLogo}
          description={descriptions[lang][0]}
        />
        <ProjectCard
          id="2"
          titleLine1="Hand2"
          titleLine2="Hand"
          imageSrc={handLogo}
          imageAlt="Hand2Hand"
          imageClassName={cardStyles.handLogo}
          description={descriptions[lang][1]}
        />
        <ProjectCard
          id="3"
          titleLine1="Adopt"
          titleLine2="app"
          imageSrc={adoptappLogo}
          imageAlt="Adoptapp"
          imageClassName={cardStyles.adoptappLogo}
          description={descriptions[lang][2]}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
