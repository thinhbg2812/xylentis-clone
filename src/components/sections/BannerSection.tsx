import { Activity, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import StatCounter from '../StatCounter'
import { Button } from '../ui/button'

export default function BannerSection() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-12 sm:pt-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96  bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96  bg-[radial-gradient(circle,rgba(37,99,235,0.1),transparent_60%)]" />

      <div className="page-wrap relative">
        {/* Floating cards */}
        <div className="rise-in absolute -left-4 top-4 hidden lg:block" style={{ animationDelay: '300ms' }}>
          <div className="island-shell rounded-xl px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[var(--brand-500)]" />
              <div>
                <p className="text-xs font-semibold text-[var(--sea-ink)]">{t('hero.performance')}</p>
                <p className="text-[10px] text-[var(--sea-ink-soft)]">{t('hero.realTime')}</p>
              </div>
              <span className="ml-2 text-sm font-bold text-[var(--brand-600)]">92%</span>
            </div>
          </div>
        </div>

        <div className="rise-in absolute -right-4 top-6 hidden lg:block" style={{ animationDelay: '400ms' }}>
          <div className="island-shell rounded-xl px-4 py-3 shadow-lg">
            <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--sea-ink)]">
              <span className="h-1.5 w-1.5  bg-green-500" />
              {t('hero.serverStatus')}
            </p>
            <div className="flex gap-3">
              {[
                { ms: '12ms', label: t('hero.usEast') },
                { ms: '18ms', label: t('hero.euWest') },
                { ms: '24ms', label: t('hero.apSouth') },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-sm font-bold text-[var(--sea-ink)]">{s.ms}</p>
                  <p className="text-[10px] text-[var(--sea-ink-soft)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="rise-in mb-4 inline-block  border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-1.5 text-xs font-medium text-[var(--lagoon-deep)]">
            {t('hero.badge')}
          </p>
          <h1 className=" mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl" >
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          <p className="mb-8 text-lg text-[var(--sea-ink-soft)] sm:text-xl" >
            {t('hero.subtitle')}{' '}
            <span className="font-semibold text-[var(--sea-ink)]">reliability.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3" >
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="https://portal.xylentis.com/" target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6">
              {t('hero.consultation')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="rise-in mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4" style={{ animationDelay: '400ms' }}>
          <StatCounter value={t('hero.stats.uptime')} label={t('hero.stats.uptimeLabel')} />
          <StatCounter value={t('hero.stats.regions')} label={t('hero.stats.regionsLabel')} />
          <StatCounter value={t('hero.stats.latency')} label={t('hero.stats.latencyLabel')} />
          <StatCounter value={t('hero.stats.support')} label={t('hero.stats.supportLabel')} />
        </div>
      </div>
    </section>
  )
}
