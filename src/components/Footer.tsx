import {  Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const XylentisLogo = () => (
  <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
    <defs>
      <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="18" fill="url(#footer-logo-grad)" opacity="0.1" />
    <path
      d="M12 12L20 28L28 12"
      stroke="url(#footer-logo-grad)"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 20H32"
      stroke="url(#footer-logo-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="20" cy="8" r="2" fill="#3b82f6" />
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--header-bg)] px-4 pb-8 pt-12 backdrop-blur-lg">
      <div className="page-wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <XylentisLogo />
              <span className="text-lg font-bold tracking-tight text-[var(--sea-ink)]">
                XYLENTIS
              </span>
            </div>
            <p className="mb-1 text-sm text-[var(--sea-ink-soft)]">
              {t('footer.companyName')}
            </p>
            <p className="mb-3 text-xs text-[var(--sea-ink-soft)]">
              {t('footer.taxCode')}: {t('footer.taxValue')}
            </p>
            <a
              href="mailto:contact@xylentis.com"
              className="text-sm text-[var(--lagoon-deep)] no-underline hover:text-[var(--lagoon)]"
            >
              contact@xylentis.com
            </a>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.facebook.com/vnxylentis"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/xylentis"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/services/vps', label: t('footer.vps') },
                { href: '/services/dedicated', label: t('footer.dedicated') },
                { href: '/services/colocation', label: t('footer.colocation') },
                { href: '/services/anti-ddos', label: t('footer.antiDdos') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/services/outsource', label: t('footer.outsourcing') },
                { href: '/services/web-design', label: t('footer.webDesign') },
                { href: '/services/software-license', label: t('footer.licenses') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: t('footer.about') },
                { href: '/#contact', label: t('footer.careers'), badge: t('footer.hiring') },
                { href: '/blog', label: t('footer.blog') },
                { href: '/contact', label: t('footer.contactLink') },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)]"
                  >
                    {item.label}
                    {'badge' in item && item.badge && (
                      <span className=" bg-[var(--brand-600)] px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              {t('footer.legalTitle')}
            </h4>
            <ul className="space-y-2 text-sm">
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
                    className="text-[var(--sea-ink-soft)] no-underline transition hover:text-[var(--sea-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/legal"
                  className="text-[var(--lagoon-deep)] no-underline transition hover:text-[var(--lagoon)]"
                >
                  {t('footer.viewAll')} →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--sea-ink-soft)] sm:flex-row">
          <p className="m-0">{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <a
              href="/sitemap.xml"
              className="text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)]"
            >
              {t('footer.sitemap')}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2  bg-green-500" />
              {t('footer.allSystems')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
