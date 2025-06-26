import React from "react";
import HeroContentData from "../data/HeroContent.json";

function HeroContent() {
  return (
    <div className="ms-8 me-8">
      {HeroContentData.map((data) => (
        <div key={data.title} className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={data.image} alt={data.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroContent;
