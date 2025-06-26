import React from "react";
import HeroContentData from "../data/HeroContent.json";

function HeroContent() {
  return (
    <div className="ms-8 me-8">
      {HeroContentData.map((data) => (
        <div
          key={data.title}
          className="md:grid md:grid-cols-12 gap-x-8 md:gap-x-12 mt-20"
        >
          <div className="md:col-span-5 col-span-4 md:mb-0 mb-2">
            <img
              className="w-full h-auto rounded-lg shadow-2xl"
              src={data.image}
              alt={data.title}
            />
          </div>
          <div className="col-span-7 flex align-middle">
            <div className="flex flex-col self-center">
              <h1 className="poppins-semibold text-base md:text-2xl text-[#0a0a0a]">
                {data.title}
              </h1>
              <h5 className="poppins-reguler text-xs md:text-lg text-[#0a0a0a]">
                {data.description}
              </h5>
              <div className="flex justify-end mt-8">
                <a href={data.link}>
                  <h1 className="poppins-bold text-base md:text-xl text-[#0a0a0a] border-2 rounded-lg p-1 border-black shadow-lg">
                    Explore Now
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroContent;
