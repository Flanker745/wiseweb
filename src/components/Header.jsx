import React, { useState } from "react";
import img from "/src/assets/shape-5.png";
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the phone icon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`relative h-screen bg-[url('/src/assets/hero-11.jpeg')] bg-cover bg-center filter grayscale ${
          menuOpen ? "overflow-hidden" : ""
        }`}
      >
        {/* Foreground Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(37,37,37,0.8)] to-[rgba(0,0,0,0.9)]"></div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent text-white z-20">
          <div className="flex items-center">
            <img src={img} alt="Techlab" className="h-8 mr-3" />
            <h1 className="text-xl font-bold">Web Wise</h1>
          </div>
          <button
            className="text-white text-2xl focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul className="hidden md:flex space-x-6 text-sm md:text-lg">
            <li>
              <a href="#home" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-500">
                Service
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-red-500">
                Project
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-red-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
          <div className="contact-box hidden flex-none items-center gap-4 text-accent-900 dark:text-white xl:flex">
      <FaPhoneAlt className="flex-none" size={56} />
      <div>
        <p>Need help?</p>
        <a href="tel:(307)555-0133" className="block font-secondary text-lg font-bold leading-[1.3]">
          (307) 555-0133
        </a>
      </div>
    </div>
        </nav>

        {/* Slide-Out Menu */}
        <div
          className={`fixed top-0 left-0 h-full z-30 bg-black bg-opacity-80 text-white transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 w-[60%] md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-2xl focus:outline-none"
            onClick={closeMenu}
          >
            ×
          </button>
          <ul className="flex flex-col space-y-6 p-6">
            <li>
              <a
                href="#home"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Blur Background */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
            onClick={closeMenu}
          ></div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Your Digital Future
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Discover the power of technology with us
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
