'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Send, 
  Clock, 
  User, 
  MessageSquare,
  Building,
  Drone,
  Mail,
  Phone
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectSize: string
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
    projectSize: '',
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
        projectSize: '',
        services: [],
        message: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: '#',
      color: 'text-yellow-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
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
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Transform
            <span className="text-gradient block">Your Operations?</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get a free consultation and quote for your aerial mapping project.
            Our CAAM-licensed pilots are ready to help you make data-driven decisions for any industry.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-red-600/10 to-blue-600/10 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-red-500" />
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Top Row: Name, Email, Phone, Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                               text-black placeholder-gray-500 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                               text-black placeholder-gray-500 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                               text-black placeholder-gray-500 focus:border-red-500 focus:ring-2 
                               focus:ring-red-500/20 transition-colors"
                      placeholder="+60 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company/Project Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg
                               text-black placeholder-gray-500 focus:border-red-500 focus:ring-2
                               focus:ring-red-500/20 transition-colors"
                      placeholder="Your company/project name"
                    />
                  </div>
                </div>

                {/* Project Size and Services Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Size (acres)
                    </label>
                    <select
                      id="projectSize"
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg
                               text-black focus:border-red-500 focus:ring-2
                               focus:ring-red-500/20 transition-colors cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem',
                        appearance: 'none',
                        color: formData.projectSize ? '#000' : '#6b7280'
                      }}
                    >
                      <option value="">Select project size</option>
                      <option value="under-100">Under 100 acres</option>
                      <option value="100-500">100-500 acres</option>
                      <option value="500-1000">500-1,000 acres</option>
                      <option value="over-1000">Over 1,000 acres</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services Interested In
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2 cursor-pointer bg-white hover:bg-gray-100
                                   rounded-lg p-2 transition-colors text-sm border border-gray-300"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="w-4 h-4 text-red-600 bg-white border-gray-300 rounded
                                     focus:ring-red-500 focus:ring-2"
                          />
                          <span className="text-gray-700 text-xs leading-tight">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg 
                             text-black placeholder-gray-500 focus:border-red-500 focus:ring-2 
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
                    Thank you! We&apos;ll get back to you within 24 hours.
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

        </div>
      </div>
    </section>
  )
}