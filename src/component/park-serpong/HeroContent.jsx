import React from "react";
import ParkSerpongData from "../../data/park-serpong/ParkSerpong.json";
import ParkSerpongTypeData from "../../data/park-serpong/ParkSerpongType.json";
import ParkSerpongTreeTopsCarousel from "../../data/park-serpong/ParkSerpongCarouselTreeTops.json";
import ParkSerpongGoldTopsCarousel from "../../data/park-serpong/ParkSerpongCarouselGoldTops.json";
import ParkSerpongQuartzCarousel from "../../data/park-serpong/ParkSerpongCarouselQuartz.json";
import ParkSerpongBronzeCarousel from "../../data/park-serpong/ParkSerpongCarouselBronze.json";
import ParkSerpongGoldLivingCarousel from "../../data/park-serpong/ParkSerpongCarouselGoldLiving.json";
import TypeData from "../../data/park-serpong/TypeData.json";

function HeroContent() {
  let a = TypeData[0];
  let b = TypeData[1];
  let c = TypeData[2];
  let d = TypeData[3];
  return (
    <div className="flex flex-col">
      <img
        className="w-full h-fit object-cover"
        src={ParkSerpongData[0].image}
        alt={ParkSerpongData[0].title}
      />
      <div className="ms-8 me-8 mt-12">
        <h1 className="poppins-bold text-[#0a0a0a] text-lg md:text-2xl text-center">
          TreeTops
        </h1>
        <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
          {ParkSerpongData[0].deskripsi}
        </p>
      </div>
      <div className="ms-8 me-8 mt-12">
        <div className="grid grid-cols-1 md:grid md:grid-cols-4 md:gap-20">
          {ParkSerpongTypeData.map((data) => (
            <div key={data.title} className="flex flex-col justify-center">
              <img
                className="w-3/4 self-center md:self-auto md:w-full h-fit object-cover rounded-lg"
                src={data.image}
                alt={data.title}
              />
              {data.type.map((typeItem, typeIndex) => (
                <div className="flex justify-center mt-4">
                  <ol className="poppins-reguler text-[#0a0a0a] text-sm list-disc p-0 m-0">
                    <li
                      key={`${typeItem.type || "unknown"}-${typeIndex}`}
                      className="mb-1"
                    >
                      <p className="text-left poppins-reguler text-base md:text-base text-[#0a0a0a]">
                        {typeItem.full}
                      </p>
                    </li>
                    <li
                      key={`${typeItem.type || "unknown"}-${typeIndex}`}
                      className="mb-1"
                    >
                      <p className="text-left poppins-reguler text-base md:text-base text-[#0a0a0a]">
                        {typeItem.lb}
                      </p>
                    </li>
                    <li
                      key={`${typeItem.type || "unknown"}-${typeIndex}`}
                      className="mb-1"
                    >
                      <p className="text-left poppins-reguler text-base md:text-base text-[#0a0a0a]">
                        {typeItem.lt}
                      </p>
                    </li>
                    <li
                      key={`${typeItem.type || "unknown"}-${typeIndex}`}
                      className="mb-1"
                    >
                      <p className="text-left poppins-reguler text-base md:text-base text-[#0a0a0a]">
                        {typeItem.a}
                      </p>
                    </li>
                    <li
                      key={`${typeItem.type || "unknown"}-${typeIndex}`}
                      className="mb-1"
                    >
                      <p className="text-left poppins-reguler text-base md:text-base text-[#0a0a0a]">
                        {typeItem.b}
                      </p>
                    </li>
                  </ol>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[1].image}
          alt={ParkSerpongData[1].title}
        />
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[2].image}
          alt={ParkSerpongData[2].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongTreeTopsCarousel.map((data) => (
              <img
                className="w-full h-fit rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[3].image}
          alt={ParkSerpongData[3].title}
        />
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[4].image}
          alt={ParkSerpongData[4].title}
        />
        <div className="flex flex-row md:flex-col">
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.lb}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.lt}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.b}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.c}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.d}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {a.e}
            </p>
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[5].image}
          alt={ParkSerpongData[5].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongGoldLivingCarousel.map((data) => (
              <img
                className="w-full h-fit rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[6].image}
          alt={ParkSerpongData[6].title}
        />
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[7].image}
          alt={ParkSerpongData[7].title}
        />
        <div className="flex flex-row md:flex-col">
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.lb}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.lt}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.a}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.b}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.c}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.d}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.e}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.f}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              • {b.g}
            </p>
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[8].image}
          alt={ParkSerpongData[8].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongGoldTopsCarousel.map((data) => (
              <img
                className="w-full h-fit rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[9].image}
          alt={ParkSerpongData[9].title}
        />
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[10].image}
          alt={ParkSerpongData[10].title}
        />
        <div className="flex flex-row md:flex-col">
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.lb}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.lt}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.b}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.c}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {c.d}
            </p>
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[11].image}
          alt={ParkSerpongData[11].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-64 my-12 md:my-32">
            {ParkSerpongQuartzCarousel.map((data) => (
              <img
                className="w-full h-fit rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[12].image}
          alt={ParkSerpongData[12].title}
        />
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[13].image}
          alt={ParkSerpongData[13].title}
        />
        <div className="flex flex-col">
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.lb}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.lt}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.b}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.c}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              • {d.d}
            </p>
          </div>
        </div>
        <img
          className="w-full h-fit object-cover mt-8"
          src={ParkSerpongData[14].image}
          alt={ParkSerpongData[14].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-64 my-12 md:my-32">
            {ParkSerpongBronzeCarousel.map((data) => (
              <img
                className="w-full h-fit rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
