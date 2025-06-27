import React from "react";
import Header from "./component/Header";
import Hero from "./component/the-hive/Hero";
import HeroContent from "./component/the-hive/HeroContent";
import WhatsAppButton from "./component/WhatsAppButton";
import Footer from "./component/Footer";

function TheHiveLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContent />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default TheHiveLayout;
