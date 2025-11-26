"use client"

import { ProjectCard } from "./project-card"
import Image04 from "@/app/assets/image04.jpg"
import Image05 from "@/app/assets/image05.jpg"
const projects = [
  {
    image: Image04.src,
    alt: "NAVTTC classroom with students and NorthTech Skills branding",
    date: "August 23, 2023",
    title: "National Vocational and Technical Training Commission (NAVTTC)",
    description: "Nortech, in collaboration with NACTTAC Pakistan, offers 100% free courses",
  },
  {
    image: Image05.src,
    alt: "Nortech Local Initiative team gathering with community members",
    date: "August 23, 2023",
    title: "Nortech Local Initiative",
    description:
      "Nortech offers courses locally, empowering communities with essential tech and digital skills for a brighter future",
  },
]

export function ProjectsSection() {
  return (
    <section className="w-full py-16 px-4 md:py-16 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 text-balance">
            Our <span className="text-orange-500">Project</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            NorthTech Solution specializes in local, government, national, and international projects, providing
            innovative and scalable digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
