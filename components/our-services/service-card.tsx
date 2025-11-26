"use client"

import { motion, Variants } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Service {
  id: number
  label: string
  isHighlighted: boolean
}

interface ServiceCardProps {
  service: Service
  index: number
  position: "left" | "right"
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
  hover: { x: 8 },
}

export default function ServiceCard({ service, index, position }: ServiceCardProps) {
  const baseButtonClasses =
    "w-[294px] h-[55px] shadow-xl border border-[#00000024] rounded-tr-[30px] rounded-bl-[30px] transition-all ease-in-out delay-150"

  if (service.isHighlighted) {
    return (
      <motion.div custom={index} variants={cardVariants} whileHover="hover" className="group relative">
        <button className={`${baseButtonClasses} bg-[#E97D26] text-white hover:bg-[#17568D]`}>
          {service.label}
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div custom={index} variants={cardVariants} whileHover="hover" className="group">
      <motion.div
        whileHover={{ x: 4 }}
        className={`flex w-full items-center justify-between px-2 py-2 text-sm font-medium text-gray-700 transition-all duration-300 md:text-base ${
          position === "left" ? "text-left" : "text-right"
        }`}
      >
        <button
          className={`${baseButtonClasses} text-[#000] hover:text-white hover:bg-[#17568D]`}
        >
          {service.label}
        </button>
      </motion.div>
    </motion.div>
  )
}
