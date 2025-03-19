import React from "react";
import BannerImage from "../../assets/Images/Girl.png";
import CardImage1 from "../../assets/Images/puzzle.png";
import CardImage2 from "../../assets/Images/hearts.png";

function NewBanner() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row my-10 px-6 md:px-12 mt-24 overflow-hidden">
      {/* Left Section (Heading + Two Row Divs) */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-32 flex flex-col items-start px-5 md:px-10">
        {/* 1️⃣ Main Heading */}
        <h1 className="text-4xl font-bold text-left">
          Premium
          <span className="text-orange-500">Learning</span> <br />
          Experience
        </h1>

        {/* 2️⃣ Two Row Divs (Each Row Has an Image and a Text Block) */}
        <div className="grid grid-rows-2 gap-4 mt-6">
          {/* First Row */}
          <div className="flex items-center">
            {/* Image Section with Custom Purple Background */}
            <div className="bg-[#4D2C5E] p-3 rounded-lg flex justify-center items-center w-20 h-20">
              <img
                src={CardImage1}
                alt="Puzzle"
                className="w-14 h-14 object-contain"
              />
            </div>
            {/* Text Section (White Background) */}
            <div className="ml-3">
              <h3 className="text-md font-semibold text-gray-800">
                Easily Accessible{" "}
              </h3>
              <p className="text-gray-600 text-sm">
                Learning Will fell Very Comfortable With Courslab.{" "}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center">
            {/* Image Section with Custom Purple Background */}
            <div className="bg-[#4D2C5E] p-3 rounded-lg flex justify-center items-center w-20 h-20">
              <img
                src={CardImage2}
                alt="Hearts"
                className="w-14 h-14 object-contain"
              />
            </div>
            {/* Text Section (White Background) */}
            <div className="ml-3">
              <h3 className="text-md font-semibold text-gray-800">
                Fun learning expe{" "}
              </h3>
              <p className="text-gray-600 text-sm">
                Learning Will fell Very Comfortable With Courslab.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Main Banner Image) */}
      <div className="w-full md:w-1/2 order-1 flex justify-center md:justify-end mt-12 px-5 md:px-10">
        <img
          src={BannerImage}
          className="w-[300px] h-auto object-contain rounded-md"
          alt="Girl"
        />
      </div>
    </div>
  );
}

export default NewBanner;
