import { useState } from 'react'
import { ChevronLeft, ChevronRight, BedDouble, Bath, Ruler } from 'lucide-react'

const rooms = [
  {
    name: 'Panorama Suite',
    img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    size: '95 m²',
    beds: 'King',
    bath: 'Rainfall shower & tub',
    desc: 'Floor-to-ceiling windows with sweeping alpine vistas and private terrace.'
  },
  {
    name: 'Alpine Residence',
    img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop',
    size: '130 m²',
    beds: '2 King',
    bath: 'Twin marble bathrooms',
    desc: 'Two bedrooms, fireplace lounge, and butler service for families or friends.'
  },
  {
    name: 'Spa Loft',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    size: '70 m²',
    beds: 'King',
    bath: 'Steam shower',
    desc: 'Split-level loft with in-room sauna and freestanding stone tub.'
  }
]

export default function Rooms() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + rooms.length) % rooms.length)
  const next = () => setIndex((i) => (i + 1) % rooms.length)

  const room = rooms[index]

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Signature rooms & suites</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Curated spaces blending modern design with alpine warmth.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={prev} className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
            <img src={room.img} alt={room.name} className="h-[420px] w-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{room.name}</h3>
            <p className="mt-3 text-gray-600">{room.desc}</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border p-4 bg-white flex items-center gap-2">
                <Ruler className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Size</p>
                  <p className="font-medium">{room.size}</p>
                </div>
              </div>
              <div className="rounded-xl border p-4 bg-white flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Beds</p>
                  <p className="font-medium">{room.beds}</p>
                </div>
              </div>
              <div className="rounded-xl border p-4 bg-white flex items-center gap-2">
                <Bath className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Bath</p>
                  <p className="font-medium">{room.bath}</p>
                </div>
              </div>
            </div>
            <div className="sm:hidden mt-6 flex gap-2">
              <button onClick={prev} className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
