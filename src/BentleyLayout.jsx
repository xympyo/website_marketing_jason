import React from "react";
import Hero from "./component/bentley-house/Hero";
import Header from "./component/Header";
import HeroContent from "./component/bentley-house/HeroContent";
import Footer from "./component/Footer";
import WhatsAppButton from "./component/WhatsAppButton";
import CTAMore from "./component/bentley-house/CTAMore";

function BentleyLayout() {
  return (
    <div>
      <Hero />
      <Header />
      <HeroContent />
      <CTAMore />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default BentleyLayout;
