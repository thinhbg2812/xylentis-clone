import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
}

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="glass-card-hover rounded-xl"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.08, ease: 'linear' }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left font-semibold text-[var(--sea-ink)] transition hover:text-[var(--lagoon-deep)]"
      >
        <span className="text-base">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-[var(--sea-ink-soft)]" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
          {item.a}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <FAQAccordionItem key={idx} item={item} index={idx} />
      ))}
    </div>
  )
}
