import { cn } from "#/lib/utils"

interface CloudBadgeProps {
  text: string
  className?: string
}

export default function CloudBadge({ text, className = 'w-[160px] h-auto' }: CloudBadgeProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={cn(className,
        'drop-shadow-md dark:drop-shadow-[0_4px_12px_rgba(56,189,248,0.3)]')}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 55c11 0 20-7 20-16s-9-16-20-16c-1.5 0-3 .2-4.5.5C152 10 138 0 120 0c-15 0-28 7-35 18-3-1.5-6.5-2.5-10-2.5-13 0-24 9-24 20 0 .8 0 1.5.1 2.3C40 40 32 48 32 58c0 8 7 14 16 14h112c11 0 20-7.5 20-17z"
        className="fill-sky-300 dark:fill-sky-400"
      />
      <text
        x="100"
        y="52"
        textAnchor="middle"
        className="fill-slate-700 dark:fill-white"
        style={{ fontSize: '11px', fontWeight: 'bold' }}
      >
        {text}
      </text>
    </svg>
  )
}
