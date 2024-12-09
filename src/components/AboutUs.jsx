import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "/src/assets/hero-12.jpeg"; // Adjust the path for your images
import img2 from "/src/assets/hero-11.jpeg";
import img3 from "/src/assets/hero-11.jpeg";
import img4 from "/src/assets/hero-12.jpeg";
import pattern from "/src/assets/pattern-1.webp";
import { FiCloud, FiSliders } from "react-icons/fi";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-auto md:w-3/4 mt-9 p-5 gap-5 text-center justify-center md:justify-between flex flex-wrap md:flex-nowrap">
      <div className="relative grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
        {/* First Image */}
        <div className="relative flex justify-end overflow-hidden">
          <img className="absolute" src={pattern} alt="" />

          <div
            className="relative z-[2] mt-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="absolute right-3  -top-2.5 -z-1 h-full w-3/4 rounded-tl-[60px] bg-red-600"></span>
            <div className="relative z-[4] h-[100px] md:h-fit flex justify-end overflow-hidden">
              <img
                alt="about one"
                className="rounded-tl-[60px] w-3/4 object-cover object-top"
                src={img1}
              />
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="flex h-[160px] md:h-[260px] overflow-hidden">
          <img
            alt="about two"
            data-aos="fade-right"
            data-aos-delay="250"
            className="rounded-[40px_10px] md:rounded-[80px_0px] rounded-tr-[15px] object-cover"
            src={img2}
          />
        </div>

        {/* Third Image */}
        <div className="ml-auto flex h-[160px] md:h-[260px] justify-end overflow-hidden">
          <img
            alt="about two"
            data-aos="fade-right"
            data-aos-delay="250"
            className="rounded-[50px_15px] rounded-tr-[15px] object-cover"
            src={img2}
          />
        </div>

        {/* Fourth Image */}
        <div className="overflow-hidden h-[160px] md:h-[260px] ">
          <img
            alt="about four"
            data-aos="fade-right"
            data-aos-delay="400"
            className="rounded-br-[80px] rounded-[0px_10px] h-full object-cover"
            src={img4}
          />
        </div>

        {/* Center Element */}
        <div className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div data-aos="zoom-in" data-aos-delay="450">
            <span className="grid w-[60px] h-[60px] md:h-[100px] md:w-[100px] place-items-center rounded-full border-[6px] md:border-[12px] border-white bg-primary text-[30px] bg-red-700 text-white">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 27 27"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26.8125 13.8672C26.8125 14.9922 25.875 15.9297 24.8125 15.9297H15.8125V24.9297C15.8125 25.9922 14.875 26.8672 13.8125 26.8672C12.6875 26.8672 11.8125 25.9922 11.8125 24.9297V15.9297H2.8125C1.6875 15.9297 0.8125 14.9922 0.8125 13.8672C0.8125 12.8047 1.6875 11.9297 2.8125 11.9297H11.8125V2.92969C11.8125 1.80469 12.6875 0.867188 13.8125 0.867188C14.875 0.867188 15.8125 1.80469 15.8125 2.92969V11.9297H24.8125C25.875 11.8672 26.8125 12.8047 26.8125 13.8672Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 m-auto text-start text-white">
        <h3 className="text-red-500 font-bold mb-4">
          ABOUT US
        </h3>
        <h2 className="text-3xl font-bold mb-4">
          Empowering Your Digital Tomorrow
        </h2>
        <p className="text-gray-400 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition">
            <FiCloud className="text-xl" />
            Cloud Migrate Pro
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition">
            <FiSliders className="text-xl" />
            AI Forge Labs
          </button>
        </div>
        <p className="text-gray-400 mt-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
