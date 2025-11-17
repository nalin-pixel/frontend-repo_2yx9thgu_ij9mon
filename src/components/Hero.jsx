import { motion } from 'framer-motion'
import { Mountain, Star, Snowflake, Compass } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Luxury retreat in the heart of the Swiss Alps
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg/7 text-white/90 max-w-xl"
            >
              Wake up to panoramic peaks, Michelin-crafted cuisine, and spa rituals inspired by alpine nature.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-medium shadow hover:shadow-md">
                <Star className="h-5 w-5 text-amber-500" /> Reserve your stay
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-3 rounded-xl font-medium text-white border border-white/30 hover:bg-white/20">
                <Mountain className="h-5 w-5" /> Explore the hotel
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid grid-cols-2 gap-4 max-w-xl"
            >
              {[
                { icon: Snowflake, text: 'Ski-in, ski-out access' },
                { icon: Star, text: 'Gault Millau dining' },
                { icon: Compass, text: 'Heli-sightseeing tours' },
                { icon: Mountain, text: 'Panoramic infinity spa' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-white" />
                  <span className="text-white/90">{text}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:justify-self-end w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1543351611-58f69d2a1836?q=80&w=1600&auto=format&fit=crop"
                alt="Swiss Alps luxury hotel"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,74.7C672,53,768,43,864,37.3C960,32,1056,32,1152,53.3C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </section>
  )
}
