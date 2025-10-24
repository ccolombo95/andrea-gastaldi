import React, { useRef, useState } from "react";
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

  const [avatarSrc, setAvatarSrc] = useState(avatarIdea);
  const [avatarClass, setAvatarClass] = useState(styles.avatarAn);
  const [isContactLeftRotated, setIsContactLeftRotated] = useState(false);

  const handleWhatsappClick = () => {
    setAvatarSrc(avatarWink);
    setAvatarClass(styles.avatarWink);
    setTimeout(() => {
      setAvatarSrc(avatarIdea);
      setAvatarClass(styles.avatarAn);
    }, 3000);
  };

  const handleContactLeftHover = () => {
    if (isContactLeftVisible) {
      setAvatarSrc(avatarWink);
      setAvatarClass(styles.avatarWink);
      setIsContactLeftRotated(true);
    }
  };

  const handleContactLeftLeave = () => {
    if (isContactLeftVisible) {
      setAvatarSrc(avatarIdea);
      setAvatarClass(styles.avatarAn);
      setIsContactLeftRotated(false);
    }
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
        <div className={styles.imgContainer}>
          <img src={avatarSrc} className={avatarClass} alt="Andrea Gastaldi" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
