import { useState } from 'react'
import { Menu, X, Snowflake, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#rooms', label: 'Rooms' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center shadow-inner">
              <Snowflake className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">Alpine Haven</p>
              <p className="text-xs text-gray-600">Swiss Alps</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+41000000000" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4" /> +41 00 000 00 00
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <MapPin className="h-4 w-4" /> Book Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 text-gray-700">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg text-gray-700 hover:bg-white">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg">
                <MapPin className="h-4 w-4" /> Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
