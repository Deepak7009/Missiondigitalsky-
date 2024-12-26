import React from "react";
import intro from "../assets/intro.gif"

const Introduction = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Introduction</h1>
      <div className="border-b-4 border-green-500 w-24 mx-auto mb-8"></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={intro}
            alt="Introduction Image"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <p className="text-xl font-bold text-gray-700 leading-relaxed">
            Mission Digital Sky is proud to present a pioneering initiative
            aimed at revolutionizing public transportation infrastructure while
            prioritizing women’s safety, health, and digital empowerment. Our
            project entails the transformation of a conventional bus stop into a
            state-of-the-art facility designed to provide women with a luxurious
            and secure commuting experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
