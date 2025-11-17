import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <p className="text-white text-xl font-semibold">Alpine Haven</p>
            <p className="text-gray-400 mt-2">Swiss Alps</p>
            <p className="mt-4 text-sm text-gray-400">A modern sanctuary above the clouds. Crafted for seekers of quiet luxury and raw nature.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#rooms" className="hover:text-white">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-white">Amenities</a></li>
              <li><a href="#experiences" className="hover:text-white">Experiences</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 3920 Zermatt, Switzerland</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +41 00 000 00 00</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> stay@alpinehaven.ch</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Follow</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Alpine Haven. All rights reserved.</p>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
