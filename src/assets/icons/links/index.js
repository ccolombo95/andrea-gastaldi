// src/assets/icons/links/index.js
import behanceLight from "./behance-light.svg";
import behanceDark from "./behance-dark.svg";
import emailLight from "./email-light.svg";
import emailDark from "./email-dark.svg";
import figmaLight from "./figma-light.svg";
import figmaDark from "./figma-dark.svg";
import linkedinLight from "./linkedin-light.svg";
import linkedinDark from "./linkedIn-dark.svg";
import whatsappLight from "./whatsapp-light.svg";
import whatsappDark from "./whatsapp-dark.svg";

export const iconsLight = {
  behance: behanceLight,
  email: emailLight,
  figma: figmaLight,
  linkedin: linkedinLight,
  whatsapp: whatsappLight,
};

export const iconsDark = {
  behance: behanceDark,
  email: emailDark,
  figma: figmaDark,
  linkedin: linkedinDark,
  whatsapp: whatsappDark,
};

// Función helper para obtener iconos según el tema
export const getIconsByTheme = (theme) => {
  return theme === "dark" ? iconsDark : iconsLight;
};
