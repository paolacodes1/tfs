'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

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
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className={`relative w-full h-80 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 ${className}`}>
      {/* Before Image (Full) */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-600 rounded-lg mb-4 mx-auto" />
            <p className="text-gray-400 text-sm">{beforeLabel}</p>
            <p className="text-gray-500 text-xs mt-1">Placeholder Image</p>
          </div>
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{
          clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
        }}
      >
        <div className="w-full h-full bg-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-lg mb-4 mx-auto" />
            <p className="text-white text-sm">{afterLabel}</p>
            <p className="text-gray-300 text-xs mt-1">Processed Data</p>
          </div>
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider Handle */}
      <div 
        className="absolute top-1/2 w-8 h-8 bg-white rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2 z-20 cursor-pointer border-2 border-red-500"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-4 bg-red-500 rounded-full" />
        </div>
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
      />

      {/* Labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full"
      >
        <span className="text-white text-sm font-medium">{beforeLabel}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full"
      >
        <span className="text-white text-sm font-medium">{afterLabel}</span>
      </motion.div>

      {/* Drag instruction */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-xs">← Drag to compare →</span>
        </div>
      </motion.div>
    </div>
  )
}