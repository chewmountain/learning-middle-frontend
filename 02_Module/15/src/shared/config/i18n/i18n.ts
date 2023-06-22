import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
/**
 * https://www.i18next.com/
 * Интернационализация приложения
 */
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        debug: __IS_DEV__ ? true : false,
    });

export default i18n;
