import React from "react";
import Header from "./component/Header";
import Hero from "./component/the-hive/Hero";
import HeroContent from "./component/the-hive/HeroContent";
import WhatsAppButton from "./component/WhatsAppButton";
import Footer from "./component/Footer";
import CTAMore from "./component/the-hive/CTAMore";
import Maps from "./component/Maps";

function TheHiveLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <CTAMore />
      <HeroContent />
      <CTAMore />
      <Maps />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default TheHiveLayout;
