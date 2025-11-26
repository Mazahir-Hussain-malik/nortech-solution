"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "home" },
    { label: "Project", href: "projects" },
    { label: "About", href: "about" },
    { label: "services", href: "services", hasDropdown: true },
    { label: "Contact", href: "contact" },
  ];

  const dropdownItems = [
    { label: "Graphic Design", href: "/graphic-design" },
    { label: "Web Development", href: "/web-development" },
    { label: "Geographic Information System", href: "/gis" },
    { label: "App Development", href: "/app-development" },
    { label: "E-commerce", href: "/ecommerce" },
    { label: "IELTS", href: "/ielts" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Beautician", href: "/beautician" },
  ];

  const scrollToSection = (id: string, label: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
    setActiveLink(label);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 4 },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={"/"}>
            <Image src="/logo.png" width={150} height={40} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, i) => (
              <div key={item.label} className="relative group">
                {!item.hasDropdown ? (
                  <motion.button
                    onClick={() => scrollToSection(item.href, item.label)}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: i * 0.05 }}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700"
                  >
                    <span>{item.label}</span>

                    <motion.div
                      className="absolute bottom-1 left-0 h-0.5 bg-[#E97D26]"
                      initial={{ width: 0 }}
                      animate={{
                        width: activeLink === item.label ? "100%" : undefined,
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      transition={{ delay: i * 0.05 }}
                      className="relative px-3 py-2 text-sm font-medium text-gray-700 flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown size={16} />

                      <motion.div
                        className="absolute bottom-1 left-0 h-0.5 bg-[#E97D26]"
                        initial={{ width: 0 }}
                        animate={{
                          width: activeLink === item.label ? "100%" : undefined,
                        }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {dropdownItems.map((drop) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          onClick={() => setActiveLink(item.label)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button className="px-6 py-2.5 border-2 border-[#E97D26] rounded-tr-[30px] rounded-bl-[30px] font-semibold text-sm">
              Enroll Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full text-left px-4 py-3 rounded-lg flex justify-between items-center hover:bg-orange-50"
                        >
                          {item.label}
                          <ChevronDown size={16} />
                        </button>

                        {dropdownOpen && (
                          <div className="ml-4 space-y-2">
                            {dropdownItems.map((drop) => (
                              <Link
                                key={drop.label}
                                href={drop.href}
                                className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50"
                              >
                                {drop.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href, item.label)}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-orange-50"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
