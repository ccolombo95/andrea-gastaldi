// src/components/Hour/Hour.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hour.module.scss";

const Hour = () => {
  const { lang } = useLanguage();
  const [currentTime, setCurrentTime] = useState("");

  const text = {
    en: "LOCAL HOUR:",
    es: "HORA LOCAL:",
  };

  const getMexicoTime = () => {
    const now = new Date();
    const mexicoTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Mexico_City",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    return mexicoTime;
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getMexicoTime());
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hourContainer}>
      <button className={styles.hourText}>
        {text[lang]} {currentTime}
      </button>
    </div>
  );
};

export default Hour;
