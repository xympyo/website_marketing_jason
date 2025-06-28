import React, { useState, useRef, useEffect, useCallback } from "react";
import data from "../../data/the-hive/data.json";

function HeroContent() {
  const [isImage2Clicked, setIsImage2Clicked] = useState(false);
  const [isImage3Clicked, setIsImage3Clicked] = useState(false);
  const [isImage4PopupOpen, setIsImage4PopupOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const popupImageRef = useRef(null);
  const popupOverlayRef = useRef(null);

  const handleImage2Click = () => {
    setIsImage2Clicked(!isImage2Clicked);
  };

  const handleImage3Click = () => {
    setIsImage3Clicked(!isImage3Clicked);
  };

  const closeImage4Popup = () => {
    setIsImage4PopupOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (
      popupOverlayRef.current &&
      popupImageRef.current &&
      !popupImageRef.current.contains(e.target)
    ) {
      closeImage4Popup();
    }
  };

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (!popupImageRef.current) return;

      const scaleAmount = 0.1;
      let newZoomLevel;

      if (e.deltaY < 0) {
        // Zoom in
        newZoomLevel = Math.min(zoomLevel + scaleAmount, 5); // Max zoom 5x
      } else {
        // Zoom out
        newZoomLevel = Math.max(zoomLevel - scaleAmount, 1); // Min zoom 1x
      }

      setZoomLevel(newZoomLevel);
    },
    [zoomLevel]
  );

  const handleMouseDown = useCallback(
    (e) => {
      if (zoomLevel > 1 && popupImageRef.current) {
        setIsDragging(true);
        setStartDrag({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      }
    },
    [zoomLevel, pan]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setPan({
        x: e.clientX - startDrag.x,
        y: e.clientY - startDrag.y,
      });
    },
    [isDragging, startDrag]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const popupRef = popupOverlayRef.current;
    if (isImage4PopupOpen && popupRef) {
      popupRef.addEventListener("wheel", handleWheel, { passive: false });
      popupRef.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else if (popupRef) {
      popupRef.removeEventListener("wheel", handleWheel);
      popupRef.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (popupRef) {
        popupRef.removeEventListener("wheel", handleWheel);
        popupRef.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [
    isImage4PopupOpen,
    handleWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  ]);

  return (
    <div className="flex flex-col">
      <img
        className="w-full h-fit object-cover"
        src={data[0].image1}
        alt="The Hive"
      />
      <div className="ms-8 me-8 mt-12">
        <h1 className="poppins-medium text-[#0a0a0a] text-2xl text-center">
          The Hive
        </h1>
        <p className="poppins-reguler text-[#0a0a0a] text-lg text-center">
          THE HIVE adalah ruko 3 lantai inovatif dengan konsep "Multiple Key"
          yang revolusioner. Ini memungkinkan Anda memiliki Toko (Lantai 1),
          Kantor (Lantai 2), dan Rumah (Lantai 3) dalam satu bangunan,
          masing-masing dengan akses, signage, dan utilitas terpisah untuk
          privasi dan fleksibilitas maksimal.
        </p>
      </div>
      <div className="ms-8 me-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isImage2Clicked ? "col-span-7" : "col-span-6"
            }`}
          >
            <img
              src={data[0].image2}
              alt="The Hive"
              onClick={handleImage2Click}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isImage2Clicked
                ? "col-span-5 flex align-middle self-center flex-col"
                : "col-span-6 flex align-middle self-center flex-col"
            }`}
          >
            <div className="flex">
              <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-left mb-4">
                Unit "Hive CORNER typical" merupakan ruko 3 lantai yang menonjol
                di THE HIVE Boulevard, menawarkan dimensi lahan dan bangunan
                yang lebih luas (LT 90 m², LB 137 m²) dibandingkan tipe standar.
                Keunggulan utamanya terletak pada posisi sudut yang memberikan
                visibilitas ganda dan aksesibilitas maksimal untuk bisnis.
              </p>
            </div>
            <div className="ms-8 me-8">
              <ol className="list-disc">
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].a}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].b}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].c}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].d}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].e}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].f}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelAcorner[0].g}
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-8 me-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isImage3Clicked ? "col-span-7" : "col-span-6"
            }`}
          >
            <img
              src={data[0].image3}
              alt="The Hive"
              onClick={handleImage3Click}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isImage3Clicked
                ? "col-span-5 flex align-middle self-center flex-col"
                : "col-span-6 flex align-middle self-center flex-col"
            }`}
          >
            <div className="flex">
              <p className="poppins-reguler text-[#0a0a0a] text-sm md:text-lg text-left mb-4">
                Unit "HIVE Standard typical" menawarkan ruko 3 lantai
                multifungsi (Toko, Kantor, Rumah) dengan konsep "Multiple Key"
                yang inovatif, menyediakan akses dan utilitas terpisah per
                lantai. Tipe standar (4.5x12m, LB 110m²) dilengkapi 3 kamar
                mandi, backyard, dan pilihan layout lantai dasar, memaksimalkan
                fleksibilitas untuk bisnis dan gaya hidup terintegrasi.
              </p>
            </div>
            <div className="ms-8 me-8">
              <ol className="list-disc">
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].a}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].b}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].c}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].d}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].e}
                  </p>
                </li>
                <li>
                  <p className="poppins-medium text-[#0a0a0a] text-xs md:text-lg">
                    {data[0].modelBstandard[0].f}
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Image Popup */}
      {isImage4PopupOpen && (
        <div
          ref={popupOverlayRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-50"
            onClick={closeImage4Popup}
          >
            &times;
          </button>
          <div
            ref={popupImageRef}
            className="relative max-w-full max-h-full flex justify-center items-center"
            style={{
              transform: `scale(${zoomLevel}) translate(${pan.x}px, ${pan.y}px)`,
              cursor:
                zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
              touchAction: "none", // Disable default touch actions like double tap zoom
            }}
            onMouseDown={handleMouseDown}
          >
            <img
              src={data[0].image4}
              alt="The Hive Full Screen"
              className="max-w-full max-h-full object-contain"
              style={{
                pointerEvents: isDragging ? "none" : "auto", // Prevent image drag conflict
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroContent;
