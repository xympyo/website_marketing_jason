import React from "react";
import Hero from "./component/park-serpong/Hero";
import Header from "./component/Header";
import WhatsAppButton from "./component/WhatsAppButton";
import HeroContent from "./component/park-serpong/HeroContent";

function ParkSerpongLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContent />
      <WhatsAppButton />
    </div>
  );
}

export default ParkSerpongLayout;
