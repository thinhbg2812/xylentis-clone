import XylentisLogo from '#/icons/XylentisLogo'
import { Link } from '@tanstack/react-router'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { Button } from './ui/button'



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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
      <nav className="page-wrap flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[var(--sea-ink)] no-underline"
        >
          <XylentisLogo />
        </Link>

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
          <Link to="/about" className="nav-link px-3 py-2">
            {t('nav.about')}
          </Link>
          <a href="/blog" className="nav-link px-3 py-2">
            {t('nav.blog')}
          </a>
          <a href="/legal" className="nav-link px-3 py-2">
            {t('nav.legal')}
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            asChild
            type="button"
            variant="default"
            className='px-5 py-2.5'
          >
            <a
              href="https://portal.xylentis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-white'
            >
              {t('nav.getStarted')}
            </a>
          </Button>

          {/* Mobile toggle */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--line)] pb-4 lg:hidden">
          <div className="page-wrap flex flex-col gap-1 pt-3 text-sm font-medium">
            <a href="#services" className="nav-link py-2" onClick={() => setMobileOpen(false)}>
              {t('nav.services')}
            </a>
            <a href="#why-us" className="nav-link py-2" onClick={() => setMobileOpen(false)}>
              {t('nav.whyUs')}
            </a>
            <a href="#showcase" className="nav-link py-2" onClick={() => setMobileOpen(false)}>
              {t('nav.platform')}
            </a>
            <Link to="/about" className="nav-link py-2" onClick={() => setMobileOpen(false)}>
              {t('nav.about')}
            </Link>
            <a href="/blog" className="nav-link py-2" onClick={() => setMobileOpen(false)}>
              {t('nav.blog')}
            </a>
            <Button
              asChild
              className="btn-primary mt-2 justify-center"
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
        </div>
      )}
    </header>
  )
}
