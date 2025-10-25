import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100, resetKey = "", startTyping = true) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [resetKey]);

  // Reiniciar cuando startTyping cambia de false a true
  useEffect(() => {
    if (!startTyping) {
      setIndex(0);
    }
  }, [startTyping]);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, startTyping]);

  return text.slice(0, index);
};

export default useTypewriter;
