import { createFileRoute } from '@tanstack/react-router'
import i18n from '../i18n'
import ContactSales from '../components/ContactSales'
import BannerSection from '../components/sections/BannerSection'
import ContactSection from '../components/sections/ContactSection'
import CTASection from '../components/sections/CTASection'
import FAQSection from '../components/sections/FAQSection'
import PlatformSection from '../components/sections/PlatformSection'
import ServicesSection from '../components/sections/ServicesSection'
import TrustedBySection from '../components/sections/TrustedBySection'
import WhyUsSection from '../components/sections/WhyUsSection'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    // EN is the default — set language synchronously before render
    if (i18n.language !== 'en') {
      i18n.changeLanguage('en')
    }
  },
  component: HomePage,
})

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
