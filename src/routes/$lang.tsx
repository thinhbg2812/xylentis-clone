import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import i18n from '../i18n'

const SUPPORTED_LANGS = ['en', 'vi'] as const

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    const { lang } = params

    // Redirect unsupported lang segments
    if (!SUPPORTED_LANGS.includes(lang as (typeof SUPPORTED_LANGS)[number])) {
      throw redirect({ to: '/', replace: true })
    }

    // EN is the default — strip the /en prefix and use clean URLs
    if (lang === 'en') {
      throw redirect({ to: '/', replace: true })
    }

    // Set VI language synchronously before render — eliminates EN flash
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  },
  component: () => <Outlet />,
})
