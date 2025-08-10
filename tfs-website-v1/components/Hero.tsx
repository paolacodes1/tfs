'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Users, Award, Plane } from 'lucide-react'
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

  const stats = [
    { icon: MapPin, label: 'Acres Mapped', value: '10,000+', color: 'text-red-500' },
    { icon: Users, label: 'Happy Clients', value: '200+', color: 'text-blue-400' },
    { icon: Award, label: 'Years Experience', value: '5+', color: 'text-green-400' },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-bg opacity-50" />
      
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
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
                <div className="flex items-center space-x-2 text-red-500 font-medium">
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
                  Transform your agricultural operations with cutting-edge drone technology. 
                  Get accurate mapping, tree counts, and 3D terrain models for better farm management.
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

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* Right Content - Drone Visual */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Main Drone Container */}
                <div className="relative w-full h-96 flex items-center justify-center">
                  
                  {/* Glowing Background Circle */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-80 h-80 rounded-full bg-red-gradient opacity-20 blur-2xl"
                  />

                  {/* Drone Icon */}
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <div className="w-32 h-32 bg-red-gradient rounded-2xl flex items-center justify-center shadow-2xl">
                      <Plane className="w-16 h-16 text-white" />
                    </div>
                    
                    {/* Propeller Effects */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-1 bg-white/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 0.1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          top: i < 2 ? '-10px' : 'auto',
                          bottom: i >= 2 ? '-10px' : 'auto',
                          left: i % 2 === 0 ? '-15px' : 'auto',
                          right: i % 2 === 1 ? '-15px' : 'auto',
                          transformOrigin: i % 2 === 0 ? 'right center' : 'left center',
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Orbital Elements */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`orbital-${i}`}
                      className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-60"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        transformOrigin: `${120 + i * 40}px center`,
                      }}
                    />
                  ))}
                </div>

                {/* Feature Highlights */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
                    <div className="text-sm text-gray-300 text-center">
                      CAAM Licensed • High-Resolution • Real-time Data
                    </div>
                  </div>
                </motion.div>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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