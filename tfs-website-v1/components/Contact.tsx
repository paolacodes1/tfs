'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  User, 
  MessageSquare,
  Building,
  Plane
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  farmSize: string
  services: string[]
  message: string
}

const serviceOptions = [
  'Aerial Mapping',
  'Tree Count & Yield Estimation', 
  'Topography Mapping',
  '3D Modeling',
  'Repetitive Monitoring',
  'Other Services'
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    farmSize: '',
    services: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        farmSize: '',
        services: [],
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+60183505268',
      link: 'tel:+60183505268',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'adamgan@tiramafoto.com',
      link: 'mailto:adamgan@tiramafoto.com',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '2.01C Menara BRDB, Jalan Maarof, 59000, Kuala Lumpur',
      link: '#',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: '#',
      color: 'text-yellow-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="container-center section-padding relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-red-gradient" />
            <span className="text-red-500 font-medium uppercase tracking-wider">Get In Touch</span>
            <div className="w-12 h-0.5 bg-red-gradient" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform
            <span className="text-gradient block">Your Farm Operations?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free consultation and quote for your aerial mapping project. 
            Our CAAM-licensed pilots are ready to help you make data-driven decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-dark">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-red-500" />
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="+60 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company/Farm Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="Your farm/company name"
                    />
                  </div>
                </div>

                {/* Farm Size */}
                <div>
                  <label htmlFor="farmSize" className="block text-sm font-medium text-gray-300 mb-2">
                    Farm Size (acres)
                  </label>
                  <select
                    id="farmSize"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                             text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 
                             transition-colors"
                  >
                    <option value="">Select farm size</option>
                    <option value="under-100">Under 100 acres</option>
                    <option value="100-500">100-500 acres</option>
                    <option value="500-1000">500-1,000 acres</option>
                    <option value="over-1000">Over 1,000 acres</option>
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map(service => (
                      <label key={service} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-red-500 bg-gray-800 border-gray-600 rounded 
                                   focus:ring-red-500 focus:ring-2"
                        />
                        <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 
                             focus:ring-red-500/20 transition-colors resize-none"
                    placeholder="Tell us more about your project requirements, timeline, or any specific questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-5 h-5" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-center"
                  >
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-center"
                  >
                    Something went wrong. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <a
                      href={info.link}
                      className="block p-6 bg-gray-800/50 border border-gray-700 rounded-xl 
                               hover:bg-gray-700/50 hover:border-red-500/50 transition-all duration-300
                               hover:shadow-lg hover:shadow-red-600/10 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gray-700 rounded-lg ${info.color} group-hover:bg-gray-600 transition-colors`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{info.content}</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )
              })}
            </div>

            {/* Company Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="card-dark"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-gradient rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TFS Aerial Solutions</h3>
                  <p className="text-gray-400 text-sm">A Tirama Foto Studios Company</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Operations Manager:</span>
                  <span className="text-white">Adam Gan</span>
                </div>
                <div className="flex justify-between">
                  <span>License:</span>
                  <span className="text-white">CAAM Licensed UAV Pilot</span>
                </div>
                <div className="flex justify-between">
                  <span>Coverage:</span>
                  <span className="text-white">3-500 acres per day</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
                <p className="text-sm text-red-300 font-medium text-center">
                  Fast Turnaround: 5-7 days for farms under 500 acres
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}