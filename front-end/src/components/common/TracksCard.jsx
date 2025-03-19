import React from "react";
import { FaClock, FaVideo, FaDownload, FaStar } from "react-icons/fa";

function TracksCard({
  image,
  heading,
  rating,
  mainHeading,
  price,
  time,
  courses,
  sales,
}) {
  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-sm">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Light Gray Heading with Rating */}
      <div className="flex justify-between items-center bg-gray-100 p-2 mt-2 rounded-md">
        <h4 className="text-gray-600 text-sm font-semibold">{heading}</h4>
        <div className="flex items-center text-yellow-500">
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-lg font-bold mt-2">{mainHeading}</h2>

      {/* Price */}
      <p className="text-lg text-green-600 font-semibold">${price}</p>

      {/* Break Line */}
      <hr className="my-2" />

      {/* Time, Courses & Sales */}
      <div className="flex justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <FaClock /> <span>{time}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaVideo /> <span>{courses} courses</span>
        </div>
        <div className="flex items-center gap-1">
          <FaDownload /> <span>{sales} Sales</span>
        </div>
      </div>

      {/* Join Course Button */}
      {/* Centered Button Wrapper */}
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Join Course
        </button>
      </div>
    </div>
  );
}

export default TracksCard;
