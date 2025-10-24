// src/components/Display/Display.jsx
import { useTheme } from "../../context/ThemeContext";
import styles from "./Display.module.scss";
import displayLight from "../../assets/icons/display-light.svg";
import displayDark from "../../assets/icons/display-dark.svg";

const Display = () => {
  const { mode, toggleMode } = useTheme();
  const iconSrc = mode === "dark" ? displayLight : displayDark;

  return (
    <div className={styles.displayContainer} onClick={toggleMode}>
      <img src={iconSrc} className={styles.display} alt="Display Icon" />
    </div>
  );
};

export default Display;
