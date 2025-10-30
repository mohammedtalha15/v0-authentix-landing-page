"use client"
import Link from "next/link"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
            AUTHENTIX
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#marketplace"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="#listings"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Listings
          </Link>
        </div>

        {/* Right Side - Login/Signup */}
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
          Login / Signup
        </button>
      </div>
    </nav>
  )
}
