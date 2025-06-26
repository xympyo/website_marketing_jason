import React from "react";
import data from "../../data/the-hive/data.json";

function HeroContent() {
  return (
    <div className="flex flex-col">
      <img
        className="w-full h-fit object-cover"
        src={data[0].image1}
        alt="The Hive"
      />
      <div className="ms-8 me-8 mt-12">
        <h1 className="poppins-bold text-[#0a0a0a] text-2xl text-center">
          The Hive
        </h1>
        <p className="poppins-reguler text-[#0a0a0a] text-lg text-center">
          Gitu Deh
        </p>
      </div>
      <div className="ms-8 me-8 mt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <img src={data[0].image2} alt="The Hive" />
          </div>
          <div className="col-span-8 flex align-middle self-center flex-col">
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].a}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].b}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].c}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].d}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].e}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].f}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelAcorner[0].g}
            </p>
          </div>
        </div>
      </div>
      <div className="ms-8 me-8 mt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <img src={data[0].image3} alt="The Hive" />
          </div>
          <div className="col-span-8 flex align-middle self-center flex-col">
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].a}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].b}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].c}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].d}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].e}
            </p>
            <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
              {data[0].modelBstandard[0].f}
            </p>
          </div>
        </div>
      </div>
      <div className="flex ms-8 me-8 justify-center mt-8">
        <h1 className="poppins-bold text-[#0a0a0a] text-base md:text-2xl">
          Specifications
        </h1>
      </div>
      <div className="mt-4 flex flex-col">
        <img src={data[0].image4} alt="The Hive" />
        <div className="flex justify-center mt-4">
          <a href="https://wa.me/+6287786706887" target="_blank">
            <p className="p-2 text-[#0a0a0a] rounded-lg border-2 border-[#0a0a0a]">
              Contact For More
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
