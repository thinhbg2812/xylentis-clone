import { useTranslation } from 'react-i18next'
import { Server, HardDrive, Cloud, Shield, Database, Globe, Code, TrendingUp } from 'lucide-react'
import ServiceCard from '../ServiceCard'

const serviceIcons: Record<string, React.ReactNode> = {
  vps: <Server className="h-5 w-5" />,
  dedicated: <HardDrive className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  antiDdos: <Shield className="h-5 w-5" />,
  backup: <Database className="h-5 w-5" />,
  cdn: <Globe className="h-5 w-5" />,
  outsourcing: <Code className="h-5 w-5" />,
  seo: <TrendingUp className="h-5 w-5" />,
}

const serviceKeys = ['vps', 'dedicated', 'cloud', 'antiDdos', 'backup', 'cdn', 'outsourcing', 'seo']

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="flex min-h-[90vh] items-center px-4 py-16">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="island-kicker mb-2">{t('services.kicker')}</p>
          <h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="text-[var(--sea-ink-soft)]">{t('services.subtitle')}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceKeys.map((key, idx) => (
            <div key={key} className="rise-in" style={{ animationDelay: `${idx * 80}ms` }}>
              <ServiceCard
                icon={serviceIcons[key]}
                title={t(`services.items.${key}.title`)}
                description={t(`services.items.${key}.desc`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
