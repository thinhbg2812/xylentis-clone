import {
  Award,
  Building2,
  Calendar,
  Flame,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  Server,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const values = [
  { icon: Award, key: 'excellence', color: 'from-blue-500 to-cyan-400' },
  { icon: Heart, key: 'passion', color: 'from-rose-500 to-pink-400' },
  { icon: Users, key: 'teamwork', color: 'from-violet-500 to-purple-400' },
  { icon: Lightbulb, key: 'innovation', color: 'from-amber-500 to-yellow-400' },
]

const milestones = [
  { icon: Building2, key: 'founded', date: 'Dec 3, 2025' },
  { icon: Server, key: 'firstServer', date: 'Dec 31, 2025' },
]

const visionItems = [
  { icon: Globe, key: 'regionalExpansion' },
  { icon: Sprout, key: 'sustainableGrowth' },
  { icon: Handshake, key: 'trustedPartner' },
]

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 pb-16 pt-20 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--brand-500)]/5 to-transparent" />
        <motion.div className="page-wrap mx-auto max-w-3xl text-center" {...fadeUp}>
          <p className="island-kicker mb-3">{t('aboutPage.kicker')}</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl lg:text-6xl">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[var(--sea-ink-soft)]">
            {t('aboutPage.hero.subtitle')}
          </p>
          <p className="text-base text-[var(--sea-ink-soft)]">
            {t('aboutPage.hero.founded')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl px-6">
              <a href="/#contact">{t('aboutPage.hero.cta1')}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl px-6">
              <a href="/#services">{t('aboutPage.hero.cta2')}</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 py-16">
        <div className="page-wrap mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-5">
          <motion.div className="lg:col-span-3" {...fadeUp}>
            <p className="island-kicker mb-2">{t('aboutPage.story.kicker')}</p>
            <h2 className="mb-5 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              {t('aboutPage.story.title')}
            </h2>
            <div className="space-y-4 text-[var(--sea-ink-soft)] leading-relaxed">
              <p>{t('aboutPage.story.p1')}</p>
              <p>{t('aboutPage.story.p2')}</p>
              <p>{t('aboutPage.story.p3')}</p>
            </div>
          </motion.div>
          <motion.div
            className="island-shell rounded-2xl p-6 lg:col-span-2"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-500)] to-[var(--lagoon-deep)]">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-[var(--sea-ink)]">
                  {t('aboutPage.mission.title')}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                  {t('aboutPage.mission.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-16">
        <div className="page-wrap mx-auto max-w-5xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="island-kicker mb-2">{t('aboutPage.values.kicker')}</p>
            <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              {t('aboutPage.values.title')}
            </h2>
            <p className="text-[var(--sea-ink-soft)]">{t('aboutPage.values.subtitle')}</p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.key}
                  className="island-shell group rounded-2xl p-6 transition-shadow hover:shadow-lg"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} shadow-lg shadow-black/10`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                    {t(`aboutPage.values.items.${v.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {t(`aboutPage.values.items.${v.key}.desc`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="px-4 py-16">
        <div className="page-wrap mx-auto max-w-5xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="island-kicker mb-2">{t('aboutPage.journey.kicker')}</p>
            <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              {t('aboutPage.journey.title')}
            </h2>
            <p className="text-[var(--sea-ink-soft)]">{t('aboutPage.journey.subtitle')}</p>
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--line)] sm:left-1/2" />

            {milestones.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.key}
                  className={`relative mb-10 flex items-start gap-5 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                >
                  {/* Dot */}
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[var(--surface)] bg-gradient-to-br from-[var(--brand-500)] to-[var(--lagoon-deep)] shadow-md sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className={`island-shell flex-1 rounded-2xl p-5 ${i % 2 === 0 ? 'sm:mr-auto sm:w-[calc(50%-40px)]' : 'sm:ml-auto sm:w-[calc(50%-40px)]'}`}>
                    <span className="mb-1 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-500)]">
                      <Calendar className="h-3 w-3" /> {m.date}
                    </span>
                    <h3 className="mb-1 text-base font-semibold text-[var(--sea-ink)]">
                      {t(`aboutPage.journey.items.${m.key}.title`)}
                    </h3>
                    <p className="text-sm text-[var(--sea-ink-soft)]">
                      {t(`aboutPage.journey.items.${m.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-4 py-16">
        <div className="page-wrap mx-auto max-w-5xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="island-kicker mb-2">{t('aboutPage.vision.kicker')}</p>
            <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              {t('aboutPage.vision.title')}
            </h2>
            <p className="text-[var(--sea-ink-soft)]">{t('aboutPage.vision.subtitle')}</p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {visionItems.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.key}
                  className="island-shell rounded-2xl p-6"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-500)]/10">
                    <Icon className="h-5 w-5 text-[var(--brand-500)]" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                    {t(`aboutPage.vision.items.${v.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {t(`aboutPage.vision.items.${v.key}.desc`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="px-4 py-16">
        <motion.div className="page-wrap mx-auto max-w-2xl text-center" {...fadeUp}>
          <Rocket className="mx-auto mb-4 h-8 w-8 text-[var(--brand-500)]" />
          <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('aboutPage.contact.title')}
          </h2>
          <p className="mb-8 text-[var(--sea-ink-soft)]">{t('aboutPage.contact.subtitle')}</p>
          <div className="mx-auto mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
              <MapPin className="h-4 w-4 text-[var(--brand-500)]" />
              {t('aboutPage.contact.address')}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
              <Mail className="h-4 w-4 text-[var(--brand-500)]" />
              {t('aboutPage.contact.email')}
            </div>
          </div>
          <Button asChild size="lg" className="rounded-xl px-8">
            <a href="/#contact">
              <Flame className="mr-2 h-4 w-4" />
              {t('aboutPage.contact.cta')}
            </a>
          </Button>
        </motion.div>
      </section>
    </main>
  )
}
