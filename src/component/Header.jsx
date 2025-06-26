import React from "react";
import logoLippo from "../assets/logoLippo.png";

function Header() {
  return (
    <div className="absolute top-0 left-0 z-100 w-full">
      <div className="flex flex-col justify-between md:flex-row pt-2 ms-8 me-8 mt-2">
        <div className="flex justify-center md:justify-start">
          <a
            href="/"
            className="inline-flex md:flex-row justify-center md:justify-start items-center"
          >
            <img
              src={logoLippo}
              className="w-16 md:w-12 h-auto"
              alt="Lippo Logo"
            />
            <p className="poppins-semibold ms-2 text-base text-white">Home</p>
          </a>
        </div>
        <div className="flex justify-between w-full md:w-1/3">
          <a href="/park-serpong">
            <p className="poppins-regular text-xs md:text-base text-white">
              Park Serpong
            </p>
          </a>
          <a href="/the-hive">
            <p className="poppins-regular text-xs md:text-base text-white">
              The Hive
            </p>
          </a>
          <a href="/belmont-homes">
            <p className="poppins-regular text-xs md:text-base text-white">
              Belmont
            </p>
          </a>
          <a href="/bentley-homes">
            <p className="poppins-regular text-xs md:text-base text-white">
              Bentley
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
