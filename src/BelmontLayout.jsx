import React from "react";
import Hero from "./component/belmont-house/Hero";
import Header from "./component/Header";
import HeroContent from "./component/belmont-house/HeroContent";
import Footer from "./component/Footer";

function BelmontLayout() {
  return (
    <div>
      <Hero />
      <Header />
      <HeroContent />
      <Footer />
    </div>
  );
}

export default BelmontLayout;
