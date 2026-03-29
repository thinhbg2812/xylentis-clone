import { createFileRoute } from '@tanstack/react-router'
import i18n from '../i18n'
import AboutPage from '../components/sections/AboutPage'

export const Route = createFileRoute('/about')({
  beforeLoad: () => {
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en')
    }
  },
  component: AboutPage,
})
