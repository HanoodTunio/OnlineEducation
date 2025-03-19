import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/specific/Banner";
import Footer from "../components/Layout/Footer";
import SkillsCareerSection from "../components/specific/SkillsCareerSection";
import CenteredContent from "../components/specific/CenteredContent";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SkillsCareerSection />
      <div className="w-screen">
        <CenteredContent />
      </div>{" "}
      <Footer />
    </>
  );
}

export default Home;
