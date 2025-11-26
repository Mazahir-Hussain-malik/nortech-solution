import { TestimonialSlider } from "./testimonial-slider"
import Slide_1_image from "@/app/assets/slider_2.png"
import bg from "@/app/assets/bg-testimonial.jpg";
const testimonials = [
    {
        id: 1,
        quote:
            "We appreciate the level of customization offered by your team. They listened to our requirements attentively and implemented them effectively. The solution aligns perfectly with our business processes and specific needs.",
        author: "Sarah Johnson - CEO",
        image: Slide_1_image.src,
    },
    {
        id: 2,
        quote:
            "Exceptional service and outstanding support. The team went above and beyond to ensure our success. We have seen tremendous growth since implementing their solution.",
        author: "Michael Chen - Project Manager",
        image: Slide_1_image.src,
    },
    {
        id: 3,
        quote:
            "Professional, reliable, and innovative. The entire experience was smooth from start to finish. I highly recommend their services to any organization.",
        author: "Emma Wilson - CTO",
        image: Slide_1_image.src,
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-16 lg:py-16 px-4 md:px-8 w-full bg-cover bg-center bg-gray-50"  style={{ backgroundImage: `url(${bg.src})` }}>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                {/* <div className="mb-12 lg:mb-6">
                    <div className="flex flex-row items-center gap-2 mb-2">
                        <hr className="border-3 w-10 border-orange-500"/>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#000000] mb-2">Testimonials</h2>
                    </div>
                    <p className="text-lg text-[#232323] font-semibold sm:text-3xl">
                        Client <span className="text-orange-500 font-semibold">Feedback</span> On Our Best Services
                    </p>
                </div> */}

                {/* Slider */}
                <TestimonialSlider testimonials={testimonials} autoSlideInterval={5000} />
            </div>
        </section>
    )
}
