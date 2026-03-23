import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import vi from './locales/vi.json'

// Detect language from URL path synchronously — before React renders
function detectLangFromPath(): string {
  if (typeof window !== 'undefined') {
    const firstSegment = window.location.pathname.split('/')[1]
    if (firstSegment === 'vi') return 'vi'
  }
  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: detectLangFromPath(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'vi'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
