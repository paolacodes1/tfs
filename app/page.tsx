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
                <span className="text-white font-bold">TFS Aerial Solutions</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional aerial mapping for modern agriculture
              </p>
            </div>
            
            <div className="text-center">
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