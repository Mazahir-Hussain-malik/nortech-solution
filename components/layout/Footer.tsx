import Logo from "@/app/assets/logo.png"
import Image from "next/image";
import { Facebook, AtSign, Linkedin, Twitter } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-[#D9D9D9] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <Image width={200} height={200} src={Logo} className="lg:h-[42px] lg:w-[150px] sm:h-[35px] sm:w-[110px] w-36 h-12" alt="image"/>
            </div>
            <p className="text-[#6C7493] text-sm leading-relaxed font-normal">
              Transforming ideas into digital excellence and innovation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-[#6C7493] hover:text-orange-500 transition-colors" aria-label="Facebook">
                <span className="flex items-center justify-center rounded-full px-2 py-2 w-8 h-8 bg-white  "><Facebook className="w-6 h-6" /></span>
              </a>
              <a href="#" className="text-[#6C7493] hover:text-orange-500 transition-colors" aria-label="Instagram">
                <span className="flex items-center justify-center rounded-full px-2 py-2 w-8 h-8 bg-white"><AtSign className="w-6 h-6" /></span>
              </a>
              <a href="#" className="text-[#6C7493] hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <span className="flex items-center justify-center rounded-full px-2 py-2 w-8 h-8 bg-white "><Linkedin className="w-6 h-6" /></span>
              </a>
              <a href="#" className="text-[#6C7493] hover:text-orange-500 transition-colors" aria-label="Twitter">
                <span className="flex items-center justify-center rounded-full px-2 py-2 w-8 h-8 bg-white "><Twitter className="w-6 h-6" /></span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#262B40] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Project"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#6C7493] hover:text-orange-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[#262B40] mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-sm font-semibold">Email:</p>
                <a
                  href="mailto:nortech@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  nortech@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm font-semibold">Phone:</p>
                <a href="tel:+923139273211" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +92 31-3927-3211
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#262B40] mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-gray-400 text-sm text-center">© 2025 Nortech Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
