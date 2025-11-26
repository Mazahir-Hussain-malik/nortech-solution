"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
    id: number
    quote: string
    author: string
    image: string
}

interface TestimonialSliderProps {
    testimonials: Testimonial[]
    autoSlideInterval?: number
}

export function TestimonialSlider({ testimonials, autoSlideInterval = 5000 }: TestimonialSliderProps) {
    const [current, setCurrent] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, autoSlideInterval)

        return () => clearInterval(interval)
    }, [isAutoPlay, testimonials.length, autoSlideInterval])

    const goToPrevious = () => {
        setIsAutoPlay(false)
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setIsAutoPlay(false)
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const testimonial = testimonials[current]

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row  items-center mt-4 gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="flex-1 w-full">
                    <div className="mb-12 lg:mb-6">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <hr className="border-3 w-10 border-orange-500" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#000000] mb-2">Testimonials</h2>
                        </div>
                        <p className="text-lg text-[#232323] font-semibold sm:text-3xl">
                            Client <span className="text-orange-500 font-semibold">Feedback</span> On Our Best Services
                        </p>
                    </div>
                    <div className="space-y-6">
                        {/* Quote */}
                        <blockquote className="text-sm text-[#686868] font-normal sm:text-base leading-relaxed">"{testimonial.quote}"</blockquote>
                        {/* Author */}
                        <p className="font-semibold text-foreground">{testimonial.author}</p>

                        {/* View More Button */}
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2 rounded-tl-[65px] rounded-br-[65px] cursor-pointer px-10 py-6 font-medium transition-colors duration-300 text-base">
                            View More
                            <span>→</span>
                        </Button>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={goToPrevious}
                                className="flex items-center justify-center w-10 h-10 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors cursor-pointer"
                                aria-label="Previous testimonial"
                            >
                                ←
                            </button>
                            <button
                                onClick={goToNext}
                                className="flex items-center justify-center w-10 h-10 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors cursor-pointer"
                                aria-label="Next testimonial"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-sm">
                        {/* Decorative curved border background */}
                        <div className="absolute inset-0 -m-4" />
                        {/* Main image with curve */}
                        <Image
                            width={300}
                            height={300}
                            src={testimonial.image || "/placeholder.svg?height=400&width=400&query=professional-testimonial"}
                            alt={testimonial.author}
                            className="relative rounded-[32px] bg-white w-full h-auto object-cover  "
                        />
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAutoPlay(false)
                            setCurrent(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-orange-500" : "bg-gray-300"}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
