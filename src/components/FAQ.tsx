import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[var(--line)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-transparent px-0 py-4 text-left text-sm font-semibold text-[var(--sea-ink)] transition hover:text-[var(--lagoon-deep)]"
      >
        <span>{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--sea-ink-soft)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y-0">
      {items.map((item, idx) => (
        <FAQAccordionItem key={idx} item={item} />
      ))}
    </div>
  )
}
