import { Snowflake, Ship, Camera, Trees, Wine, Utensils, Plane, Mountain } from 'lucide-react'

export default function Experiences() {
  const items = [
    { icon: Snowflake, title: 'Private Ski Lessons', desc: 'World-class instructors, off-piste guiding, and heli-skiing.' },
    { icon: Camera, title: 'Glacier Photography', desc: 'Sunrise treks to capture the alpenglow across peaks.' },
    { icon: Wine, title: 'Cellar Tastings', desc: 'Rare vintages and Swiss artisan cheeses in our cave.' },
    { icon: Trees, title: 'Forest Sauna Ritual', desc: 'Outdoor sauna and plunge with herbal infusions.' },
    { icon: Ship, title: 'Lake Luzern Cruise', desc: 'Scenic day trip with mountain rail and lunch on deck.' },
    { icon: Utensils, title: 'Chef’s Table', desc: 'Intimate counter dining with seasonal tasting menu.' },
    { icon: Plane, title: 'Heli Sightseeing', desc: 'Fly over glaciers and land for champagne on a ridge.' },
    { icon: Mountain, title: 'Via Ferrata', desc: 'Guided climbing routes with panoramic viewpoints.' },
  ]

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Curated experiences</h2>
          <p className="mt-3 text-gray-600">Elevate your stay with adventures crafted by our concierge.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-emerald-400/90 to-sky-500/90 text-white flex items-center justify-center">
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
