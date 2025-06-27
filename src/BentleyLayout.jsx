import React from "react";
import Hero from "./component/bentley-house/Hero";
import Header from "./component/Header";
import HeroContent from "./component/bentley-house/HeroContent";
import Footer from "./component/Footer";

function BentleyLayout() {
  return (
    <div>
      <Hero />
      <Header />
      <HeroContent />
      <Footer />
    </div>
  );
}

export default BentleyLayout;
