import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useThemeStore } from '../stores/theme-store'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const { mode, toggleMode, initTheme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    initTheme()
    setMounted(true)
  }, [initTheme])

  // Always render Sun on server & first client render to avoid hydration mismatch.
  // After mount, Zustand rehydrates the persisted theme and we show the correct icon.
  const Icon = mounted && mode === 'dark' ? Moon : Sun
  const label = mounted ? `Theme: ${mode}` : 'Theme: light'

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="text-[var(--sea-ink-soft)]  transition hover:-translate-y-0.5 hover:text-[var(--sea-ink)]"
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}
