import { useTranslation } from 'react-i18next'
import StatCounter from '../StatCounter'

const partnerLogos = [
  { name: 'CMC', src: 'https://www.cmc.com.vn/main/imgs/logo.svg', href: 'https://cmctelecom.vn/' },
  { name: 'FPT', src: 'https://fpt.vn/frontend_layout_2025_vibecode/assets/images/logo-ftel.svg', href: 'https://fpt.vn/' },
  { name: 'Long Van', src: 'https://longvan.net/uploads/logo_longvancloudsolution_d18caa00d7.png', href: 'https://longvan.net/' },
  { name: 'GTHost', src: 'https://gthost.com/_next/image?url=%2Fstatic%2Flogo.png&w=384&q=100', href: 'https://gthost.com/' },
  { name: 'UltaHost', src: 'https://ultahost.com/themes/default/images/logos/logo-light-en.webp', href: 'https://ultahost.com/' },
  { name: 'CloudHub', src: 'https://cloudhub.vn/wp-content/uploads/2023/11/cloudhub-logo.gif', href: 'https://cloudhub.vn/' },
  { name: 'CloudZone', src: 'https://cloudzone.vn/images/logo-cloudzone-white.png', href: 'https://cloudzone.vn/' },
]

export default function TrustedBySection() {
  const { t } = useTranslation()

  return (
    <section className="px-4 py-16">
      <div className="page-wrap">
        <p className="island-kicker mb-8 text-center">{t('trusted.kicker')}</p>

        {/* Logo marquee */}
        <div className="relative mb-12 overflow-hidden">
          <div className="logo-marquee-track flex items-center gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <a
                key={`${logo.name}-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center opacity-70 transition hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 max-w-[140px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { val: t('trusted.stats.uptime'), unit: t('trusted.stats.uptimeUnit'), label: t('trusted.stats.uptimeLabel') },
            { val: t('trusted.stats.projects'), unit: t('trusted.stats.projectsUnit'), label: t('trusted.stats.projectsLabel') },
            { val: t('trusted.stats.clients'), unit: t('trusted.stats.clientsUnit'), label: t('trusted.stats.clientsLabel') },
            { val: t('trusted.stats.supportHours'), unit: t('trusted.stats.supportUnit'), label: t('trusted.stats.supportLabel') },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <StatCounter value={s.val} label={s.label} suffix={s.unit} />
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { emoji: '🛡️', label: t('trusted.badges.soc2') },
            { emoji: '✓', label: t('trusted.badges.iso') },
            { emoji: '🔒', label: t('trusted.badges.gdpr') },
            { emoji: '💳', label: t('trusted.badges.pci') },
          ].map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2  border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--sea-ink-soft)]"
            >
              <span>{b.emoji}</span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
