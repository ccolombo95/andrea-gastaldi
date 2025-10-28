// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [showWelcome, setShowWelcome] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Activar Welcome al cargar la página
  useEffect(() => {
    // Mostrar Welcome cada vez que se carga la página
    setShowWelcome(true);

    // Ocultar Welcome después de 3 segundos
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    document.body.setAttribute("data-theme", newMode);

    setShowWelcome(true);

    setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
  };

  const hideWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, showWelcome, hideWelcome, activeSection, setActiveSection }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
