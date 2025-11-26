"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import React from "react"

const floatingVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const rotateVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
}

const IllustrationArt: React.FC = () => {
  return (
    <motion.div
      className="relative h-64 w-full max-w-sm md:h-96 md:max-w-md"
      variants={floatingVariants}
      animate="animate"
    >
      <Image
        src="/feature.png"
        alt="feature image"
        width={600}
        height={600}
        priority
      />
    </motion.div>
  )
}

export default IllustrationArt
