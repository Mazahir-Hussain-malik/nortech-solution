"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface Stat {
  number: string
  suffix: string
  label: string
}

interface StatsCardProps {
  stat: Stat
  index: number
}

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
}

export default function StatsCard({ stat, index }: StatsCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (!inView) return

    let currentNumber = 0
    const targetNumber = parseInt(stat.number)
    const increment = Math.ceil(targetNumber / 50)
    let timeoutId: number

    const animate = () => {
      currentNumber += increment
      if (currentNumber > targetNumber) currentNumber = targetNumber
      setDisplayNumber(currentNumber)
      if (currentNumber < targetNumber) {
        timeoutId = window.setTimeout(animate, 30)
      }
    }

    animate()

    return () => clearTimeout(timeoutId)
  }, [inView, stat.number])

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={statVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -4 }}
      className="group rounded-lg bg-white p-6 text-center transition-all duration-300 md:p-8"
    >
      <motion.div className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl" whileHover={{ scale: 1.1 }}>
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          {displayNumber}
        </span>
        <span className="ml-1 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          {stat.suffix}
        </span>
      </motion.div>
      <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900 md:text-base">
        {stat.label}
      </p>
    </motion.div>
  )
}
