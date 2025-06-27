import React from "react";
import logoLippo from "../assets/logoLippo.png";

function Footer() {
  return (
    <div className="ms-8 me-8 mt-20 mb-4 bg-white z-3000">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <a href="/" className="inline-flex items-center">
            <img
              src={logoLippo}
              className="w-8 md:w-12 h-auto"
              alt="Lippo Logo"
            />
            <p className="poppins-semibold ms-2 text-xs md:text-base text-[#0a0a0a]">
              Lippo Group
            </p>
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row w-full md:w-auto md:justify-between mb-4 md:mb-0">
          {/* Mobile: Two Columns for Contact */}
          <div className="flex justify-between w-full md:hidden">
            <div className="flex flex-col items-center space-y-1">
              {" "}
              {/* Column 1 for mobile */}
              <p className="poppins-regular text-xs text-[#0a0a0a]">
                litalie86@gmail.com
              </p>
              <p className="poppins-regular text-xs text-[#0a0a0a]">
                0877-8670-6887
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              {" "}
              {/* Column 2 for mobile */}
              <p className="poppins-regular text-xs text-[#0a0a0a]">
                @julita_property
              </p>
              <p className="poppins-regular text-xs text-[#0a0a0a]">
                0813-8698-8159
              </p>
            </div>
          </div>

          {/* Desktop: Original Contact Layout */}
          <div className="hidden md:flex flex-row md:flex-row justify-between">
            <div className="flex flex-row align-middle justify-center me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-regular md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                0877-8670-6887
              </p>
            </div>
            <div className="flex flex-row justify-center align-middle me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-regular md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                0813-8698-8159
              </p>
            </div>
            <div className="flex flex-row align-middle justify-center me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <p className="poppins-regular md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                litalie86@gmail.com
              </p>
            </div>
            <div className="flex flex-row justify-center align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <p className="poppins-regular md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                @julita_property
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mb-4 mt-4" />

      {/* Navigation Links Section */}
      <div className="flex flex-col md:flex-row mb-4 mt-4">
        {/* Mobile: Two Columns, Two Rows Grid */}
        <div className="grid grid-cols-2 gap-2 w-full md:hidden text-center">
          <a href="/park-serpong">
            <p className="poppins-regular text-xs text-[#0a0a0a]">
              Park Serpong
            </p>
          </a>
          <a href="/the-hive">
            <p className="poppins-regular text-xs text-[#0a0a0a]">THE HIVE</p>
          </a>
          <a href="/belmont-homes">
            <p className="poppins-regular text-xs text-[#0a0a0a]">
              Belmont Homes
            </p>
          </a>
          <a href="/bentley-homes">
            <p className="poppins-regular text-xs text-[#0a0a0a]">
              Bentley Homes
            </p>
          </a>
        </div>

        {/* Desktop: Original Single Row with separators */}
        <div className="hidden md:flex justify-between w-full">
          <a href="/park-serpong">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              Park Serpong
            </p>
          </a>
          <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
            |
          </p>
          <a href="/the-hive">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              THE HIVE
            </p>
          </a>
          <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
            |
          </p>
          <a href="/belmont-homes">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              Belmont Homes
            </p>
          </a>
          <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
            |
          </p>
          <a href="/bentley-homes">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              Bentley Homes
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
