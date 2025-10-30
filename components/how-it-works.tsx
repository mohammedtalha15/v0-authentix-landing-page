"use client"

import { Gift, Users, Zap } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Gift,
      title: "Post what you need or can offer.",
      description: "Share your needs or offerings with our community.",
    },
    {
      icon: Users,
      title: "Connect with helpers or those in need.",
      description: "Find meaningful connections and build relationships.",
    },
    {
      icon: Zap,
      title: "Earn karma points for your contributions.",
      description: "Get rewarded for helping others in the community.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:bg-white/5 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
              >
                <div className="mb-6 inline-block p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
