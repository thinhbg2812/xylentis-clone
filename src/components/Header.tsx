import XylentisLogo from '#/icons/XylentisLogo'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguageStore } from '../stores/language-store'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { Button } from './ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer'

const serviceLinks = [
  { to: '/services/vps', labelKey: 'Cloud VPS' },
  { to: '/services/dedicated', labelKey: 'VDS / Dedicated Server' },
  { to: '/services/colocation', labelKey: 'Colocation' },
  { to: '/services/anti-ddos', labelKey: 'Anti-DDoS Protection' },
  { to: '/services/outsource', labelKey: 'Software Outsourcing' },
  { to: '/services/web-design', labelKey: 'Website/App Design' },
  { to: '/services/software-license', labelKey: 'Software Licenses' },
]

export default function Header() {
  const { t } = useTranslation()
  const { language } = useLanguageStore()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll() // check initial position
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Compute locale-aware hrefs:
  // EN = clean paths (/,  /about), VI = prefixed (/vi/, /vi/about)
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
      <nav className="page-wrap flex items-center justify-between py-3 ">
        {/* Logo */}
        <a href={homeHref} className="inline-flex items-center gap-2 text-[var(--sea-ink)] no-underline">
          <XylentisLogo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 text-sm font-medium lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Button
              type="button"
              variant="ghost"
              className="nav-link inline-flex items-center gap-1 px-3 py-2"
            >
              {t('nav.services')}
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-2 shadow-xl backdrop-blur-xl">
                {serviceLinks.map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
                  >
                    {link.labelKey}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#why-us" className="nav-link px-3 py-2">
            {t('nav.whyUs')}
          </a>
          <a href="#showcase" className="nav-link px-3 py-2">
            {t('nav.platform')}
          </a>
          <a href={aboutHref} className="nav-link px-3 py-2">
            {t('nav.about')}
          </a>
          <a href="/blog" className="nav-link px-3 py-2">
            {t('nav.blog')}
          </a>
          <a href="/legal" className="nav-link px-3 py-2">
            {t('nav.legal')}
          </a>
        </div>

        {/* Right Actions — desktop only */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            asChild
            type="button"
            variant="default"
            className="px-5 py-2.5"
          >
            <a
              href="https://portal.xylentis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.getStarted')}
            </a>
          </Button>
        </div>

        {/* Mobile: ThemeToggle + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Drawer direction="right" open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(true)}
              className="text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)]"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <DrawerContent>
              <DrawerHeader className="flex flex-row items-center justify-between">
                <DrawerTitle>{t('nav.services')}</DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <nav className="flex flex-1 flex-col px-4 text-sm font-medium">
                {[
                  { href: '#services', label: t('nav.services') },
                  { href: '#why-us', label: t('nav.whyUs') },
                  { href: '#showcase', label: t('nav.platform') },
                  { href: aboutHref, label: t('nav.about') },
                  { href: '/blog', label: t('nav.blog') },
                ].map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="nav-link border-b border-[var(--line)] py-3"
                    onClick={() => setMobileOpen(false)}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.25, ease: 'easeOut' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <DrawerFooter className="border-t border-[var(--line)]">
                <div className="flex justify-center gap-2">
                  <LanguageSwitcher />
                </div>
                <Button asChild variant="default" className="justify-center">
                  <a
                    href="https://portal.xylentis.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('nav.getStarted')}
                  </a>
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </motion.header>
  )
}
