import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeToggle from '../ThemeToggle'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../ui/drawer'

interface MobileNavProps {
  aboutHref: string
}

export default function MobileNav({ aboutHref }: MobileNavProps) {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
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
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[var(--line)] py-3 no-underline text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
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
  )
}
