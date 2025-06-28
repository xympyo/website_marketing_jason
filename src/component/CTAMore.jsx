import React from "react";

function CTAMore() {
  return (
    <div className="ms-8 me-8 mt-12 mb-12">
      <div className="flex flex-row align-middle justify-center">
        <div className="flex md:justify-start justify-center ms-12 me-12">
          <a
            href="https://wa.me/+6287786706887?text=Hai,%saya%mau%lihat%Katalog%Bentley%House."
            target="_blank"
          >
            <p className="p-2 border-2 text-[#0a0a0a] rounded-lg poppins-bold text-base text-2lg">
              Download Katalog
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTAMore;
