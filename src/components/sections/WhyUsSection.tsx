import { useTranslation } from 'react-i18next'
import { Cpu, Clock, Lock, Headphones } from 'lucide-react'

const whyUsIcons: Record<string, React.ReactNode> = {
  performance: <Cpu className="h-6 w-6" />,
  uptime: <Clock className="h-6 w-6" />,
  security: <Lock className="h-6 w-6" />,
  support: <Headphones className="h-6 w-6" />,
}

const whyUsKeys = ['performance', 'uptime', 'security', 'support']

export default function WhyUsSection() {
  const { t } = useTranslation()

  return (
    <section id="why-us" className="flex min-h-[90vh] items-center px-4 py-16">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="island-kicker mb-2">{t('whyUs.kicker')}</p>
          <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('whyUs.title')}
          </h2>
          <p className="text-[var(--sea-ink-soft)]">{t('whyUs.subtitle')}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {whyUsKeys.map((key, idx) => (
            <div
              key={key}
              className="island-shell rise-in rounded-2xl p-6 transition hover:-translate-y-0.5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-3 inline-flex rounded-xl bg-[var(--brand-50)] p-3 text-[var(--brand-600)] dark:bg-[var(--brand-900)]/20">
                {whyUsIcons[key]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                {t(`whyUs.items.${key}.title`)}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                {t(`whyUs.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
