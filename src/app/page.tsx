// src/app/page.tsx
"use client"

import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Corporate background pattern overlay */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none opacity-40" />

      {/* Subtle professional dot pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Professional floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-navy/10 to-amber/10 rounded-full filter blur-3xl animate-corporate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-teal/10 to-maroon/10 rounded-full filter blur-3xl animate-corporate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-amber/5 to-gold/5 rounded-full filter blur-3xl animate-corporate-float animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}