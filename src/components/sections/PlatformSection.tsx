import { Database, HardDrive, Layers, Wifi } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export default function PlatformSection() {
  const { t } = useTranslation()

  return (
    <section id="showcase" className="px-4 py-16">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="island-kicker mb-2">{t('platform.kicker')}</p>
          <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('platform.title')}
          </h2>
          <p className="text-[var(--sea-ink-soft)]">{t('platform.subtitle')}</p>
        </div>

        {/* Dashboard mockup */}
        <div className="island-shell rise-in mx-auto max-w-4xl overflow-hidden rounded-2xl">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3  bg-red-400" />
              <span className="h-3 w-3  bg-yellow-400" />
              <span className="h-3 w-3  bg-green-400" />
            </div>
            <div className="ml-4 flex-1 rounded-lg bg-[var(--sand)] px-3 py-1.5 text-xs text-[var(--sea-ink-soft)]">
              {t('platform.dashboardUrl')}
            </div>
          </div>

          {/* Dashboard content */}
          <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Server Health */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <h4 className="mb-2 text-sm font-semibold text-[var(--sea-ink)]">
                {t('platform.serverHealth')}
              </h4>
              <p className="mb-3 flex items-center gap-1.5 text-xs text-green-600">
                <span className="h-2 w-2  bg-green-500" />
                {t('platform.allSystems')}
              </p>
              {[
                { label: t('platform.cpuUsage'), value: 34, color: 'bg-blue-500' },
                { label: t('platform.memory'), value: 67, color: 'bg-purple-500' },
                { label: t('platform.storage'), value: 42, color: 'bg-amber-500' },
              ].map((m) => (
                <div key={m.label} className="mb-2">
                  <div className="mb-1 flex justify-between text-xs text-[var(--sea-ink-soft)]">
                    <span>{m.label}</span>
                    <span className="font-semibold text-[var(--sea-ink)]">{m.value}%</span>
                  </div>
                  <div className="h-1.5  bg-[var(--sand)]">
                    <div
                      className={`h-full  ${m.color} transition-all duration-500`}
                      style={{ width: `${m.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border border-[var(--line)] p-4">
              <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
                {t('platform.quickActions')}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: <Layers className="h-4 w-4" />, label: t('platform.instances') },
                  { icon: <Database className="h-4 w-4" />, label: t('platform.database') },
                  { icon: <Wifi className="h-4 w-4" />, label: t('platform.network') },
                  { icon: <HardDrive className="h-4 w-4" />, label: t('platform.storage') },
                ].map((a) => (
                  <Button
                    key={a.label}
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[var(--sea-ink-soft)] hover:border-[var(--lagoon-deep)] hover:text-[var(--sea-ink)]"
                  >
                    {a.icon}
                    {a.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Global Regions */}
            <div className="rounded-xl border border-[var(--line)] p-4 sm:col-span-2 lg:col-span-1">
              <h4 className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
                {t('platform.globalRegions')}
              </h4>
              {[
                { region: 'US East', ms: '12ms', status: 'green' },
                { region: 'EU West', ms: '24ms', status: 'green' },
                { region: 'AP South', ms: '38ms', status: 'yellow' },
                { region: 'AP East', ms: '45ms', status: 'yellow' },
              ].map((r) => (
                <div key={r.region} className="mb-2 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-[var(--sea-ink-soft)]">
                    <span className={`h-2 w-2  ${r.status === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {r.region}
                  </span>
                  <span className="font-semibold text-[var(--sea-ink)]">{r.ms}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
