import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Display from "../Display/Display";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import logoDark from "./../../assets/images/logo-andre-dark.svg";
import logoLight from "./../../assets/images/logo-andre-light.svg";
import downloadDark from "./../../assets/icons/download-dark.svg";
import downloadLight from "./../../assets/icons/download-light.svg";
import CV from "../../data/CV.pdf";
import RESUME from "../../data/RESUME.pdf";
const Navbar = () => {
  const { lang } = useLanguage();
  const { mode } = useTheme();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksText = {
    en: {
      about: "About me",
      projects: "Projects",
      contact: "Contact me",
      resume: "My resumé",
    },
    es: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contáctame",
      resume: "Mi CV",
    },
  };

  const logoAn = {
    dark: logoDark,
    light: logoLight,
  };

  const downloadIcons = {
    light: downloadLight,
    dark: downloadDark,
  };
  const downloadTexts = {
    en: "Descargar resume",
    es: "Descargar cv",
  };

  const goToHome = () => {
    navigate('/home');
  };

  const handleDownload = () => {
    const fileToDownload = lang === "es" ? CV : RESUME;
    const fileName = lang === "es" ? "CV-Andrea-Gastaldi.pdf" : "Resume-Andrea-Gastaldi.pdf";
    
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = fileToDownload;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <img 
        src={logoAn[mode]} 
        className={styles.logoAn} 
        alt="logo" 
        onClick={goToHome}
        style={{ cursor: 'pointer' }}
      />
      <ul className={styles.links}>
        <li>
          <Link to="/">{linksText[lang].about}</Link>
        </li>
        <li>
          <Link to="/proyects">{linksText[lang].projects}</Link>
        </li>
        <li>
          <Link to="/contact">{linksText[lang].contact}</Link>
        </li>
        <li className={styles.downloadLink}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            {linksText[lang].resume}
            <img
              src={downloadIcons[mode]}
              alt={downloadTexts[lang]}
              className={styles.downloadIcon}
            />
          </button>
        </li>
        <li>
          <Display />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
