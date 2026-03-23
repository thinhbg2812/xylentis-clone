import { createFileRoute } from '@tanstack/react-router'
import ContactSales from '../../components/ContactSales'
import BannerSection from '../../components/sections/BannerSection'
import ContactSection from '../../components/sections/ContactSection'
import CTASection from '../../components/sections/CTASection'
import FAQSection from '../../components/sections/FAQSection'
import PlatformSection from '../../components/sections/PlatformSection'
import ServicesSection from '../../components/sections/ServicesSection'
import TrustedBySection from '../../components/sections/TrustedBySection'
import WhyUsSection from '../../components/sections/WhyUsSection'

export const Route = createFileRoute('/$lang/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <main>
        <BannerSection />
        <ServicesSection />
        <WhyUsSection />
        <PlatformSection />
        <TrustedBySection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <ContactSales />
    </>
  )
}
