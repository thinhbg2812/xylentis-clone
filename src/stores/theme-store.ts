import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  initTheme: () => void
}

function applyThemeToDOM(mode: ThemeMode) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(mode)
  root.setAttribute('data-theme', mode)
  root.style.colorScheme = mode
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'light',

      setMode: (mode) => {
        if (typeof window !== 'undefined') {
          applyThemeToDOM(mode)
        }
        set({ mode })
      },

      toggleMode: () => {
        const { mode } = get()
        const next: ThemeMode = mode === 'light' ? 'dark' : 'light'
        get().setMode(next)
      },

      initTheme: () => {
        const { mode } = get()
        applyThemeToDOM(mode)
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({ mode: state.mode }),
    },
  ),
)
