import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import FAQ from '../FAQ'

export default function FAQSection() {
  const { t } = useTranslation()
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section className="px-4 py-16">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="island-kicker mb-2">{t('faq.kicker')}</p>
            <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              {t('faq.title')}
            </h2>
            <p className="text-[var(--sea-ink-soft)]">{t('faq.subtitle')}</p>
          </div>

          <div className="island-shell rounded-2xl px-6 py-2">
            <FAQ items={Array.isArray(faqItems) ? faqItems : []} />
          </div>

          <div className="mt-6 text-center">
            <p className="mb-3 text-sm text-[var(--sea-ink-soft)]">
              {t('faq.stillHaveQuestions')}
            </p>
            <Button type="button" className="rounded-full px-6">
              {t('faq.talkToSales')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
