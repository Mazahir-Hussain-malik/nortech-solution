"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import React from "react"

export const GraphicDesignSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  const highlightVariants: Variants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main heading with underline */}
        <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">GRAPHIC DESIGN</h1>
            <motion.div
              className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"
              variants={highlightVariants}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance"
          variants={itemVariants}
        >
          PROFESSIONAL GRAPHIC DESIGN SERVICES & TRAINING
        </motion.h2>

        {/* Description with highlighted links */}
        <motion.div className="space-y-4 mb-12" variants={itemVariants}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At Nortech, We Provide Top-Notch Graphic Design Services And Expert-Led Training. Using Industry-Standard
            Tools Like{" "}
            <span className="font-semibold text-orange-600">Adobe Illustrator, Photoshop, CorelDRAW, Figma,</span> And{" "}
            <span className="font-semibold text-orange-600">Canva</span>, We Craft Stunning Visuals And Empower Students
            With Real-World Skills.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-orange-600">100+ Students</span> Trained And Counting—Join Us To Learn,
            Create, And Succeed!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
