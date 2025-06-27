import React from "react";
import logoLippo from "../assets/logoLippo.png";

function Footer() {
  return (
    <div className="ms-8 me-8 mt-20 mb-4 bg-white z-3000">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-center md:justify-start">
          <a
            href="/"
            className="inline-flex md:flex-row justify-center md:justify-start items-center"
          >
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
        <div className="flex flex-row justify-between md:justify-between">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-row align-middle justify-center me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                class="bi bi-telephone-fill"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-reguler md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                0877-8670-6887
              </p>
            </div>
            <div className="flex flex-row justify-center align-middle me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0a0a0a"
                class="bi bi-telephone-fill"
                className="md:block hidden"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-reguler md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
                0813-8698-8159
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0a0a0a"
              class="bi bi-envelope-fill"
              className="md:block hidden"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <p className="poppins-reguler md:text-left text-center ms-2 text-xs md:text-base text-[#0a0a0a]">
              litalie86@gmail.com
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-4 mt-4" />
      <div className="flex-col mb-4 mt-4">
        <div className="flex justify-between">
          <a href="/park-serpong">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              Park Serpong
            </p>
          </a>
          <p>|</p>
          <a href="/the-hive">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              THE HIVE
            </p>
          </a>
          <p>|</p>
          <a href="/belmont-homes">
            <p className="poppins-regular text-xs md:text-base text-[#0a0a0a]">
              Belmont Homes
            </p>
          </a>
          <p>|</p>
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
