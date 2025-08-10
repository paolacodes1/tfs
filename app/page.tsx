import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container-center section-padding py-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-red-gradient rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <span className="text-white font-bold">TFS Aerial Solutions</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional aerial mapping for modern agriculture
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                CAAM Licensed UAV Pilots
              </p>
              <p className="text-white font-medium">+60183505268</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 TFS Aerial Solutions
              </p>
              <p className="text-gray-400 text-sm">
                A Tirama Foto Studios Company
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}