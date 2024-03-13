import React from "react";
import Nav from "../components/Nav";
import FooterDiv from "../components/Footer";
import Hero from "../components/Hero";
import GraphSection from "../components/graphSection";
import CardSection from "../components/cardSection";
import CommSection from "../components/CommSection";
const about = () => {
  return (
    <>
      <Nav />
      <Hero />
      <GraphSection />
      <CardSection />
      <CommSection />
      <FooterDiv />
    </>
  );
};

export default about;
