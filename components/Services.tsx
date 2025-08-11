'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Map, TreePine, Mountain, Box, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

const services = [
  {
    id: 1,
    icon: Map,
    title: 'Aerial Mapping',
    description: 'High-resolution aerial mapping for accurate, up-to-date farm maps including boundaries',
    features: [
      'Digital maps in PDF/GIS formats',
      'Clearly defined boundaries',
      'More precise than satellite imagery',
      'Survey-grade accuracy'
    ],
    beforeImage: '/images/aerial-raw.jpg',
    afterImage: '/images/aerial-mapped.jpg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    icon: TreePine,
    title: 'Tree Count & Yield Estimation',
    description: 'Aerial survey to count fruit trees with unique IDs and yield estimation',
    features: [
      'Individual tree identification',
      'Unique ID assignment',
      'Health assessment analysis',
      'Yield prediction reports'
    ],
    beforeImage: '/images/trees-raw.jpg',
    afterImage: '/images/trees-counted.jpg',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    icon: Mountain,
    title: 'Topography Mapping',
    description: 'Topographic maps with elevation data up to 5-meter increments',
    features: [
      'AutoCAD format compatibility',
      'Contour map generation',
      'Up to 5-meter elevation increments',
      'Slope analysis included'
    ],
    beforeImage: '/images/topo-raw.jpg',
    afterImage: '/images/topo-mapped.jpg',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 4,
    icon: Box,
    title: '3D Model',
    description: '3D farm model for terrain visualization, slope analysis, erosion detection and drainage model',
    features: [
      'Interactive 3D visualization',
      'Slope angle analysis',
      'Erosion-prone area detection',
      'Road planning assistance'
    ],
    beforeImage: '/images/3d-raw.jpg',
    afterImage: '/images/3d-model.jpg',
    color: 'from-orange-600 to-orange-800'
  },
  {
    id: 5,
    icon: RefreshCw,
    title: 'Repetitive Monitoring',
    description: 'Recurring aerial surveys to monitor changes in your farm over time',
    features: [
      'Regular farm monitoring',
      'Change detection analysis',
      'Boundary security checks',
      'Crop monitoring'
    ],
    beforeImage: '/images/monitor-before.jpg',
    afterImage: '/images/monitor-after.jpg',
    color: 'from-red-600 to-red-800'
  }
]

const additionalServices = [
  'Photogrammetry Mapping',
  'Boundary Mapping',
  '3D Site Digitization',
  'Facade Inspections',
  'Construction Progress',
  'Stockpile & Volume Calculation',
  'Aerial Photo & Videography',
  'As-built Comparison'
]

export default function Services() {
  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-center section-padding relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-red-gradient" />
            <span className="text-red-500 font-medium uppercase tracking-wider">Our Services</span>
            <div className="w-12 h-0.5 bg-red-gradient" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Professional Aerial
            <span className="text-gradient block">Mapping Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From precision mapping to 3D modeling, our CAAM-licensed pilots deliver 
            comprehensive aerial solutions for modern agriculture and land management.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div ref={servicesRef} className="space-y-32 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                
                {/* Service Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-red-gradient mt-2" />
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="btn-primary group w-full flex items-center justify-between">
                    <span>Get Quote for {service.title}</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Before/After Slider */}
                <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                  <BeforeAfterSlider
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                    beforeLabel="Raw Data"
                    afterLabel="Processed"
                    className="shadow-2xl"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-8">Additional Services</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gray-100 border border-gray-300 rounded-lg p-4 
                         hover:bg-gray-200 hover:border-red-500/50 transition-all duration-300
                         hover:shadow-lg hover:shadow-red-600/10"
              >
                <span className="text-gray-700 text-sm font-medium">{service}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-32"
          >
            <button className="btn-primary text-lg">
              Discuss Custom Requirements
            </button>
          </motion.div>
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 bg-gradient-to-r from-red-600/10 to-blue-600/10 rounded-2xl p-8 border border-red-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Our Guarantee</h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-4">
            Fast turnaround times: 5-7 working days for farms under 500 acres, 
            7-10 working days for larger farms. CAAM licensed pilots ensuring compliance and quality.
          </p>
          <p className="text-sm text-gray-400 italic">
            * Maps and models provided are for reference only and are not legally binding surveys.
          </p>
        </motion.div>
      </div>
    </section>
  )
}