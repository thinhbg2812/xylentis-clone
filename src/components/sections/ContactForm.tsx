import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { PartyPopper, Send } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

interface FormData {
  fullName: string
  email: string
  company: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  company: '',
  subject: '',
  message: '',
}

const inputClassName =
  'w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[var(--lagoon-deep)] focus:ring-2 focus:ring-[var(--brand-500)]/20'

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Validate required fields are filled
    if (formData.fullName && formData.email && formData.subject && formData.message) {
      setShowSuccess(true)
    }
  }

  const handleClose = () => {
    setShowSuccess(false)
    setFormData(initialFormData)
  }

  return (
    <>
      <div className="island-shell rounded-2xl p-6 lg:col-span-3">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                {t('contact.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={inputClassName}
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
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={inputClassName}
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
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className={inputClassName}
                placeholder={t('contact.company')}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--sea-ink)]">
                {t('contact.subject')} <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className={inputClassName}
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
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`${inputClassName} resize-none`}
              placeholder={t('contact.message')}
            />
          </div>
          <Button type="submit" size="lg" className="w-full justify-center rounded-lg">
            <Send className="mr-2 h-4 w-4" />
            {t('contact.send')}
          </Button>
        </form>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="items-center text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/25">
              <PartyPopper className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-xl text-[var(--sea-ink)]">
              {t('contact.success.title')}
            </DialogTitle>
            <DialogDescription className="text-[var(--sea-ink-soft)]">
              {t('contact.success.description')}
            </DialogDescription>
          </DialogHeader>

          <div className="my-2 space-y-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--sea-ink-soft)]">{t('contact.fullName')}</span>
              <span className="font-medium text-[var(--sea-ink)]">{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--sea-ink-soft)]">{t('contact.email')}</span>
              <span className="font-medium text-[var(--sea-ink)]">{formData.email}</span>
            </div>
            {formData.company && (
              <div className="flex justify-between">
                <span className="text-[var(--sea-ink-soft)]">{t('contact.company')}</span>
                <span className="font-medium text-[var(--sea-ink)]">{formData.company}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[var(--sea-ink-soft)]">{t('contact.subject')}</span>
              <span className="font-medium text-[var(--sea-ink)]">{formData.subject}</span>
            </div>
            <div className="border-t border-[var(--line)] pt-2">
              <span className="text-[var(--sea-ink-soft)]">{t('contact.message')}</span>
              <p className="mt-1 font-medium text-[var(--sea-ink)]">{formData.message}</p>
            </div>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button onClick={handleClose} size="lg" className="w-full rounded-lg">
              {t('contact.success.close')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
