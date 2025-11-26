"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import React from "react"

interface Service {
  icon: string
  title: string
  description: string
}

export const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  const services: Service[] = [
    {
      icon: "📐",
      title: "Logo Design",
      description: "Creating Unique And Memorable Brand Logos.",
    },
    {
      icon: "🎨",
      title: "Brand Identity Design",
      description: "Developing A Complete Visual Identity, Including Colors, Typography, And Branding Guidelines.",
    },
    {
      icon: "📱",
      title: "Social Media Graphics",
      description: "Designing Posts, Banners, And Ads For Platforms Like Instagram, Facebook, And LinkedIn.",
    },
    {
      icon: "💼",
      title: "Business Card",
      description: "Designing Business Cards, Letterheads, And Envelopes.",
    },
    {
      icon: "📄",
      title: "Brochure & Flyer Design",
      description: "Creating Marketing Materials For Promotions And Events.",
    },
    {
      icon: "📢",
      title: "Advertisement Design",
      description: "Creating Eye-Catching Ads For Digital And Print Media.",
    },
  ]

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section heading */}
        <motion.div className="flex items-center gap-3 mb-12 sm:mb-16" variants={itemVariants}>
          <div className="w-4 h-4 rounded-full bg-orange-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">SERVICES</h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group rounded-lg border border-gray-200 p-6 sm:p-8 hover:border-orange-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Icon with circle background */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-500 mb-4 text-xl group-hover:bg-orange-50 transition-colors">
                {service.icon}
              </div>

              {/* Service title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

              {/* Service description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-lg text-gray-700 mb-6">Join Us For Our Services.</p>
          <motion.button
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#E97D26] text-gray-900 font-semibold rounded-bl-[30px] rounded-tr-[30px] hover:bg-orange-50 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(234, 88, 12, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight size={20} className="text-orange-600" />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
