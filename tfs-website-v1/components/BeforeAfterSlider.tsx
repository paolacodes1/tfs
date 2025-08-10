'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchend', handleEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      className={`relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none ${className}`}
      style={{ userSelect: 'none' }}
    >
      {/* Before Image (Full width) */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-gray-700 bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        >
          {/* Placeholder for before image */}
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <p className="text-gray-300">Raw Aerial Photo</p>
            </div>
          </div>
        </div>
        
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 transition-all duration-100 ease-out"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="w-full h-full bg-gray-700 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        >
          {/* Placeholder for after image */}
          <div className="w-full h-full flex items-center justify-center bg-red-900/20">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
              <p className="text-white">Processed Map</p>
            </div>
          </div>
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 bg-red-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-100 ease-out"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-12 h-12 bg-white rounded-full shadow-xl border-2 border-red-500 
                     flex items-center justify-center cursor-col-resize
                     transition-all duration-200 hover:scale-110 hover:shadow-2xl
                     ${isDragging ? 'scale-110 shadow-2xl' : ''}
                     group`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <MoveHorizontal className="w-5 h-5 text-red-500 group-hover:text-red-600" />
          
          {/* Handle Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-red-500/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Top and Bottom Indicators */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-red-500" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-red-500" />
      </div>

      {/* Instructions Overlay (shown initially) */}
      {!isDragging && sliderPosition === 50 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
            <MoveHorizontal className="w-4 h-4" />
            <span>Drag to compare</span>
          </div>
        </motion.div>
      )}

      {/* Loading States */}
      <div className="absolute inset-0 bg-gray-800 animate-pulse" 
           style={{ display: 'none' }} />
    </motion.div>
  )
}