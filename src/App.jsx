import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Rooms from './components/Rooms'
import Experiences from './components/Experiences'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Features />
        <Experiences />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
