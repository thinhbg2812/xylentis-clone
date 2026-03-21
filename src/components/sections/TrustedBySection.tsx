import { useTranslation } from 'react-i18next'
import StatCounter from '../StatCounter'

const partnerLogos = [
  { name: 'CMC', src: '/assets/logos/cmc.svg', href: 'https://cmctelecom.vn/' },
  { name: 'FPT', src: '/assets/logos/fpt.svg', href: 'https://fpt.vn/' },
  { name: 'Long Van', src: '/assets/logos/longvan.png', href: 'https://longvan.net/' },
  { name: 'GTHost', src: '/assets/logos/gthost.png', href: 'https://gthost.com/' },
  { name: 'UltaHost', src: '/assets/logos/ultahost.webp', href: 'https://ultahost.com/' },
  { name: 'CloudHub', src: '/assets/logos/cloudhub.gif', href: 'https://cloudhub.vn/' },
  { name: 'CloudZone', src: '/assets/logos/cloudzone.png', href: 'https://cloudzone.vn/' },
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
                className="inline-flex h-10 items-center opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-8 max-w-[120px] object-contain"
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
