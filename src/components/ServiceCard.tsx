import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  iconGradient?: string
}

export default function ServiceCard({ icon, title, description, iconGradient = 'from-brand-600 to-brand-500' }: ServiceCardProps) {
  return (
    <article className="glass-card-hover relative p-8 h-full">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${iconGradient} shadow-lg text-white [&>svg]:w-7 [&>svg]:h-7`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-[var(--sea-ink-soft)] leading-relaxed m-0 text-sm">
        {description}
      </p>
      
      {/* Corner glow effect on hover */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div className={`absolute -top-10 -right-10 w-20 h-20 rotate-45 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${iconGradient}`}></div>
      </div>
    </article>
  )
}
