import { CheckCircle, Clock, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="px-4 py-16">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="island-kicker mb-2">{t('contact.kicker')}</p>
          <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="text-[var(--sea-ink-soft)]">{t('contact.subtitle')}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="island-shell rounded-2xl p-6 lg:col-span-3">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                    {t('contact.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20"
                    placeholder={t('contact.fullName')}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                    {t('contact.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20"
                    placeholder={t('contact.email')}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20"
                    placeholder={t('contact.company')}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                    {t('contact.subject')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20"
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option>{t('contact.subjects.general')}</option>
                    <option>{t('contact.subjects.sales')}</option>
                    <option>{t('contact.subjects.support')}</option>
                    <option>{t('contact.subjects.partnership')}</option>
                    <option>{t('contact.subjects.careers')}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                  {t('contact.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20"
                  placeholder={t('contact.message')}
                />
              </div>
              <Button type="submit" size="lg" className="w-full justify-center rounded-lg">
                {t('contact.send')}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="island-shell rounded-2xl p-5">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[var(--brand-500)]" />
                  <div>
                    <p className="text-xs font-medium text-[var(--sea-ink-soft)]">Email</p>
                    <p className="text-sm font-semibold text-[var(--sea-ink)]">{t('contact.emailValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-500)]" />
                  <div>
                    <p className="text-xs font-medium text-[var(--sea-ink-soft)]">{t('footer.address')}</p>
                    <p className="text-sm font-semibold text-[var(--sea-ink)]">{t('contact.address')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-[var(--brand-500)]" />
                  <div>
                    <p className="text-xs font-medium text-[var(--sea-ink-soft)]">{t('contact.businessHours')}</p>
                    <p className="text-sm font-semibold text-[var(--sea-ink)]">{t('contact.supportAvailable')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="island-shell rounded-2xl p-5">
              <h4 className="mb-2 text-sm font-semibold text-[var(--sea-ink)]">
                {t('contact.quickResponse')}
              </h4>
              <p className="mb-3 text-xs text-[var(--sea-ink-soft)]">
                {t('contact.quickResponseDesc')}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                <CheckCircle className="h-3.5 w-3.5" />
                {t('contact.teamOnline')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
