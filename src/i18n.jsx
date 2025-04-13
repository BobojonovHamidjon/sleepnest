import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import uzLanguageTranslate from '../public/Locales/uzbek.json';
import ruLanguageTranslate from '../public/Locales/russian.json';
import engLanguageTranslate from '../public/Locales/engish.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: true,
    resources: {
      uz: { translation: uzLanguageTranslate },
      ru: { translation: ruLanguageTranslate },
      eng: { translation: engLanguageTranslate },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
