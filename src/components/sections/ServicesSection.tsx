import { Cloud, Code, Database, Globe, HardDrive, Server, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../ServiceCard'

const services = [
  { key: 'vps', icon: <Server />, glow: 'from-brand-600 to-brand-500' },
  { key: 'dedicated', icon: <HardDrive />, glow: 'from-brand-700 to-brand-500' },
  { key: 'cloud', icon: <Cloud />, glow: 'from-sky-500 to-brand-500' },
  { key: 'antiDdos', icon: <Shield />, glow: 'from-red-500 to-orange-500' },
  { key: 'backup', icon: <Database />, glow: 'from-emerald-500 to-teal-500' },
  { key: 'cdn', icon: <Globe />, glow: 'from-purple-500 to-pink-500' },
  { key: 'outsourcing', icon: <Code />, glow: 'from-green-400 to-brand-500' },
  { key: 'seo', icon: <TrendingUp />, glow: 'from-brand-500 to-cyan-400' },
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-transparent px-4">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 dark:via-slate-950/50 to-transparent" />

      <div className="page-wrap relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-600 dark:text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            {t('services.kicker')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            {t('services.titlePrefix', 'Our ')}<span className="gradient-text">{t('services.titleHighlight', 'Services')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map(({ key, icon, glow }, idx) => (
            <motion.div
              key={key}
              className="group relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: idx * 0.1, ease: "linear" }}
            >
              {/* Hover glow layer */}
              <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 bg-gradient-to-br ${glow}`} />

              <ServiceCard
                icon={icon}
                title={t(`services.items.${key}.title`)}
                description={t(`services.items.${key}.desc`)}
                iconGradient={glow}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
