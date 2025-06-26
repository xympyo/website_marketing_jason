import React from "react";
import Header from "./component/Header";
import Hero from "./component/the-hive/Hero";
import HeroContent from "./component/the-hive/HeroContent";

function TheHiveLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContent />
    </div>
  );
}

export default TheHiveLayout;
