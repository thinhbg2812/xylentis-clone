import CloudBadge from '#/icons/CloudBadge'
import { cn } from '#/lib/utils'
import { Activity, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'
import StatCounter from '../StatCounter'
import { Button } from '../ui/button'

export default function BannerSection() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-12 sm:pt-20 dark:bg-[#020617]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96  bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96  bg-[radial-gradient(circle,rgba(37,99,235,0.1),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_60%)]" />

      <div className="page-wrap relative">
        {/* Floating cards */}
        <motion.div
          className="absolute -left-4 top-4 hidden lg:block"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -8, 0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="island-shell rounded-xl px-4 py-3.5 shadow-lg min-w-[180px]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--brand-400)] to-[var(--brand-600)] shadow-md shadow-[var(--brand-500)]/25">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[var(--sea-ink)]">{t('hero.performance')}</p>
                  <p className="text-[10px] text-[var(--sea-ink-soft)]">{t('hero.realTime')}</p>
                </div>
                <span className="text-base font-bold text-[var(--brand-600)] dark:text-[var(--brand-300)]">92%</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--brand-100)] dark:bg-[var(--brand-900)]/30">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--brand-400)] to-[var(--brand-600)]"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -right-4 top-6 hidden lg:block"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, 6, 0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
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
          </motion.div>
        </motion.div>

        {/* Title */}
        <div className="mx-auto max-w-4xl text-center ">
          <div className={"relative "}>
            <h1 className={cn(
              'text-6xl md:text-7xl lg:text-8xl xl:text-9xl  tracking-tighter bg-gradient-to-r from-brand-600 via-ocean-500 to-brand-500 dark:from-brand-400 dark:via-ocean-400 dark:to-neon-cyan bg-clip-text text-transparent w-fit mx-auto',
              "mb-4 font-extrabold  sm:text-7xl",
              "gradient-text")}>{t('hero.title')}</h1>
            <div className="absolute -top-16 right-0 md:right-20 md:-top-10 lg:-top-12 ">
              <motion.div
                className=""
                animate={{ y: [0, -8, 0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CloudBadge text={t('hero.badge')} />
              </motion.div>
            </div>
          </div>
          <p className="mb-8 text-2xl md:text-3xl lg:text-4xl font-medium mb-8 mx-auto " >
            <TypeAnimation
              sequence={[t('hero.subtitle'), 3000, '']}
              wrapper="span"
              speed={40}
              deletionSpeed={50}
              repeat={Infinity}
              className="font-semibold text-[var(--sea-ink)]"
            />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3" >
            <Button asChild size="xl" variant="default" className="px-5 py-2.5">
              <a href="https://portal.xylentis.com/" target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="xl" variant="outline" className="px-5 py-2.5">
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
