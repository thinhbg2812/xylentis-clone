import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import vi from './locales/vi.json'

// Default to 'en' — the correct language is set by route beforeLoad
// on both server and client before any component renders.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'vi'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
