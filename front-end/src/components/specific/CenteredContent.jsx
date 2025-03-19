import React from "react";
import ArrowImg from "../../assets/Images/arrow.png";
import LampImg from "../../assets/Images/lamp.png";

function CenteredContent() {
  return (
    <div className="w-full flex items-center justify-between px-10 py-10">
      {/* Left Image (Hidden on Mobile) */}
      <div className="w-1/4 flex justify-start hidden sm:flex">
        <img src={ArrowImg} alt="Arrow" className="w-32 h-32 object-contain" />
      </div>

      {/* Centered Text (Always Visible) */}
      <div className="text-center w-full sm:w-1/2">
        <h3 className="text-4xl font-bold text-black mb-2">Our Tracks</h3>
        <p className="text-black opacity-80 text-xl">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      {/* Right Image (Hidden on Mobile) */}
      <div className="w-1/4 flex justify-end hidden sm:flex">
        <img src={LampImg} alt="Lamp" className="w-32 h-32 object-contain" />
      </div>
    </div>
  );
}

export default CenteredContent;
