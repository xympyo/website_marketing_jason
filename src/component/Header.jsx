import React, { useState } from "react";
import logoLippo from "../assets/logoLippo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center pt-2 ms-8 me-8 mt-2 md:flex-row">
        <div className="flex justify-center md:justify-start">
          <a href="/" className="inline-flex items-center">
            <img
              src={logoLippo}
              className="w-16 md:w-12 h-auto"
              alt="Lippo Logo"
            />
            <p className="poppins-semibold ms-2 text-base text-white">Home</p>
          </a>
        </div>

        {/* Hamburger Icon for Mobile (visible up to 768px) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation (visible from 769px and up) */}
        <div className="hidden md:flex justify-between w-full md:w-1/2">
          <a href="/park-serpong">
            <p className="poppins-regular text-xs md:text-base text-white">
              Park Serpong
            </p>
          </a>
          <a href="/the-hive">
            <p className="poppins-regular text-xs md:text-base text-white">
              THE HIVE
            </p>
          </a>
          <a href="/belmont-homes">
            <p className="poppins-regular text-xs md:text-base text-white">
              Belmont Homes
            </p>
          </a>
          <a href="/bentley-homes">
            <p className="poppins-regular text-xs md:text-base text-white">
              Bentley Homes
            </p>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-80 z-50 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full justify-start items-center pt-4">
          <div className="w-full flex justify-end px-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#0a0a0a] focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-6">
            <a
              href="/"
              className="inline-flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={logoLippo} className="w-20 h-auto" alt="Lippo Logo" />
              <p className="poppins-semibold ms-2 text-xl text-[#0a0a0a]">
                Home
              </p>
            </a>
            <a href="/park-serpong" onClick={() => setIsMenuOpen(false)}>
              <p className="poppins-regular text-xl text-[#0a0a0a]">
                Park Serpong
              </p>
            </a>
            <a href="/the-hive" onClick={() => setIsMenuOpen(false)}>
              <p className="poppins-regular text-xl text-[#0a0a0a]">THE HIVE</p>
            </a>
            <a href="/belmont-homes" onClick={() => setIsMenuOpen(false)}>
              <p className="poppins-regular text-xl text-[#0a0a0a]">
                Belmont Homes
              </p>
            </a>
            <a href="/bentley-homes" onClick={() => setIsMenuOpen(false)}>
              <p className="poppins-regular text-xl text-[#0a0a0a]">
                Bentley Homes
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
