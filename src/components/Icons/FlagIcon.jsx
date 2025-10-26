import React from "react";
import flagEN from "../../assets/icons/flag-en.svg";
import flagES from "../../assets/icons/flag-es.svg";

const FlagIcon = ({ lang, className = "", alt = "flag" }) => {
  const flags = {
    en: flagES,
    es: flagEN,
  };

  return <img src={flags[lang]} alt={alt} className={className} />;
};

export default FlagIcon;
