import React from "react";
import ben1 from "../assets/beni1.png"
import ben2 from "../assets/ben2.jpg"
import ben3 from "../assets/ben3.jpg"

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Benefits</h1>
      <div className="border-b-4 border-green-500 w-24 mx-auto mb-8"></div>

      {/* Benefits Content */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Benefits</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p><strong>1.</strong> Enhanced safety and hygiene for women commuters.</p>
            <p><strong>2.</strong> Inclusive facilities for men and transgender individuals.</p>
            <p><strong>3.</strong> Promotion of healthy eating habits and environmental sustainability.</p>
            <p><strong>4.</strong> Improved access to healthcare services for women.</p>
            <p><strong>5.</strong> Job creation and economic empowerment for women.</p>
            <p><strong>6.</strong> Efficient and diverse advertising opportunities for government initiatives.</p>
          </div>
        </div>

        {/* Image Box Section */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <img
              src={ben1}
              alt="Benefit 1"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={ben2}
              alt="Benefit 2"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={ben3}
              alt="Benefit 3"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
