"use client";

import { ServicesSection } from "@/components/graphic-deisgn/services-section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  const trainingData = [
    {
      sr: "1.",
      partner: "The Guider School and College, Danyore",
      training: "Weh Development",
      year: "2023/Batch-I",
    },
  ];
  return (
    <main className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Main Heading Section */}
        <motion.div {...fadeInUp} className="mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Digital Marketing</h1>
          <div className="w-24 h-1 bg-orange-500"></div>
        </motion.div>

        {/* Subheading and Description */}
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Digital Marketing TRAINING & Services
          </h2>

          <p className="text-base text-gray-700 leading-7 mb-6">
            Nortech Solution offers comprehensive Digital Marketing services, including SEO, social media marketing, content creation, email marketing, paid advertising, and analytics. We help businesses build a strong online presence, increase brand visibility, and drive targeted traffic for growth.
          </p>
            <p className="text-base text-gray-700 leading-7 mb-6">
         Additionally, we provide Digital Marketing training, equipping 30+ students with the latest strategies and tools in SEO, SEM, social media campaigns, and digital analytics to ensure they can effectively manage and optimize digital marketing efforts for businesses.
          </p>
        </motion.div>

        <section className="bg-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-5 h-5">
                <Image
                  src="/bullet.png"
                  className="w-full h-full"
                  alt=" Solution"
                  width={20}
                  height={20}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                TRAINING
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-separate border-spacing-1 border border-gray-400 dark:border-gray-500">
                <thead>
                  <tr className="bg-cyan-700 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      Sr. No.
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      National Vocational & Technical Training Commision
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Digital Marketting</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      2024/Batch-II (in progress)
                    </th>
                  </tr>
                </thead>
                <tbody>{/* tbale body and data is here */}</tbody>
              </table>
            </div>
          </div>
        </section>
        <div>
          <ServicesSection />
        </div>
      </div>
    </main>
  );
}
