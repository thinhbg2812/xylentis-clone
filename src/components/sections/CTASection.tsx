import { ArrowRight, Rocket } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="cta" className="relative overflow-hidden px-4 py-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-500)]/5 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-500)]/10 blur-[120px]" />

      <div className="page-wrap relative text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--brand-500)]/20 bg-[var(--brand-500)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-500)]">
          <Rocket className="h-3.5 w-3.5" />
          <span>{t('cta.kicker')}</span>
        </div>

        {/* Title with gradient highlight */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl md:text-6xl">
          {t('cta.title').split('Transform').length > 1 ? (
            <>
              {t('cta.title').split('Transform')[0]}
              <span className="bg-gradient-to-r from-[var(--brand-400)] to-[var(--brand-600)] bg-clip-text text-transparent">
                Transform
              </span>
              {t('cta.title').split('Transform')[1]}
            </>
          ) : (
            t('cta.title')
          )}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--sea-ink-soft)]">
          {t('cta.subtitle')}
        </p>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="xl" variant="default" className="px-10 py-5 text-lg">
            <a href="https://portal.xylentis.com/" target="_blank" rel="noopener noreferrer">
              {t('cta.getStarted')}
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="xl" variant="outline" className="px-10 py-5 text-lg">
            {t('cta.talkToSales')}
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-[var(--sea-ink-soft)]">
          {t('cta.note')}
        </p>
      </div>
    </section>
  )
}
