import React from "react";
import Hero from "./component/park-serpong/Hero";
import Header from "./component/Header";
import WhatsAppButton from "./component/WhatsAppButton";
import HeroContent from "./component/park-serpong/HeroContent";
import Footer from "./component/Footer";
import CTAMore from "./component/park-serpong/CTAMore";

function ParkSerpongLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContent />
      <CTAMore />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default ParkSerpongLayout;
