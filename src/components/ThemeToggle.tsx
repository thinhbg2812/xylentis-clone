import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { useThemeStore } from '../stores/theme-store'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const { mode, toggleMode, initTheme } = useThemeStore()

  useEffect(() => {
    initTheme()
  }, [initTheme])

  const Icon = mode === 'dark' ? Moon : Sun

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      aria-label={`Theme: ${mode}`}
      title={`Theme: ${mode}`}
      className="text-[var(--sea-ink-soft)]  transition hover:-translate-y-0.5 hover:text-[var(--sea-ink)]"
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}
