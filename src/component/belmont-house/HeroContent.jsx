import React, { useState, useRef, useEffect, useCallback } from "react";
import data from "../../data/belmont/data.json";

function HeroContent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPopupImage, setCurrentPopupImage] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const popupImageRef = useRef(null);
  const popupOverlayRef = useRef(null);

  const openImagePopup = (imageSrc) => {
    setCurrentPopupImage(imageSrc);
    setIsPopupOpen(true);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const closeImagePopup = () => {
    setIsPopupOpen(false);
    setCurrentPopupImage("");
  };

  const handleOverlayClick = (e) => {
    if (
      popupOverlayRef.current &&
      popupImageRef.current &&
      !popupImageRef.current.contains(e.target)
    ) {
      closeImagePopup();
    }
  };

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (!popupImageRef.current) return;

      const scaleAmount = 0.1;
      let newZoomLevel;

      if (e.deltaY < 0) {
        newZoomLevel = Math.min(zoomLevel + scaleAmount, 5);
      } else {
        newZoomLevel = Math.max(zoomLevel - scaleAmount, 1);
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
    if (isPopupOpen && popupRef) {
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
    isPopupOpen,
    handleWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  ]);

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
        <div className="ms-8 me-8">
          <div className="grid grid-cols-1 gap-8">
            <img
              className="rounded-lg cursor-pointer"
              src={data[0].image2}
              alt="Belmont Homes"
              onClick={() => openImagePopup(data[0].image2)}
            />
          </div>
        </div>
        <div className="flex flex-col ms-8 me-8 mt-4">
          <p className="poppins-light text-sm md:text-lg text-justify text-[#0a0a0a]">
            {data[0].deskripsi2}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="ms-8 me-8 mt-4">
          <p className="poppins-bold text-lg md:text-2xl text-center text-[#0a0a0a]">
            {data[0].deskripsi3}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src={data[0].image3}
              className="rounded-none md:rounded-lg cursor-pointer"
              alt="Belmont Homes"
              onClick={() => openImagePopup(data[0].image4)}
            />
            <img
              src={data[0].image4}
              className="rounded-none md:rounded-lg cursor-pointer"
              alt="Belmont Homes"
              onClick={() => openImagePopup(data[0].image5)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col ms-8 me-8 mt-4">
          <p className="poppins-bold text-lg md:text-2xl text-center text-[#0a0a0a] mt-8">
            UNIT PREVIEW
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {data[0].carousel.map((item, index) => (
              <div key={index}>
                <img className="rounded-lg" src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12"></div>

      {isPopupOpen && (
        <div
          ref={popupOverlayRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-50"
            onClick={closeImagePopup}
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
              touchAction: "none",
            }}
            onMouseDown={handleMouseDown}
          >
            <img
              src={currentPopupImage}
              alt="Full Screen Popup"
              className="max-w-full max-h-full object-contain"
              style={{
                pointerEvents: isDragging ? "none" : "auto",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroContent;
