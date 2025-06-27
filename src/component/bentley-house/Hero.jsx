import React from "react";
import block1 from "../../assets/bentley/block1.jpg";
import HeroData from "../../data/HeroData.json";

function Hero() {
  return (
    <div className="w-fit h-3/4">
      <div className="relative md:h-3/4 h-[50vh]">
        <div className="w-full h-full bg-linear-to-t from-black/90 to-black/30 absolute"></div>
        <img
          src={block1}
          className="md:w-fit md:h-auto h-[50vh] w-fit bg-cover object-cover"
          alt="Hero Data"
        />
        <p
          className="poppins-thin tracking-widest absolute md:text-5xl text-xs text-white left-2 md:left-4"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          BENTLEY HOMES
        </p>
        <div className="absolute bottom-4 z-[2000] left-4">
          <div className="flex flex-row justify-center">
            <div className="flex flex-row align-middle justify-center me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-reguler ms-2 text-[.6rem] md:text-base text-white">
                {HeroData[0].phone1}
              </p>
            </div>
            <div className="flex flex-row align-middle me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <p className="poppins-reguler ms-2 text-[.6rem] md:text-base text-white">
                {HeroData[0].phone2}
              </p>
            </div>
            <div className="flex flex-row align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <p className="poppins-reguler ms-2 text-[.6rem] md:text-base text-white">
                {HeroData[0].email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
