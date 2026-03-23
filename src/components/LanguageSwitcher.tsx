import { useNavigate } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { useLanguageStore, type Language } from '../stores/language-store'
import { Button } from './ui/button'

export default function LanguageSwitcher() {
  const { language } = useLanguageStore()
  const navigate = useNavigate()

  const handleClick = () => {
    const nextLang: Language = language === 'en' ? 'vi' : 'en'
    if (nextLang === 'en') {
      // EN uses clean root paths — strip the language prefix
      navigate({ to: '/' })
    } else {
      // VI gets the /vi/ prefix
      navigate({ to: '/$lang', params: { lang: nextLang } })
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleClick}
      aria-label={`Switch to ${language === 'en' ? 'Tiếng Việt' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Tiếng Việt' : 'English'}`}
      className="gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[var(--sea-ink-soft)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--sea-ink)]"
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{language === 'en' ? 'EN' : 'VI'}</span>
    </Button>
  )
}
