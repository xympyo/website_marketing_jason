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
        className="w-full h-auto object-cover"
        src={ParkSerpongData[0].image}
        alt={ParkSerpongData[0].title}
      />
      <div className="ms-8 me-8 mt-12">
        <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
          Tree Tops Livin
        </h1>
        <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
          {ParkSerpongData[0].deskripsi}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1">
          <img
            className="w-full h-auto object-cover mt-8"
            src={ParkSerpongData[1].image}
            alt={ParkSerpongData[1].title}
          />
          <img
            className="w-full h-auto object-cover mt-8"
            src={ParkSerpongData[2].image}
            alt={ParkSerpongData[2].title}
          />
        </div>
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongTreeTopsCarousel.map((data) => (
              <img
                className="w-full h-auto rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[3].image}
          alt={ParkSerpongData[3].title}
        />
        <div className="ms-8 me-8 mt-12">
          <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
            Gold Livin
          </h1>
          <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
            "Gold Livin" menawarkan hunian modern dua lantai dengan desain yang
            sangat fungsional dan stylish. Keunggulannya meliputi 3 kamar tidur
            dan 3 kamar mandi ensuite untuk privasi maksimal, powder room yang
            praktis, serta halaman belakang yang luas dan carport untuk 2 mobil.
            Desain interiornya menonjolkan pencahayaan alami melimpah dan gaya
            kontemporer yang elegan, dilengkapi area hiburan khusus dan kamar
            tidur anak dengan ranjang susun yang fungsional.
          </p>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[4].image}
          alt={ParkSerpongData[4].title}
        />
        <div className="flex flex-col ms-0 me-0 md:ms-40 md:me-40">
          <div className="flex justify-around ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.lb}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.lt}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.b}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.c}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.d}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {a.e}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[5].image}
          alt={ParkSerpongData[5].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongGoldLivingCarousel.map((data) => (
              <img
                className="w-full h-auto rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[6].image}
          alt={ParkSerpongData[6].title}
        />
        <div className="ms-8 me-8 mt-12">
          <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
            Gold Tops Livin
          </h1>
          <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
            "Gold Tops Livin" merupakan hunian premium 3 lantai di Park Serpong
            yang menawarkan perpaduan sempurna antara kemewahan dan
            fungsionalitas. Dengan 4 kamar tidur dan 3 kamar mandi modern
            (termasuk ensuite dan powder room), rumah ini sangat ideal untuk
            keluarga besar. Keunggulannya diperkuat oleh kehadiran large
            backyard dan balkon di lantai 3, yang memberikan koneksi kuat dengan
            alam.
          </p>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[7].image}
          alt={ParkSerpongData[7].title}
        />
        <div className="flex flex-col ms-0 me-0 md:ms-40 md:me-40">
          <div className="flex justify-around ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.lb}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.lt}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.a}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.b}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.c}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.d}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.e}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.f}
            </p>
            <p className="poppins-reguler text-xs md:text-base poppins-medium text-[#0a0a0a]">
              {b.g}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[8].image}
          alt={ParkSerpongData[8].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 my-4 mb-20 md:my-32">
            {ParkSerpongGoldTopsCarousel.map((data) => (
              <img
                className="w-full h-auto rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[9].image}
          alt={ParkSerpongData[9].title}
        />
        <div className="ms-8 me-8 mt-12">
          <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
            Quartz Livin
          </h1>
          <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
            "Quartz Livin" adalah hunian 2 lantai yang dirancang cerdas dan
            efisien, ideal untuk gaya hidup modern dan dinamis di Park Serpong.
            Keunggulannya terletak pada desain compact namun maksimal dengan
            dimensi 3.3 x 13 m, serta dilengkapi 2 kamar tidur dan 2 ensuite
            bathroom untuk privasi dan kenyamanan optimal. Rumah ini menonjolkan
            pencahayaan alami melimpah dan ventilasi baik berkat jendela besar
            dan open plan concept.
          </p>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[10].image}
          alt={ParkSerpongData[10].title}
        />
        <div className="flex flex-col ms-0 me-0 md:ms-40 md:me-40">
          <div className="flex justify-around ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.lb}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.lt}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.b}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.c}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {c.d}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[11].image}
          alt={ParkSerpongData[11].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-64 my-12 md:my-32">
            {ParkSerpongQuartzCarousel.map((data) => (
              <img
                className="w-full h-auto rounded-lg"
                src={data.image}
                alt={data.title}
              />
            ))}
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[12].image}
          alt={ParkSerpongData[12].title}
        />
        <div className="ms-8 me-8 mt-12">
          <h1 className="poppins-medium text-[#0a0a0a] text-lg md:text-2xl text-center">
            Bronze Livin
          </h1>
          <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-center">
            "Bronze Livin" menawarkan hunian 2 lantai yang sangat efisien dan
            terjangkau, ideal untuk individu atau pasangan muda. Keunggulannya
            meliputi desain compact dengan ukuran optimal, 1 kamar tidur utama
            dengan ensuite bathroom, serta powder room dan carport. Desain
            interiornya modern dengan open plan concept dan pencahayaan alami
            melimpah, sementara eksteriornya menampilkan gaya minimalis
            kontemporer.
          </p>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[13].image}
          alt={ParkSerpongData[13].title}
        />
        <div className="flex flex-col ms-0 me-0 md:ms-40 md:me-40">
          <div className="flex justify-around ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.lb}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.lt}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.a}
            </p>
          </div>
          <div className="flex justify-between ms-8 me-8 mt-4">
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.b}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.c}
            </p>
            <p className="poppins-reguler md:text-base text-xs poppins-medium text-[#0a0a0a]">
              {d.d}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto object-cover mt-8"
          src={ParkSerpongData[14].image}
          alt={ParkSerpongData[14].title}
        />
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-64 mt-12 md:mt-32">
            {ParkSerpongBronzeCarousel.map((data) => (
              <img
                className="w-full h-auto rounded-lg"
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
