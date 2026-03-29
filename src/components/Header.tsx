import XylentisLogo from '#/icons/XylentisLogo'
import {
  Building2,
  ChevronDown,
  Cloud,
  CodeXml,
  HardDrive,
  Key,
  Laptop,
  Menu,
  Server,
  Shield,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
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

import type { LucideIcon } from 'lucide-react'

interface ServiceLink {
  to: string
  labelKey: string
  icon: LucideIcon
}

interface ServiceCategory {
  titleKey: string
  icon: LucideIcon
  items: ServiceLink[]
}

const serviceCategories: ServiceCategory[] = [
  {
    titleKey: 'nav.megaMenu.softwareDev',
    icon: CodeXml,
    items: [
      { to: '/services/outsource', labelKey: 'nav.megaMenu.outsourcing', icon: CodeXml },
      { to: '/services/web-design', labelKey: 'nav.megaMenu.webDesign', icon: Laptop },
    ],
  },
  {
    titleKey: 'nav.megaMenu.cloudServer',
    icon: Cloud,
    items: [
      { to: '/services/vps', labelKey: 'nav.megaMenu.vps', icon: Server },
      { to: '/services/dedicated', labelKey: 'nav.megaMenu.dedicated', icon: HardDrive },
      { to: '/services/colocation', labelKey: 'nav.megaMenu.colocation', icon: Building2 },
    ],
  },
  {
    titleKey: 'nav.megaMenu.securityUtils',
    icon: Shield,
    items: [
      { to: '/services/anti-ddos', labelKey: 'nav.megaMenu.antiDdos', icon: Shield },
      { to: '/services/software-license', labelKey: 'nav.megaMenu.licenses', icon: Key },
    ],
  },
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
      <nav className="page-wrap flex items-center justify-between py-3">
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
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </Button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="absolute -left-20 top-full z-50 pt-2"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  <div className="min-w-[620px] rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-xl backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category) => {
                        const CategoryIcon = category.icon
                        return (
                          <div key={category.titleKey} className="space-y-3">
                            {/* Category header */}
                            <div className="flex items-center gap-2 border-b border-[var(--line)] pb-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-500)]/10">
                                <CategoryIcon className="h-4 w-4 text-[var(--brand-500)]" />
                              </div>
                              <h3 className="text-sm font-semibold text-[var(--sea-ink)]">
                                {t(category.titleKey)}
                              </h3>
                            </div>

                            {/* Category items */}
                            <div className="space-y-1">
                              {category.items.map((link) => {
                                const ItemIcon = link.icon
                                return (
                                  <span
                                    key={link.to}
                                    className="group/item flex cursor-default items-center gap-2.5 rounded-lg p-2 opacity-60"
                                  >
                                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]">
                                      <ItemIcon className="h-3.5 w-3.5 text-[var(--sea-ink-soft)]" />
                                    </div>
                                    <span className="text-xs font-medium text-[var(--sea-ink-soft)]">
                                      {t(link.labelKey)}
                                    </span>
                                  </span>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
          {/* <a href="/blog" className="nav-link px-3 py-2">
            {t('nav.blog')}
          </a> */}
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
