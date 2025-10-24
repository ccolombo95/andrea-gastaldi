// src/components/CustomCursor.jsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.module.scss";

const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // animación con "inercia" tipo resorte
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 10); // desplazamiento para centrar el cursor
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CustomCursor;
