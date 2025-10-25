// src/components/Display/Display.jsx
import { useTheme } from "../../context/ThemeContext";
import styles from "./Arrow.module.scss";
import arrowLight from "../../assets/icons/arrow-right-light.svg";
import arrowDark from "../../assets/icons/arrow-right-dark.svg";

const Arrow = ({ direction = "diagonal", forceWhite = false, text = "" }) => {
  const { mode } = useTheme();
  const iconSrc = forceWhite
    ? arrowLight
    : mode === "dark"
    ? arrowLight
    : arrowDark;
  const iconStyle =
    direction === "vertical"
      ? styles.arrowIconVertical
      : styles.arrowIconDiagonal;

  return (
    <span className={styles.arrowContainer}>
      {text}
      <img src={iconSrc} className={iconStyle} alt="Arrow Icon" />
    </span>
  );
};

export default Arrow;
