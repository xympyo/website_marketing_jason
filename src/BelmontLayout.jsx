import React from "react";
import Hero from "./component/belmont-house/Hero";
import Header from "./component/Header";
import HeroContent from "./component/belmont-house/HeroContent";
import Footer from "./component/Footer";
import WhatsAppButton from "./component/WhatsAppButton";
import CTAMore from "./component/belmont-house/CTAMore";
import Maps from "./component/Maps";

function BelmontLayout() {
  return (
    <div>
      <Hero />
      <Header />
      <CTAMore />
      <HeroContent />
      <CTAMore />
      <Maps />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default BelmontLayout;
