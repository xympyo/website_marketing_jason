import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import HeroContent from "./component/HeroContent";
import WhatsAppButton from "./component/WhatsAppButton";
import Footer from "./component/Footer";
import Maps from "./component/Maps";
import CTAMore from "./component/CTAMore";

function HeroLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <CTAMore />
      <HeroContent />
      <Maps />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default HeroLayout;
