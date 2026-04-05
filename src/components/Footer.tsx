import XylentisLogo from '#/icons/XylentisLogo'
import { ArrowUpRight, Building2, Hash, Mail, MapPin, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <text x="3" y="18" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
  </svg>
)

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative mt-20 bg-slate-100 pb-10 pt-20 dark:bg-slate-950">
      {/* Gradient top border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

      <div className="mx-auto max-w-[1280px] px-8">
        {/* Main grid: 12-col layout matching original */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand column — spans 3 */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="mb-6 flex items-center gap-2">
              <XylentisLogo />
            </div>

            <div className="mb-2 flex items-center gap-2 text-sm text-slate-900 dark:text-white">
              <Building2 className="h-4 w-4 shrink-0 text-slate-400" />
              <span className="font-semibold">{t('footer.companyName')}</span>
            </div>
            <div className="mb-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Hash className="h-4 w-4 shrink-0 text-slate-400" />
              <span>{t('footer.taxCode')}: {t('footer.taxValue')}</span>
            </div>

            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
              <span>{t('footer.address', 'Ho Chi Minh City, Vietnam')}</span>
            </div>

            <a
              href="mailto:contact@xylentis.com"
              className="mb-6 flex items-center gap-2 text-sm text-slate-500 no-underline transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-slate-400" />
              contact@xylentis.com
            </a>

            <div className="flex items-center gap-2">
              <Button asChild variant="logo" size="icon">
                <a
                  href="https://www.facebook.com/vnxylentis"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="logo" size="icon">
                <a href="#" aria-label="Zalo">
                  <span className='font-bold text-lg'>Z</span>
                </a>
              </Button>
              <Button asChild variant="logo" size="icon">
                <a
                  href="https://t.me/xylentis"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Products — spans 2 */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/services/vps', label: t('footer.vps') },
                { href: '/services/dedicated', label: t('footer.dedicated') },
                { href: '/services/colocation', label: t('footer.colocation') },
                { href: '/services/anti-ddos', label: t('footer.antiDdos') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-500 no-underline transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions — spans 2 */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/services/outsource', label: t('footer.outsourcing') },
                { href: '/services/web-design', label: t('footer.webDesign') },
                { href: '/services/software-license', label: t('footer.licenses') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-500 no-underline transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — spans 2 */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/about', label: t('footer.about') },
                { href: '/#contact', label: t('footer.careers'), badge: t('footer.hiring') },
                { href: '/blog', label: t('footer.blog') },
                { href: '/contact', label: t('footer.contactLink') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-500 no-underline transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {item.label}
                    {'badge' in item && item.badge && (
                      <span className="rounded bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                    <ArrowUpRight className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal — spans 2 */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              {t('footer.legalTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/legal/terms', label: t('footer.terms') },
                { href: '/legal/privacy', label: t('footer.privacy') },
                { href: '/legal/sla', label: t('footer.sla') },
                { href: '/legal/refund', label: t('footer.refund') },
                { href: '/legal/security', label: t('footer.security') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-500 no-underline transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/legal"
                  className="inline-flex items-center gap-1 text-blue-600 no-underline transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {t('footer.viewAll')} →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-800">
          <p className="m-0 text-sm text-slate-500 dark:text-slate-500">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/sitemap.xml"
              className="text-sm text-slate-500 no-underline hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {t('footer.sitemap')}
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {t('footer.allSystems')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
