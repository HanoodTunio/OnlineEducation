import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/specific/Banner";
import Footer from "../components/Layout/Footer";
import SkillsCareerSection from "../components/specific/SkillsCareerSection";
import CenteredContent from "../components/specific/CenteredContent";
import TracksCard from "../components/common/TracksCard";
import TracksCardSection from "../components/specific/TracksCardSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SkillsCareerSection />
      <div className="w-screen">
        <CenteredContent />
      </div>{" "}
      <TracksCardSection />
      <Footer />
    </>
  );
}

export default Home;
