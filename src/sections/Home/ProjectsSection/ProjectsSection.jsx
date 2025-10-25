// src/sections/ProjectsSection/ProjectsSection.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ProjectsSection.module.scss";

import ProjectCard from "./../../../components/ProjectCard/ProjectCard";

import justinaLogo from "./../../../assets/images/logo-justina.svg";
import handLogo from "./../../../assets/images/logo-hand.svg";
import adoptappLogo from "./../../../assets/images/logo-adoptapp-sm.png";

import { useLanguage } from "./../../../context/LanguageContext";
import { ArrowIcon } from "./../../../components/Icons";
import useOnScreen from "./../../../hooks/useOnScreen";

const ProjectsSection = () => {
  const carouselRef = useRef();
  const sectionRef = useRef();
  const { lang } = useLanguage();
  const animationFrameIdRef = useRef(null);
  const isUserScrollRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const isVisible = useOnScreen(sectionRef, 0.3);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (animationFrameIdRef.current) return;

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

        animationFrameIdRef.current = requestAnimationFrame(scroll);
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(scroll);
  }, []);

  useEffect(() => {
    if (!isVisible || isMobile) {
      stopAutoScroll();
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
      isUserScrollRef.current = false;
      return;
    }

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
    const timer = setTimeout(() => {
      startAutoScroll();
    }, 100);

    return () => {
      stopAutoScroll();
      clearTimeout(timer);
    };
  }, [isVisible, isMobile, startAutoScroll, stopAutoScroll]);

  const scrollToCard = useCallback(
    (direction) => {
      if (!isVisible || isMobile) return;

      stopAutoScroll();
      isUserScrollRef.current = true;

      if (!carouselRef.current) return;

      const container = carouselRef.current;
      const cardWidth = 630;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      const targetScroll =
        direction === "next"
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });

      const timer = setTimeout(() => {
        isUserScrollRef.current = false;
        if (isVisible) {
          startAutoScroll();
        }
      }, 3000);

      return () => clearTimeout(timer);
    },
    [stopAutoScroll, startAutoScroll, isVisible, isMobile]
  );

  const descriptions = {
    en: [
      "Justina.io delivered dual patient–doctor flows, an empathetic interface, and Cora, an emotional support chatbot—transforming complex medical coordination into a clear, human experience.",
      "Hand2Hand is a web app for buying and selling used items, focused on the seller, who can also make purchases within the platform, promoting circular commerce.",
      "AdoptApp is a platform that simplifies responsible pet adoption, connecting adopters with shelters and rescuers through an intuitive interface.",
    ],
    es: [
      "Justina.io proporcionó flujos duales para pacientes y doctores, una interfaz intuititiva y Cora, un chatbot de apoyo emocional, convirtiendo la tradicional coordinación médica compleja en una experiencia clara y cercana.",
      "Hand2Hand es una aplicación web de compraventa de artículos usados, centrada en el vendedor, quien además puede adquirir productos dentro de la plataforma, fomentando el comercio circular.",
      "AdoptApp es una plataforma que simplifica la adopción responsable de mascotas, conectando adoptantes con refugios y rescatistas a través de una interfaz intuitiva.",
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
          imageAlt="JustinaIo"
          description={descriptions[lang][0]}
        />
        <ProjectCard
          id="2"
          titleLine1="Hand2"
          titleLine2="Hand"
          imageSrc={handLogo}
          imageAlt="Hand2Hand"
          description={descriptions[lang][1]}
        />
        <ProjectCard
          id="3"
          titleLine1="Adopt"
          titleLine2="app"
          imageSrc={adoptappLogo}
          imageAlt="Adoptapp"
          description={descriptions[lang][2]}
        />
      </div>
      <div className={styles.cursorsContainer}>
        <span
          className={styles.prevCursor}
          onClick={() => scrollToCard("prev")}
        >
          <ArrowIcon direction="prev" />
        </span>
        <span
          className={styles.nextCursor}
          onClick={() => scrollToCard("next")}
        >
          <ArrowIcon direction="next" />
        </span>
      </div>
    </div>
  );
};

export default ProjectsSection;
