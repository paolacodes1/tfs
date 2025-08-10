'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="container-center section-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Get Your <span className="text-gradient">Free Quote</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to transform your farm management with aerial technology? Contact us today for a personalized consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-dark">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="text-gray-300">Ready to help you</p>
                </div>
              </div>
              <a href="tel:+60183505268" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
                +60 18 350 5268
              </a>
            </div>

            <div className="card-dark">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-300">Get a quote via email</p>
                </div>
              </div>
              <a href="mailto:adamgan@tiramafoto.com" className="text-xl text-red-500 hover:text-red-400 transition-colors">
                adamgan@tiramafoto.com
              </a>
            </div>

            <div className="card-dark">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">Service Area</h3>
                  <p className="text-gray-300">Malaysia-wide coverage</p>
                </div>
              </div>
              <p className="text-gray-300">
                Nationwide agricultural mapping services across Malaysia
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark bg-gradient-to-br from-red-900/20 to-gray-900"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Free consultation and quote</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">CAAM licensed professional pilots</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">High-resolution survey-grade results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Fast turnaround time</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+60183505268"
                className="btn-primary w-full text-center block text-lg py-4"
              >
                Call Now: +60 18 350 5268
              </a>
              <a
                href="mailto:adamgan@tiramafoto.com"
                className="btn-secondary w-full text-center block text-lg py-4"
              >
                Send Email
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-center">
                A Tirama Foto Studios Company
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}