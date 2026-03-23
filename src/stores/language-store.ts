import { create } from 'zustand'
import i18n from '../i18n'

export type Language = 'en' | 'vi'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>()((set) => ({
  language: (i18n.language?.split('-')[0] as Language) || 'en',

  setLanguage: (lang) => {
    i18n.changeLanguage(lang)
    set({ language: lang })
  },
}))

// Sync store whenever i18n language changes (triggered by route's beforeLoad)
i18n.on('languageChanged', (lng) => {
  const base = (lng.split('-')[0] as Language) || 'en'
  if (['en', 'vi'].includes(base)) {
    useLanguageStore.setState({ language: base })
  }
})
