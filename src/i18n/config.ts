import i18next from "i18next";

i18next.init({
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: true, // not needed for react!!
  },
});

i18next.languages = ["en"];

export default i18next;
