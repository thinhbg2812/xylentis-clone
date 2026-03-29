import { createFileRoute } from '@tanstack/react-router'
import AboutPage from '../../components/sections/AboutPage'

export const Route = createFileRoute('/$lang/about')({
  component: AboutPage,
})
