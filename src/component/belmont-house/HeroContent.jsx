import React from "react";
import data from "../../data/belmont/data.json";

function HeroContent() {
  return (
    <div>
      <div className="flex flex-col">
        <img src={data[0].image1} alt="Belmont" />
        <div className="flex flex-col ms-8 me-8 mt-12">
          <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
            Belmont Homes
          </h1>
          <p className="poppins-light text-sm md:text-lg text-center text-[#0a0a0a]">
            {data[0].deskripsi1}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <img src={data[0].image2} alt="Belmont" />
        <div className="flex flex-col ms-8 me-8 mt-4">
          <p className="poppins-light text-sm md:text-lg text-justify text-[#0a0a0a]">
            {data[0].deskripsi2}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col ms-8 me-8 mt-4">
          <p className="poppins-medium text-lg md:text-2xl text-center text-[#0a0a0a]">
            {data[0].deskripsi3}
          </p>
        </div>
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              className="rounded-lg"
              src={data[0].image3}
              alt="Belmont Homes"
            />
            <img
              className="rounded-lg"
              src={data[0].image4}
              alt="Belmont Homes"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col ms-8 me-8 mt-4">
          <p className="poppins-bold text-lg md:text-2xl text-center text-[#0a0a0a]">
            {data[0].deskripsi4}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {data[0].carousel.map((data) => (
              <div>
                <img className="rounded-lg" src={data.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <img src={data[0].image5} alt="Belmont Homes" />
      </div>
    </div>
  );
}

export default HeroContent;
