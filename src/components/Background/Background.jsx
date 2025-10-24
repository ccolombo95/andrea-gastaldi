import { useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Background.module.scss";

const Background = () => {
  const { mode } = useTheme();
  const canvasRef = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 🎯 mouse / estado inicial
    let mouse = { x: 50, y: 50 };
    let hue = mode === "dark" ? 240 : 262;
    let sat = mode === "dark" ? 30 : 95;
    let alpha = 0.16;
    let following = false;
    let driftAngle = 0;

    // 🎨 cargar texturas
    const textureLight = new Image();
    textureLight.crossOrigin = "anonymous";
    textureLight.src =
      "https://cdn.builder.io/api/v1/image/assets%2F412b784ffdb1429ea0ae70db48bc3f22%2F452d79a10c634e57899d483f1bc07d3d?format=webp&width=800";

    const textureDark = new Image();
    textureDark.crossOrigin = "anonymous";
    textureDark.src =
      "https://images.pexels.com/photos/6984990/pexels-photo-6984990.jpeg";

    const onMove = (e) => {
      if (!following) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouse = { x, y };
    };
    const onEnter = () => (following = true);
    const onLeave = () => {
      following = false;
      mouse = { x: 50, y: 50 };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);

    // 🎨 loop de render
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ⏳ drift
      driftAngle += 0.005;
      const driftHue = Math.sin(driftAngle) * 24;
      const driftSat = 1 + Math.sin(driftAngle * 0.7) * 0.08;

      // easing hacia valores base según mode
      const targetHue = mode === "dark" ? 240 : 262;
      const targetSat = mode === "dark" ? 30 : 95;

      hue += (targetHue + driftHue - hue) * 0.02;
      sat += (targetSat * driftSat - sat) * 0.02;

      const dist = Math.hypot(mouse.x - 50, mouse.y - 50) / 70;
      alpha += (0.18 + (1 - Math.min(1, dist)) * 0.22 - alpha) * 0.08;

      // 🎨 colores
      const c1 = `hsla(${hue}, ${sat}%, 55%, ${alpha * 1})`;
      const c2 = `hsla(${hue + 40}, ${sat}%, 60%, ${alpha * 0.95})`;
      const c3 = `hsla(${hue + 80}, ${sat}%, 62%, ${alpha * 0.9})`;
      const c4 = `hsla(${hue + 140}, ${sat}%, 58%, ${alpha * 0.8})`;
      const c5 = `hsla(${hue - 60}, ${sat}%, 58%, ${alpha * 0.7})`;

      // gradientes
      const g1 = ctx.createRadialGradient(
        (mouse.x / 100) * canvas.width,
        (mouse.y / 100) * canvas.height,
        0,
        (mouse.x / 100) * canvas.width,
        (mouse.y / 100) * canvas.height,
        canvas.width * 0.8
      );
      g1.addColorStop(0, c1);
      g1.addColorStop(0.18, c2);
      g1.addColorStop(0.36, c3);
      g1.addColorStop(0.56, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width - (mouse.x / 100) * canvas.width,
        canvas.height - (mouse.y / 100) * canvas.height,
        0,
        canvas.width - (mouse.x / 100) * canvas.width,
        canvas.height - (mouse.y / 100) * canvas.height,
        canvas.width * 0.9
      );
      g2.addColorStop(0, c4);
      g2.addColorStop(0.24, c5);
      g2.addColorStop(0.48, c2);
      g2.addColorStop(0.72, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g3 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.8,
        0,
        canvas.width * 0.2,
        canvas.height * 0.8,
        canvas.width * 0.5
      );
      g3.addColorStop(0, c3);
      g3.addColorStop(0.45, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // overlay de textura
      const texture = mode === "dark" ? textureDark : textureLight;
      if (texture.complete) {
        ctx.globalAlpha = 0.36;
        ctx.globalCompositeOperation = "overlay";
        ctx.drawImage(texture, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current); // 💡 cancelar loop viejo al cambiar de mode
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [mode]); // 💡 se vuelve a montar limpio en cada cambio de theme

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default Background;
