import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100, resetKey = "") => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [resetKey]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return text.slice(0, index);
};

export default useTypewriter;
