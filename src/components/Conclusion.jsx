import React from "react";
import concl1 from "../assets/concl1.jpg"
import concl2 from "../assets/concl2.jpg"

const Conclusion = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Conclusion</h1>
      <div className="border-b-4 border-green-500 w-24 mx-auto mb-8"></div>

      {/* Conclusion Content */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-6 mt-4">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <p className="text-xl font-bold text-gray-700 leading-relaxed">
            Mission Digital Sky’s proposal for a hi-tech bus stop represents a
            comprehensive approach to addressing the multifaceted needs of
            modern society, particularly focusing on women’s safety, health, and
            digital empowerment. By leveraging innovative technologies and
            inclusive practices, we aim to create a model that not only enhances
            the commuting experience but also fosters social progress and
            economic growth. We are committed to collaborating with the
            government and relevant stakeholders to bring this vision to
            fruition and make a meaningful impact on the lives of citizens.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 lg:flex lg:justify-center gap-4">
          <div className="flex justify-center mb-4 lg:mb-0 lg:mr-4">
            <img
              src={concl1}
              alt="Benefit 1"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center lg:ml-4">
            <img
              src={concl2}
              alt="Benefit 2"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
