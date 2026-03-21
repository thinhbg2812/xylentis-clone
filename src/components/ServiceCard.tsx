import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="island-shell feature-card group rounded-2xl border border-[var(--line)] p-5 transition-all duration-200">
      <div className="mb-3 inline-flex rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] p-2.5 text-[var(--lagoon-deep)] transition group-hover:border-[var(--lagoon-deep)] group-hover:text-[var(--lagoon)]">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="m-0 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}
