'use client'

import { motion } from 'framer-motion'
import { Map, TreePine, Mountain, CheckCircle } from 'lucide-react'

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
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    icon: TreePine,
    title: 'Tree Count & Yield Estimation',
    description: 'Aerial survey to count fruit trees with unique IDs and yield estimation',
    features: [
      'Individual tree identification',
      'Yield forecasting',
      'Health assessment',
      'Growth tracking'
    ],
    color: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    icon: Mountain,
    title: '3D Terrain Modeling',
    description: 'Detailed 3D models for terrain analysis and planning',
    features: [
      'Digital elevation models',
      'Contour mapping',
      'Volume calculations',
      'Topographical analysis'
    ],
    color: 'from-purple-600 to-purple-800'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container-center section-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional aerial mapping solutions for modern agriculture and land management
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-dark group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}