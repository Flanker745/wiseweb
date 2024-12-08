import React, { useEffect, useState } from "react";
import img from "/src/assets/shape-5.png";
import { FaPhoneAlt } from "react-icons/fa"; // Importing the phone icon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (menuOpen) {
      // Disable scrolling when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when the menu is closed
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect when the component is unmounted or menuOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${
          scrolled ? "fixed  bg-black shadow-custom duration-1000 " : "absolute"
        } w-full  text-white z-[99999] top-0 left-0 `}
      >
        <div className=" md:w-3/4 m-auto  h-full">
          <div className="flex items-center justify-between px-8 py-4 bg-transparent text-white">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Web Wise</h1>
            </div>
            <button
              className="text-white text-2xl focus:outline-none md:hidden"
              onClick={toggleMenu}
            >
              ☰
            </button>
            <ul className={` ${menuOpen ? "left-0" : "left-[-100%]"}  md:left-0 top-0  duration-700  block md:relative absolute bg-black w-[60%] h-screen md:h-fit md:w-fit md:bg-transparent  md:flex space-x-6 text-[12px] `}>
              <div className="text-right block md:hidden">
                <button onClick={closeMenu}  className="p-2 text-4xl">&times;</button>
              </div>
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
              <div className="relative group hover:text-red-500">
                  <div className="flex items-center">
                    Services
                    <span className="ml-1 transform duration-300 group-hover:rotate-180">
                      +
                    </span>
                  </div>
                  <div className="absolute left-0 top-full overflow-hidden max-h-0 group-hover:max-h-64 duration-700 bg-[rgba(26_26_26)] text-[11px] text-white shadow-lg mt-2 w-40 ">
                    <ul className="">
                      <li className="hover:bg-red-700 px-2 py-1 border-neutral-600 border-b ">
                        Service 1
                      </li>
                      <li className="hover:bg-red-700 px-2 py-1 border-neutral-600 border-b ">
                        Service 2
                      </li>
                      <li className="hover:bg-red-700 px-2 py-1 border-neutral-600 border-b ">
                        Service 3
                      </li>
                      <li className="hover:bg-red-700 px-2 py-1 border-neutral-600 border-b ">
                        Service 4
                      </li>
                      <li className="hover:bg-red-700 px-2 py-1">
                        Service 5
                      </li>
                    </ul>
                  </div>
                </div>
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
            
            <div className=" hidden flex-none items-center gap-4 text-xs dark:text-white lg:flex">
              <FaPhoneAlt className="flex-none" size={28} />
              <div>
                <p>Need help?</p>
                <a href="tel:7014944745" className="block font-bold">
                  7014944745
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
