import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  image: string
  alt: string
  date: string
  title: string
  description: string
}

export function ProjectCard({ image, alt, date, title, description }: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden duration-300 ">
      {/* Image Container */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover group-hover:scale-95 transition-transform duration-300 rounded-tl-[65px] rounded-br-[65px]"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-sm bg-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs">📅</span>
          </div>
          <span className="text-[#555555] font-normal text-xs sm:text-sm md:text-base">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-[#232323] mb-3  line-clamp-2">{title}</h3>

        {/* Description */}
        <p className="text-[#555555] text-xs sm:text-sm md:text-base leading-relaxed flex-grow">{description}</p>

        {/* Read More Link */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="flex items-center gap-2 text-[#E97D26] font-normal hover:gap-3 transition-all duration-300 group/link cursor-pointer md:text-base sm:text-sm text-xs">
            Read More
            <ArrowRight className="md:w-4 w-3 md:h-4 h-3 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
