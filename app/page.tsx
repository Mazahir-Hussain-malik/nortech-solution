import { AboutSection } from "@/components/about";
import {Hero} from "@/components/hero/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectsSection } from "@/components/our-projects/projects-section";
import ServicesSection from "@/components/our-services/service-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-[#FFFFFF] font-sans">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection /> 
    </div>
  );
}
