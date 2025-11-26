"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ServiceCard from "./service-card"
import StatsCard from "./stats-card"
import IllustrationArt from "./illustration-art"
import React from "react"

interface Service {
  id: number
  label: string
  isHighlighted: boolean
}

interface Stat {
  number: string
  suffix: string
  label: string
}

const leftServices: Service[] = [
  { id: 1, label: "Studio Design", isHighlighted: true },
  { id: 2, label: "Web Development", isHighlighted: false },
  { id: 3, label: "UX", isHighlighted: false },
  { id: 4, label: "App Development", isHighlighted: false },
]

const rightServices: Service[] = [
  { id: 1, label: "E-Commerce", isHighlighted: false },
  { id: 2, label: "M2T", isHighlighted: false },
  { id: 3, label: "Digital Marketing", isHighlighted: false },
  { id: 4, label: "Resources", isHighlighted: false },
]

const stats: Stat[] = [
  { number: "60", suffix: "+", label: "Ongoing Project" },
  { number: "99", suffix: ".K", label: "Happy Customers" },
  { number: "10", suffix: "+", label: "Experienced Staff" },
  { number: "60", suffix: ".K", label: "Completed Project" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Curved blob background - top left */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/20 blur-3xl"></div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12 text-center md:mb-20">
          <h1 className="mb-4 inline-block text-4xl font-bold md:text-5xl">
            <span className="text-gray-900">Our</span>{" "}
            <span className="bg-clip-text text-[#E97D26]">Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            We provide top-notch Web & App Development, UI/UX Design, GIS Solutions, E-commerce Development,
            Digital Marketing, and Custom Software Solutions to help your business grow. Let&#44;s build something amazing
            together!
          </p>
        </motion.div>

        {/* Main Services Layout */}
        <motion.div
          variants={containerVariants}
          className="mb-16 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-3 md:gap-8 lg:gap-12"
        >
          {/* Left Services Column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {leftServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} position="left" />
            ))}
          </motion.div>

          {/* Center Illustration */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <IllustrationArt />
          </motion.div>

          {/* Right Services Column */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {rightServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} position="right" />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={containerVariants} className="border-t border-gray-200 pt-12 md:pt-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ServicesSection
