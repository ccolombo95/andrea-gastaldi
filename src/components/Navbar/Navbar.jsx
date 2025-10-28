import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Display from "../Display/Display";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { LogoIcon, DownloadIcon } from "../Icons";
import CV from "../../data/CV.pdf";
import RESUME from "../../data/RESUME.pdf";

const Navbar = () => {
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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <LogoIcon
        className={styles.logoAn}
        alt="logo"
        onClick={goToHome}
        style={{ cursor: "pointer" }}
      />
      <ul className={styles.links}>
        <li>
          <Link
            to="/"
            className={
              isHomePage && activeSection === "about" ? styles.active : ""
            }
          >
            {linksText[lang].about}
          </Link>
        </li>
        <li>
          <Link
            to="/proyects"
            className={
              isHomePage && activeSection === "projects" ? styles.active : ""
            }
          >
            {linksText[lang].projects}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              isHomePage && activeSection === "contact" ? styles.active : ""
            }
          >
            {linksText[lang].contact}
          </Link>
        </li>
        <li className={styles.downloadLink}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            {linksText[lang].resume}
            <DownloadIcon
              alt={downloadTexts[lang]}
              className={styles.downloadIcon}
            />
          </button>
        </li>
        <li>
          <LanguageSwitch />
        </li>
        <li>
          <Display />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
