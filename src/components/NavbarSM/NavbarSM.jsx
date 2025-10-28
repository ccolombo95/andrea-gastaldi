import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./NavbarSM.module.scss";
import Display from "../Display/Display";
import { Menu } from "./../Icons";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitchSM from "../LanguageSwitchSM/LanguageSwitchSM";
import { LogoIcon, DownloadIcon } from "../Icons";
import CV from "../../data/CV.pdf";
import RESUME from "../../data/RESUME.pdf";

const NavbarSM = () => {
  const { lang } = useLanguage();
  const { mode, activeSection } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  // Determinar si estamos en la página home
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

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

  const downloadTexts = {
    en: "Descargar resume",
    es: "Descargar cv",
  };

  const goToHome = () => {
    navigate("/home");
  };

  const handleDownload = () => {
    const fileToDownload = lang === "es" ? CV : RESUME;
    const fileName =
      lang === "es" ? "CV-Andrea-Gastaldi.pdf" : "Resume-Andrea-Gastaldi.pdf";

    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = fileToDownload;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // En tu componente padre
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbarSM} ${scrolled ? styles.scrolled : ""} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
      data-theme={mode}
    >
      <div className={styles.buttonsContainer}>
        <LogoIcon
          className={styles.logoAn}
          alt="logo"
          onClick={goToHome}
          style={{ cursor: "pointer" }}
        />

        <div className={styles.buttonsLeft}>
          <Menu
            isOpen={isMenuOpen}
            onToggle={setIsMenuOpen}
            className={styles.menuButton}
          />
        </div>
      </div>
      <div className={`${styles.links} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.languageLink}>
          <LanguageSwitchSM />
        </div>
        <div className={styles.centerLinks}>
          <span>
            <Link
              to="/"
              className={
                isHomePage && activeSection === "about" ? styles.active : ""
              }
            >
              {linksText[lang].about}
            </Link>
          </span>
          <span>
            <Link
              to="/proyects"
              className={
                isHomePage && activeSection === "projects" ? styles.active : ""
              }
            >
              {linksText[lang].projects}
            </Link>
          </span>
          <span>
            <Link
              to="/contact"
              className={
                isHomePage && activeSection === "contact" ? styles.active : ""
              }
            >
              {linksText[lang].contact}
            </Link>
          </span>
        </div>

        <div className={styles.downloadLink}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            {linksText[lang].resume}
            <DownloadIcon
              alt={downloadTexts[lang]}
              className={styles.downloadIcon}
            />
          </button>
        </div>
        <div className={styles.iconContainer}>
          <Display />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSM;
