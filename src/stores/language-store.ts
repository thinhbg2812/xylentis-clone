import { create } from 'zustand'
import i18n from '../i18n'

export type Language = 'en' | 'vi'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: (i18n.language?.split('-')[0] as Language) || 'en',

  setLanguage: (lang) => {
    i18n.changeLanguage(lang)
    set({ language: lang })
  },

  toggleLanguage: () => {
    const { language } = get()
    const next: Language = language === 'en' ? 'vi' : 'en'
    get().setLanguage(next)
  },
}))

// Sync store when i18next language changes (e.g. from detector)
i18n.on('languageChanged', (lng) => {
  const base = (lng.split('-')[0] as Language) || 'en'
  if (['en', 'vi'].includes(base)) {
    useLanguageStore.setState({ language: base })
  }
})
