import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/specific/Banner";
import Footer from "../components/Layout/Footer";
import SkillsCareerSection from "../components/specific/SkillsCareerSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SkillsCareerSection />
      <Footer />
    </>
  );
}

export default Home;
