"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left */}
          <div className="text-sm text-gray-400">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">
              AUTHENTIX
            </span>{" "}
            © 2025
          </div>

          {/* Center */}
          <div className="flex justify-center gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Right */}
          <div className="text-sm text-gray-400 text-right">
            Built with <span className="text-red-500">❤️</span> for a better world.
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>Connecting hearts. Empowering help. Making a difference together.</p>
        </div>
      </div>
    </footer>
  )
}
