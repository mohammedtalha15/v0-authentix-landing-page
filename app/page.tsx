"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import MarketplacePreview from "@/components/marketplace-preview"
import CommunityCallout from "@/components/community-callout"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <HowItWorks />
      <MarketplacePreview />
      <CommunityCallout />
      <Footer />
    </main>
  )
}
