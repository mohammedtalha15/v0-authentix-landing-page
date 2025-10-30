"use client"

import { BookOpen, Shirt, Apple } from "lucide-react"

export default function MarketplacePreview() {
  const listings = [
    {
      icon: BookOpen,
      title: "Looking for Books",
      description: "Need educational materials for my kids",
      category: "Books",
    },
    {
      icon: Shirt,
      title: "Offering Clothes",
      description: "Gently used winter clothing available",
      category: "Clothes",
    },
    {
      icon: Apple,
      title: "Seeking Food Support",
      description: "Help needed for weekly groceries",
      category: "Food",
    },
    {
      icon: BookOpen,
      title: "Donating Textbooks",
      description: "College textbooks in great condition",
      category: "Books",
    },
    {
      icon: Shirt,
      title: "Kids Clothing Drive",
      description: "Collecting clothes for local families",
      category: "Clothes",
    },
    {
      icon: Apple,
      title: "Community Food Bank",
      description: "Organizing food donations weekly",
      category: "Food",
    },
  ]

  return (
    <section id="marketplace" className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Marketplace Preview</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Explore real listings from our community members
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((listing, index) => {
            const Icon = listing.icon
            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-orange-500 mb-2">
                  {listing.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{listing.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{listing.description}</p>
                <button className="text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors">
                  View More →
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
