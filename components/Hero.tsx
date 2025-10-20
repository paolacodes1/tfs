'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Plane } from 'lucide-react'
import { smoothScrollTo } from '@/lib/utils'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])


  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/tfs/drone_palms.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
      
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="container-center section-padding w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-white font-medium">
                  <div className="w-12 h-0.5 bg-red-gradient" />
                  <span>CAAM Licensed UAV Pilots</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Precision</span>
                  <br />
                  <span className="text-gradient hero-glow text-shadow-glow">
                    Aerial Mapping
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Transform your operations with cutting-edge drone technology.
                  From farms to construction sites, mines to buildings—get accurate mapping, analysis, and 3D terrain models.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => smoothScrollTo('contact')}
                  className="btn-primary text-lg px-8 py-4 hover:shadow-xl hover:shadow-red-600/25"
                >
                  Get Free Quote
                </button>
                <button
                  onClick={() => smoothScrollTo('services')}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View Services
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <button
          onClick={() => smoothScrollTo('services')}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="group-hover:text-red-500 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}