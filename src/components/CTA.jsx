export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-tr from-sky-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200/60 bg-white/70 backdrop-blur p-10 md:p-14 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Plan your alpine escape</h3>
            <p className="mt-2 text-gray-600">Speak to our reservations team. We’ll tailor every detail.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full md:w-auto">
            <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-300" required />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-300" required />
            <input type="date" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-300" />
            <button className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800">Request dates</button>
          </form>
        </div>
      </div>
    </section>
  )
}
