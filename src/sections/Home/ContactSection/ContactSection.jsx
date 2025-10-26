import React, { useRef, useState, useEffect } from "react";
import styles from "./ContactSection.module.scss";
import avatarIdea from "./../../../assets/images/avatar-idea.svg";
import avatarWink from "./../../../assets/images/avatar-wink.svg";
import { getIconsByTheme } from "./../../../assets/icons/links";
import Arrow from "./../../../components/Arrow/Arrow";

import useTypewriter from "./../../../hooks/useTypewriter";
import useOnScreen from "./../../../hooks/useOnScreen";
import { useTheme } from "./../../../context/ThemeContext";
import { useLanguage } from "./../../../context/LanguageContext";

const ContactSection = () => {
  const { mode } = useTheme();
  const { lang } = useLanguage();

  const sectionRef = useRef(null);
  const contactLeftRef = useRef(null);

  const isVisible = useOnScreen(sectionRef);
  const isContactLeftVisible = useOnScreen(contactLeftRef, 0.7);

  // Obtener iconos según el tema
  const icons = getIconsByTheme(mode);

  const typedTitleFront = useTypewriter(
    lang === "en" ? "Do you have any ideas?" : "¿Tenés alguna idea?",
    100,
    isVisible ? mode + "-visible" : ""
  );
  const typedTitleBack = useTypewriter(
    lang === "en" ? "Let's talk!" : "¡Hablemos!",
    100,
    isVisible ? mode + "-visible" : ""
  );
  const subtitle = {
    en: "HoverMe",
    es: "Clickeame",
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContactLeftRotated, setIsContactLeftRotated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const images = [avatarIdea, avatarWink];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);

  const handleContactLeftHover = () => {
    if (isContactLeftVisible) {
      setIsContactLeftRotated(true);
      setIsHovered(true);
      setCurrentImageIndex(1);
    }
  };

  const handleContactLeftLeave = () => {
    if (isContactLeftVisible) {
      setIsContactLeftRotated(false);
      setIsHovered(false);
      setCurrentImageIndex(0);
    }
  };

  const handleImageHover = () => {
    setIsHovered(true);
    setCurrentImageIndex(1);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div className={styles.contactSection} ref={sectionRef}>
      <div
        ref={contactLeftRef}
        className={`${styles.contactLeft} ${
          isContactLeftRotated ? styles.rotated : ""
        }`}
        onMouseEnter={handleContactLeftHover}
        onMouseLeave={handleContactLeftLeave}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <div className={styles.title}>{typedTitleFront}</div>
            <div className={styles.subtitle}>{subtitle[lang]}</div>
          </div>
          <div className={styles.cardBack}>
            <div className={styles.title}>{typedTitleBack}</div>
            <div className={styles.subtitle}></div>
            <div className={styles.contactLinkContainer}>
              <a
                href="https://www.linkedin.com/in/gastaldimx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icons.linkedin}
                  className={styles.linkedin}
                  alt="Linkedin"
                />
              </a>
              <a
                href="https://www.figma.com/@GASTALDI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icons.figma} className={styles.figma} alt="Figma" />
              </a>
              <a
                href="https://www.behance.net/gastaldimx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icons.behance}
                  className={styles.behance}
                  alt="Behance"
                />
              </a>
              <a
                href="https://wa.me/528716158631"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icons.whatsapp}
                  className={styles.whatsapp}
                  alt="WhatsApp"
                />
              </a>

              <a
                href="mailto:gastaldimx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icons.email}
                  className={styles.mail}
                  alt="Correo electronico"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactRight}>
        <div
          className={styles.imgContainer}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Andrea Gastaldi"
              className={`${styles.avatarAn} ${
                index === currentImageIndex ? styles.active : ""
              } ${index === 1 ? styles.avatarWink : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
