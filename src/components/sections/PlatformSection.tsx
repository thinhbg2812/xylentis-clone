import { Activity, Cpu, Database, Globe, HardDrive, Layers } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const metrics = [
  { label: 'CPU Usage', value: 34, color: 'bg-ocean-500 dark:bg-ocean-400' },
  { label: 'Memory', value: 67, color: 'bg-amber-500' },
  { label: 'Storage', value: 42, color: 'bg-ocean-500 dark:bg-ocean-400' },
]

const quickActions = [
  { icon: <Cpu className="w-4 h-4 text-slate-600 dark:text-slate-400" />, label: 'Instances' },
  { icon: <Database className="w-4 h-4 text-slate-600 dark:text-slate-400" />, label: 'Database' },
  { icon: <Layers className="w-4 h-4 text-slate-600 dark:text-slate-400" />, label: 'Snapshots' },
  { icon: <HardDrive className="w-4 h-4 text-slate-600 dark:text-slate-400" />, label: 'Storage' },
]

const regions = [
  { name: 'US East', ms: '12ms' },
  { name: 'EU West', ms: '24ms' },
  { name: 'AP South', ms: '38ms' },
  { name: 'AP East', ms: '45ms' },
]

export default function PlatformSection() {
  const { t } = useTranslation()

  return (
    <section id="showcase" className="relative py-32 overflow-hidden bg-slate-100 dark:bg-transparent px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 dark:from-slate-950/50 via-transparent to-slate-50/50 dark:to-slate-950/50" />

      <div className="page-wrap relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4">
            {t('platform.kicker')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('platform.titlePrefix', 'Powerful ')}<span className="gradient-text">{t('platform.titleHighlight', 'Dashboard')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('platform.subtitle')}
          </p>
        </div>

        {/* Dashboard card */}
        <motion.div
          className="relative"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'linear' }}
        >
          {/* Glow aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-ocean-500/10 dark:from-ocean-500/20 via-ocean-400/10 dark:via-ocean-400/20 to-neon-cyan/10 dark:to-neon-cyan/20 rounded-3xl blur-2xl opacity-60" />

          <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50">
            {/* Browser bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                {t('platform.dashboardUrl')}
              </span>
              <div className="w-20" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left column */}
                <div className="lg:col-span-1 space-y-4">
                  {/* Server Health */}
                  <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-ocean-400/20 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-ocean-500 dark:text-ocean-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold">{t('platform.serverHealth')}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{t('platform.allSystems')}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {metrics.map((m) => (
                        <div key={m.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                            <span className="text-slate-700 dark:text-slate-300">{m.value}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-4">{t('platform.quickActions')}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((a) => (
                        <button
                          key={a.label}
                          className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-transparent"
                        >
                          {a.icon}
                          <span className="text-xs text-slate-600 dark:text-slate-400">{a.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Network Traffic Chart */}
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold">Network Traffic</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-500">Last 24 hours</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-ocean-500" />
                          <span className="text-slate-600 dark:text-slate-400">Inbound</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-ocean-400" />
                          <span className="text-slate-600 dark:text-slate-400">Outbound</span>
                        </span>
                      </div>
                    </div>
                    <div className="relative h-48">
                      <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4a7de8" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#4a7de8" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4a90c2" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#4a90c2" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        {[0, 25, 50, 75, 100, 125].map((y) => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
                        ))}
                        {/* Inbound area */}
                        <path d="M0,120 C50,100 100,80 150,90 C200,100 250,60 300,40 C350,30 380,25 400,20 L400,150 L0,150Z" fill="url(#blueGradient)" />
                        <path d="M0,120 C50,100 100,80 150,90 C200,100 250,60 300,40 C350,30 380,25 400,20" fill="none" className="stroke-ocean-500" strokeWidth="2" />
                        {/* Outbound area */}
                        <path d="M0,130 C50,120 100,110 150,115 C200,120 250,90 300,80 C350,70 380,65 400,60 L400,150 L0,150Z" fill="url(#cyanGradient)" />
                        <path d="M0,130 C50,120 100,110 150,115 C200,120 250,90 300,80 C350,70 380,65 400,60" fill="none" className="stroke-ocean-400" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Global Regions */}
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-5 h-5 text-neon-cyan" />
                      <h4 className="text-slate-900 dark:text-white font-semibold">{t('platform.globalRegions')}</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {regions.map((r) => (
                        <div key={r.name} className="p-3 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-transparent">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-ocean-400" />
                            <span className="text-sm text-slate-900 dark:text-white">{r.name}</span>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">{r.ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
