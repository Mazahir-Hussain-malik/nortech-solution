"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import React from "react"

interface TrainingData {
  sNo: string
  partner: string
  training: string
  batch: string
}

export const TrainingSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const trainingData: TrainingData[] = [
    {
      sNo: "1.",
      partner: "National Vocational & Technical Training Commission",
      training: "Certificate in IT Web Graphic & Mobile App Development",
      batch: "2021/Batch-II",
    },
    {
      sNo: "2.",
      partner: "National Vocational & Technical Training Commission",
      training: "Computer Graphics & Video Editing",
      batch: "2021/Batch-II",
    },
    {
      sNo: "3.",
      partner: "National Vocational & Technical Training Commission",
      training: "Graphic Designing  (UI/UX Designer)",
      batch: "2022/Batch-III (C-I)",
    },
    {
      sNo: "4.",
      partner: "National Vocational & Technical Training Commission",
      training: "Graphic Designing  (UI/UX Designer)",
      batch: "2022/Batch-III (C-II)",
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
        <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
          <div className="w-4 h-4 rounded-full bg-orange-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">TRAINING</h2>
        </motion.div>

        {/* Table wrapper */}
        <motion.div className="overflow-x-auto" variants={itemVariants}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-teal-700 to-teal-800">
                <th className="px-4 py-4 text-left text-white font-semibold text-sm sm:text-base">Sr. No.</th>
                <th className="px-4 py-4 text-left text-white font-semibold text-sm sm:text-base">Partner/Sponsored</th>
                <th className="px-4 py-4 text-left text-white font-semibold text-sm sm:text-base">Training/Trade</th>
                <th className="px-4 py-4 text-left text-white font-semibold text-sm sm:text-base">Year/Batch</th>
              </tr>
            </thead>
            <tbody>
              {trainingData.map((row, index) => (
                <motion.tr
                  key={index}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}
                  variants={rowVariants}
                  whileHover={{ x: 4 }}
                >
                  <td className="px-4 py-4 text-gray-900 font-semibold text-sm sm:text-base">{row.sNo}</td>
                  <td className="px-4 py-4 text-gray-700 text-sm sm:text-base">{row.partner}</td>
                  <td className="px-4 py-4 text-gray-700 text-sm sm:text-base">{row.training}</td>
                  <td className="px-4 py-4 text-gray-700 text-sm sm:text-base">{row.batch}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  )
}
