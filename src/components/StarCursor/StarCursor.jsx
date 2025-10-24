// src/components/StarCursor/StarCursor.jsx
import { useEffect, useRef } from "react";
import styles from "./StarCursor.module.scss";

const StarCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;

      const star = document.createElement("div");
      star.className = styles.star;
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);

      // animación de desaparición
      setTimeout(() => {
        star.remove();
      }, 800);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // no renderiza nada directamente, solo crea los stars
};

export default StarCursor;
