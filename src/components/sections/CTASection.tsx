import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="px-4 py-20">
      <div className="page-wrap">
        <div className="island-shell relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56  bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56  bg-[radial-gradient(circle,rgba(37,99,235,0.15),transparent_60%)]" />

          <p className="island-kicker relative mb-3">{t('cta.kicker')}</p>
          <h2 className="relative mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="relative mx-auto mb-8 max-w-2xl text-[var(--sea-ink-soft)]">
            {t('cta.subtitle')}
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="https://portal.xylentis.com/" target="_blank" rel="noopener noreferrer">
                {t('cta.getStarted')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6">
              {t('cta.talkToSales')}
            </Button>
          </div>
          <p className="relative mt-4 text-xs text-[var(--sea-ink-soft)]">
            {t('cta.note')}
          </p>
        </div>
      </div>
    </section>
  )
}
