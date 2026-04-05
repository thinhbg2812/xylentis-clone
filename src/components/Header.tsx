import XylentisLogo from '#/icons/XylentisLogo'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useLanguageStore } from '../stores/language-store'
import DesktopNav from './header/DesktopNav'
import MobileNav from './header/MobileNav'

export default function Header() {
  const { language } = useLanguageStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const homeHref = language === 'en' ? '/' : `/${language}/`
  const aboutHref = language === 'en' ? '/about' : `/${language}/about`

  return (
    <motion.header
      className={`sticky top-0 z-50 px-4 transition-all duration-200 ${scrolled
        ? 'border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl'
        : 'dark:bg-[#020617]'
        }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", ease: "linear", duration: 0.3, delay: 0.3 }}
    >
      <nav className="page-wrap flex items-center justify-between py-3">
        {/* Logo */}
        <a href={homeHref} className="inline-flex items-center gap-2 text-[var(--sea-ink)] no-underline">
          <XylentisLogo />
        </a>

        <DesktopNav aboutHref={aboutHref} />
        <MobileNav aboutHref={aboutHref} />
      </nav>
    </motion.header>
  )
}
