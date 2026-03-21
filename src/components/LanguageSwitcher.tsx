import { Globe, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useLanguageStore, type Language } from '../stores/language-store'
import { Button } from './ui/button'

export default function LanguageSwitcher() {
  const { language } = useLanguageStore()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    const nextLang: Language = language === 'en' ? 'vi' : 'en'

    // Update URL with new lang param, then reload
    const url = new URL(window.location.href)
    url.searchParams.set('lang', nextLang)

    setTimeout(() => {
      window.location.href = url.toString()
    }, 300)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={loading}
      aria-label={`Switch to ${language === 'en' ? 'Tiếng Việt' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Tiếng Việt' : 'English'}`}
      className="gap-1.5  px-2.5 py-1.5 text-xs font-semibold text-[var(--sea-ink-soft)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--sea-ink)]"
    >
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Globe className="h-3.5 w-3.5" />
      )}
      <span>{language === 'en' ? 'EN' : 'VI'}</span>
    </Button>
  )
}
