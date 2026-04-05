import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeToggle from '../ThemeToggle'
import { Button } from '../ui/button'
import { serviceCategories } from './service-categories'

interface DesktopNavProps {
  aboutHref: string
}

export default function DesktopNav({ aboutHref }: DesktopNavProps) {
  const { t } = useTranslation()
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      {/* Desktop Nav Links */}
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
    </>
  )
}
