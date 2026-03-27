import XylentisLogo from '#/icons/XylentisLogo'
import { Clock, Shield, Users, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const features = [
  {
    key: 'performance',
    icon: <Zap className="w-6 h-6" />,
    color: 'text-brand-500',
    border: 'border-brand-500/20',
    bg: 'bg-brand-500/10',
  },
  {
    key: 'uptime',
    icon: <Clock className="w-6 h-6" />,
    color: 'text-brand-400',
    border: 'border-brand-400/20',
    bg: 'bg-brand-400/10',
  },
  {
    key: 'security',
    icon: <Shield className="w-6 h-6" />,
    color: 'text-brand-600',
    border: 'border-brand-600/20',
    bg: 'bg-brand-600/10',
  },
  {
    key: 'support',
    icon: <Users className="w-6 h-6" />,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    bg: 'bg-neon-cyan/10',
  },
]

// Orbital icon data — each orbits at a different ring
const orbitalIcons = [
  { icon: <Zap className="w-5 h-5 text-brand-500" />, inset: '0px', speed: 25 },
  { icon: <Clock className="w-5 h-5 text-brand-400" />, inset: '50px', speed: 30 },
  { icon: <Shield className="w-5 h-5 text-brand-600" />, inset: '100px', speed: 35 },
  { icon: <Users className="w-5 h-5 text-neon-cyan" />, inset: '150px', speed: 20 },
]

function OrbitalIcon({ icon, inset, speed }: { icon: React.ReactNode; inset: string; speed: number }) {
  const [angle, setAngle] = useState(() => Math.random() * 360)

  useEffect(() => {
    let frame: number
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setAngle(prev => (prev + (360 / speed) * dt) % 360)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [speed])

  return (
    <div
      className="absolute rounded-full"
      style={{ inset, transform: `rotate(${angle}deg)` }}
    >
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 rounded-xl glass-card flex items-center justify-center shadow-lg"
        style={{ rotate: `${-angle}deg` }}
        animate={{ y: [0, -6, 0, 4, 0] }}
        transition={{ duration: 3 + speed * 0.05, repeat: Infinity, ease: 'easeInOut' }}
      >
        {icon}
      </motion.div>
    </div>
  )
}

export default function WhyUsSection() {
  const { t } = useTranslation()

  return (
    <section id="why-us" className="relative py-32 overflow-hidden bg-slate-50 dark:bg-transparent px-4">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 dark:bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="page-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Feature list */}
          <div>
            <motion.span
              className="inline-block text-brand-600 dark:text-neon-cyan text-sm font-semibold tracking-wider uppercase mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: 'linear' }}
            >
              {t('whyUs.kicker')}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'linear' }}
            >
              Why <span className="gradient-text">Xylentis</span>?
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'linear' }}
            >
              {t('whyUs.subtitle')}
            </motion.p>

            <div className="space-y-6">
              {features.map(({ key, icon, color, border, bg }, idx) => (
                <motion.div
                  key={key}
                  className={`flex gap-4 p-4 rounded-xl border ${border} ${bg} backdrop-blur-sm`}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.15, ease: 'linear' }}
                >
                  <div className={`${color} mt-1`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold mb-1">
                      {t(`whyUs.items.${key}.title`)}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`whyUs.items.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Orbital diagram */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-[480px] mx-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700" />
              <div className="absolute inset-[50px] rounded-full border border-slate-200 dark:border-slate-600" />
              <div className="absolute inset-[100px] rounded-full border border-brand-200 dark:border-brand-600/30" />
              <div className="absolute inset-[150px] rounded-full border border-brand-100 dark:border-brand-500/20" />

              {/* Orbiting icons */}
              {orbitalIcons.map((orbital, i) => (
                <OrbitalIcon key={i} {...orbital} />
              ))}

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center p-2 text-white [&_svg]:w-[55px] [&_svg]:h-[32px]">
                  <XylentisLogo />
                </div>
              </div>

              {/* Center pulse */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 bg-brand-500/25 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
