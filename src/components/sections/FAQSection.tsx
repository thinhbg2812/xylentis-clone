import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import FAQ from '../FAQ'
import { Button } from '../ui/button'

export default function FAQSection() {
  const { t } = useTranslation()
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section className="relative py-32 overflow-hidden px-4">
      <div className="page-wrap mx-auto max-w-[80rem]">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4">
              {t('faq.kicker')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('faq.titlePrefix', 'Frequently Asked ')}<span className="gradient-text">{t('faq.titleHighlight', 'Questions')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* FAQ accordion — each item is its own card */}
          <FAQ items={Array.isArray(faqItems) ? faqItems : []} />

          {/* CTA */}
          <motion.div
            className="mt-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'linear' }}
          >
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              {t('faq.stillHaveQuestions')}
            </p>
            <Button type="button" className="rounded-full px-8 py-3">
              {t('faq.talkToSales')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
