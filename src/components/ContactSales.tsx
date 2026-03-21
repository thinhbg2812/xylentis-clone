import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactSales() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {expanded && (
        <div className="island-shell rounded-2xl p-4 shadow-xl">
          <p className="mb-2 text-sm font-semibold text-[var(--sea-ink)]">
            Chat with us!
          </p>
          <a
            href="mailto:contact@xylentis.com"
            className="btn-primary text-xs"
          >
            Contact Sales
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex h-12 w-12 items-center justify-center  bg-gradient-to-br from-[var(--brand-600)] to-[var(--brand-500)] text-white shadow-lg shadow-blue-500/25 transition hover:scale-105 hover:shadow-xl"
        aria-label="Contact Sales"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </div>
  )
}
