import {
  Building2,
  Cloud,
  CodeXml,
  HardDrive,
  Key,
  Laptop,
  Server,
  Shield,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export interface ServiceLink {
  to: string
  labelKey: string
  icon: LucideIcon
}

export interface ServiceCategory {
  titleKey: string
  icon: LucideIcon
  items: ServiceLink[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    titleKey: 'nav.megaMenu.softwareDev',
    icon: CodeXml,
    items: [
      { to: '/services/outsource', labelKey: 'nav.megaMenu.outsourcing', icon: CodeXml },
      { to: '/services/web-design', labelKey: 'nav.megaMenu.webDesign', icon: Laptop },
    ],
  },
  {
    titleKey: 'nav.megaMenu.cloudServer',
    icon: Cloud,
    items: [
      { to: '/services/vps', labelKey: 'nav.megaMenu.vps', icon: Server },
      { to: '/services/dedicated', labelKey: 'nav.megaMenu.dedicated', icon: HardDrive },
      { to: '/services/colocation', labelKey: 'nav.megaMenu.colocation', icon: Building2 },
    ],
  },
  {
    titleKey: 'nav.megaMenu.securityUtils',
    icon: Shield,
    items: [
      { to: '/services/anti-ddos', labelKey: 'nav.megaMenu.antiDdos', icon: Shield },
      { to: '/services/software-license', labelKey: 'nav.megaMenu.licenses', icon: Key },
    ],
  },
]
