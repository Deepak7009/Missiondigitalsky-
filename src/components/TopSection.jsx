import React from "react";

const TopSection = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-900 font-bold">
              {/* Placeholder for logo */}
              <span className="text-xl font-extrabold">M</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-semibold tracking-wide uppercase">
                Mission Digital Sky
              </h1>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi-tech Bus Stand
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-green-300">
          Development of the society
        </p>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-sm uppercase tracking-widest font-semibold">
            Presented by:
          </p>
          <p className="text-base md:text-lg font-medium mt-1">
            Mission Digital Sky <br />
            <span className="text-sm font-light">Private Limited</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
