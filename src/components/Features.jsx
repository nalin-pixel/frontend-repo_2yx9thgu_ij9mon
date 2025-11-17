import { Bath, BedDouble, Wifi, Utensils, Car, Mountain, Snowflake, Trees } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: BedDouble, title: 'Elegant Suites', desc: 'Private terraces, heated floors, artisan linens' },
    { icon: Bath, title: 'Alpine Spa', desc: 'Infinity pool, hammam, snow room & glacier facials' },
    { icon: Utensils, title: 'Fine Dining', desc: 'Seasonal tasting menus & wine pairings' },
    { icon: Wifi, title: 'Seamless Wi‑Fi', desc: 'Ultra-fast fiber across the property' },
    { icon: Car, title: 'Private Transfer', desc: 'Helipad & chauffeured Range Rovers' },
    { icon: Mountain, title: 'Peak Access', desc: 'Ski concierge with lift tickets delivered' },
    { icon: Snowflake, title: 'Winter Sports', desc: 'Ski, snowboard, heli-ski, snowshoe' },
    { icon: Trees, title: 'Summer Escapes', desc: 'Hiking, biking, picnics, lake swims' },
  ]

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Signature amenities</h2>
          <p className="mt-3 text-gray-600">A sanctuary designed for alpine adventure and effortless relaxation.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-sky-500/90 to-emerald-400/90 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
