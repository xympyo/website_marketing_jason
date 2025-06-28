import React from "react";
import Hero from "./component/bentley-house/Hero";
import Header from "./component/Header";
import HeroContent from "./component/bentley-house/HeroContent";
import Footer from "./component/Footer";
import WhatsAppButton from "./component/WhatsAppButton";
import CTAMore from "./component/bentley-house/CTAMore";
import Maps from "./component/Maps";

function BentleyLayout() {
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

export default BentleyLayout;
