import React from "react";
import impl from "../assets/impl.gif";


const Implementation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Implementation</h1>
      <div className="border-b-4 border-green-500 w-24 mx-auto mb-8"></div>

      {/* Implementation Content */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            1. Installation of touch-free washrooms, sanitary pad vending
            machines, and CCTV surveillance.
            <br />
            2. Establishment of Nirmal Kitchen with a focus on healthy food and
            sustainable practices.
            <br />
            3. Deployment of Hevani ionizers and collaboration with healthcare
            institutions for OPD services.
            <br />
            4. Recruitment and training of staff for facility management and
            supervision.
            <br />
            5. Integration of advanced digital advertising screens for effective
            ad campaigns.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={impl}
            alt="Implementation"
            className="rounded-lg shadow-lg w-[500px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Implementation;
