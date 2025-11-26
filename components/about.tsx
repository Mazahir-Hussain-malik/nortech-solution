import Image from "next/image"
import Image01 from "@/app/assets/image01.jpg"
import Image02 from "@/app/assets/image02.jpg"
import Image03 from "@/app/assets/image03.jpg"
import bg from "@/app/assets/bg-testimonial.jpg";
export function AboutSection() {
    return (
        <section className="w-full py-16 px-4 md:py-24 md:px-8 bg-white  w-full bg-cover bg-center bg-gray-50"  style={{ backgroundImage: `url(${bg.src})` }} >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#000]">
                        About <span className="text-orange-500">Nortech</span>
                    </h1>
                    <p className="text-gray-600 sm:text-lg text-sm max-w-4xl mx-auto leading-relaxed">
                        Nortech Solution is a leading software company dedicated to training students in digital skills with
                        national and international certifications, preparing them for global career opportunities.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full gap-6">
                    {/* Global Presence - Large card on left */}
                    <div className="">
                        <div className="relative h-full min-h-80 md:min-h-96 overflow-hidden group cursor-pointer">
                            <Image
                                src={Image03}
                                alt="Global Presence - Digital globe showing worldwide network"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white md:text-xl sm:text-lg text-base font-bold mb-2">Global Presence</h3>
                                <p className="text-gray-200 sm:text-sm text-xs">A Strong Global Footprint with Local Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-rows-2 gap-4">
                        <div className="relative h-80 overflow-hidden group cursor-pointer">
                            <Image
                                src={Image02}
                                alt="Mission & Vision - Modern corporate campus with green spaces"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white md:text-xl sm:text-lg text-base font-bold mb-1">Mission & Vision</h3>
                                <p className="text-gray-200 sm:text-sm text-xs">Empowering Global Leaders with Innovation</p>
                            </div>
                        </div>
                        <div className="relative h-80 overflow-hidden group cursor-pointer">
                            <Image
                                src={Image01}
                                alt="Our Trainers - Professional trainers collaborating in modern office"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white md:text-xl sm:text-lg text-base font-bold mb-1">Our Trainers</h3>
                                <p className="text-gray-200 sm:text-sm text-xs">We're Behind the Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
