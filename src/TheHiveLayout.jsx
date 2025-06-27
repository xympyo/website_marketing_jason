import React from "react";
import Header from "./component/Header";
import Hero from "./component/the-hive/Hero";
import HeroContent from "./component/the-hive/HeroContent";
import WhatsAppButton from "./component/WhatsAppButton";
import Footer from "./component/Footer";
import CTAMore from "./component/the-hive/CTAMore";

function TheHiveLayout() {
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

export default TheHiveLayout;
