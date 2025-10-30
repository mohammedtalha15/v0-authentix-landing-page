"use client"

export default function CommunityCallout() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-orange-600/10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Together, We Make a Difference.</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Every small act counts. Join a growing community of changemakers dedicated to helping one another and building
          a more compassionate world.
        </p>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg uppercase tracking-wide hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
          Join Authentix Today
        </button>
      </div>
    </section>
  )
}
