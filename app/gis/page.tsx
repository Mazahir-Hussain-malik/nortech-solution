import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServicesSection } from "@/components/graphic-deisgn/services-section";

const GIS = () => {
    const trainingData = [
        {
            sr: "1.",
            partner: "National Vocational & Technical Training Commission",
            training: "Advance GIS",
            year: "2024/Batch-II (In Progress)",
        },
       
    ]
    const services = [
        {
            // icon: "🎨",
            title: "Logo Design",
            description: "Creating Unique And Memorable Brand Logos.",
        },
        {
            // icon: "🏢",
            title: "Business Card",
            description: "Designing Business Cards, Letterheads, And Envelopes.",
        },
        {
            // icon: "🎭",
            title: "Brand Identity Design",
            description: "Developing A Complete Visual Identity, Including Colors, Typography, And Branding Guidelines.",
        },
        {
            // icon: "📄",
            title: "Brochure & Flyer Design",
            description: "Creating Marketing Materials For Promotions And Events.",
        },
        {
            // icon: "📱",
            title: "Social Media Graphics",
            description: "Designing Posts, Banners, And Ads For Platforms Like Instagram, Facebook, And LinkedIn.",
        },
        {
            // icon: "📢",
            title: "Advertisement Design",
            description: "Creating Eye-Catching Ads For Digital And Print Media.",
        },
    ]
    return (
        <>
            <section className="bg-white py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                            <span className="relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[12px] before:bg-[#E97D26]">GEOGRAPHIC INFORMATION SYSTEM</span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <h2 className="text-2xl md:text-3xl font-bold text- text-[#3C3A3A] mb-6">
                        GIS TRAINING & SERVICES
                    </h2>

                    {/* Description */}
                    <div className="space-y-4 text-base md:text-lg text-foreground leading-relaxed max-w-4xl">
                        <p>
                            Nortech Solution Offers Top-Tier GIS (Geographic Information System) Services,Including
                            <span className="text-[#E97D26] font-semibold">Spatial Data Analysis</span>,{" "}
                            <span className="text-[#E97D26] font-semibold">Mapping Solution</span>,{" "}
                            <span className="text-[#E97D26] font-semibold">Remote Sensing</span>,{" "}
                            <span className="text-[#E97D26] font-semibold">Geosaptial Data Visualization</span>, And{" "}
                            <span className="text-[#E97D26] font-semibold">Geospatial Application Development </span>,We Have Successfully Trained 30+ Students, Equipping Them with the Latest GIS Technologies To enhance Decision Making And Solve Real-world Spatial Challenges.
                        </p>
                        
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-5 h-5">
                            <Image src="/bullet.png" className="w-full h-full" alt=" Solution" width={20} height={20} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">TRAINING</h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm md:text-base border-separate border-spacing-1 border border-gray-400 dark:border-gray-500">
                            <thead>
                                <tr className="bg-cyan-700 text-white">
                                    <th className="px-4 py-3 text-left font-semibold">Sr. No.</th>
                                    <th className="px-4 py-3 text-left font-semibold">Partner/Sponsored</th>
                                    <th className="px-4 py-3 text-left font-semibold">Training/Trade</th>
                                    <th className="px-4 py-3 text-left font-semibold">Year/Batch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingData.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white border-b border-border"}>
                                        <td className="px-4 py-3 font-semibold text-white text-center bg-cyan-700">{row.sr}</td>
                                        <td className="px-4 py-3">{row.partner}</td>
                                        <td className="px-4 py-3">{row.training}</td>
                                        <td className="px-4 py-3">{row.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <ServicesSection />
            </section>
        </>
    );
}
export default GIS;