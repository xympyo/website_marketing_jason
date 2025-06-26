import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import HeroContent from "./component/HeroContent";
import WhatsAppButton from "./component/WhatsAppButton";

function HeroLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContent />
      <WhatsAppButton />
    </div>
  );
}

export default HeroLayout;
