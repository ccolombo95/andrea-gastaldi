// src/sections/WelcomeSection/WelcomeSection.jsx
import React, { useState, useEffect } from "react";
import styles from "./WelcomeSection.module.scss";
import profileImg from "./../../../assets/images/avatar-andrea.svg";
import Arrow from "./../../../components/Arrow/Arrow";
import useTypewriter from "./../../../hooks/useTypewriter";
import { useTheme } from "./../../../context/ThemeContext";
import { useLanguage } from "./../../../context/LanguageContext";
import homeImg1 from "./../../../assets/images/home-img1.png";
import homeImg2 from "./../../../assets/images/home-img2.png";
import globo from "./../../../assets/images/globo.png";
import Hour from "../../../components/Hour/Hour";
import LanguageSwitch from "../../../components/LanguageSwitch/LanguageSwitch";

const WelcomeSection = () => {
  const { mode, showWelcome } = useTheme();
  const { lang } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  const images = [homeImg1, homeImg2];

  const texts = {
    en: {
      title: "Hi, I'm Andrea",
      subtitle:
        "I'm a UI/UX Designer based in Mexico city, shaping interfaces with clarity & care. I'm currently finishing my master's degree in front end + UI UX",
    },
    es: {
      title: "Hola, soy Andrea",
      subtitle:
        "Soy diseñadora UI/UX y radico en CDMX, diseñando interfaces con claridad y atención al detalle. Actualmente estoy finalizando mi maestría en desarrollo front-end y UI/UX.",
    },
  };

  // Iniciar el tipeo solo cuando el WelcomeOverlay haya desaparecido
  useEffect(() => {
    if (!showWelcome && !startTyping) {
      // Dar un pequeño delay para que el overlay termine de desvanecerse
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, startTyping]);

  const typedTitle = useTypewriter(texts[lang].title, 100, mode, startTyping);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.welcomeSection}>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeLeft}>
          <div className={styles.welcomeTop}>
            <div className={styles.welcomeTitle}>
              <p>{typedTitle}</p>
            </div>
          </div>

          <div className={styles.welcomeBottom}>
            <div className={styles.welcomeTextContainer}>
              <div className={styles.welcomeSubtitle}>
                {texts[lang].subtitle}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.welcomeImgContainer}>
          <div className={styles.languageSwitchContainer}>
            <LanguageSwitch />
          </div>
          <div 
            className={styles.imageWrapper}
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
      <div className={styles.welcomeContainerDos}>
        <Hour />
      </div>
    </div>
  );
};

export default WelcomeSection;
