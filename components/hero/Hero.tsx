"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05, boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)", transition: { duration: 0.3, ease: "easeInOut" } },
    tap: { scale: 0.95 },
  };

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-100 via-pink-50 to-white">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-orange-100/20"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[100vh]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="mx-auto w-full max-w-7xl min-h-[100vh]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side content */}
            <motion.div className="flex flex-col gap-6 sm:gap-8" variants={itemVariants}>
              {/* Welcome text */}
              <motion.div className="flex items-center gap-2" variants={itemVariants}>
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
                  Welcome to Nortech Solution
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance" variants={itemVariants}>
                <span className="text-gray-800">Transforming Ideas into </span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </motion.h1>

              {/* Description text */}
              <motion.p className="max-w-md text-base sm:text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
                We provide industry-leading digital courses with national & international certifications, equipping individuals for success in the digital era.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  className="group inline-flex items-center gap-2 rounded-bl-[30px] rounded-tr-[30px] bg-[#E97D26] px-8 py-3 sm:px-10 sm:py-4 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Us
                  <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={20} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right side image */}
            <motion.div className="relative h-96 sm:h-[450px] lg:h-[550px] flex items-center justify-center" variants={imageVariants}>
              {/* Glowing background */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-orange-400 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image container */}
              <motion.div className="relative rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Image src="/maskingheroimage.png" alt="VR Experience - Nortech Solution" width={700} height={700} className="sm:w-[600px] sm:h-[600px] w-full" priority />
              </motion.div>

              {/* Floating elements */}
              <motion.div className="absolute top-10 right-10 w-16 h-16 bg-blue-400 rounded-lg opacity-10 blur-xl"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div className="absolute bottom-20 left-5 w-20 h-20 bg-orange-400 rounded-full opacity-10 blur-xl"
                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Curved wave divider */}
      <motion.svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 200" preserveAspectRatio="none" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1, delay: 0.5 }}>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.1)" />
            <stop offset="50%" stopColor="rgba(249, 115, 22, 0.05)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0.1)" />
          </linearGradient>
        </defs>
        <motion.path d="M 0,100 Q 360,50 720,100 T 1440,100 L 1440,200 L 0,200 Z" fill="url(#waveGradient)"
          animate={{ d: [
            "M 0,100 Q 360,50 720,100 T 1440,100 L 1440,200 L 0,200 Z",
            "M 0,120 Q 360,60 720,120 T 1440,120 L 1440,200 L 0,200 Z",
            "M 0,100 Q 360,50 720,100 T 1440,100 L 1440,200 L 0,200 Z"
          ], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Bottom background */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}