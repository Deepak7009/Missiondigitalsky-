import React from "react";
import object1 from "../assets/objec1.gif";
import object2 from "../assets/objec2.gif";
import object3 from "../assets/objec3.gif";
import object4 from "../assets/objec4.gif";
import object5 from "../assets/objec5.gif";
import object6 from "../assets/objec6.gif";
import object7 from "../assets/objec7.gif";

const Objectives = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Objectives</h1>
      <div className="border-b-4 border-green-500 w-24 mx-auto mb-8"></div>

      {/* Objective 1 */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={object1}
            alt="Objective 1"
            className="rounded-lg shadow-lg w-[500px] h-[400px] mx-auto lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. ENSURING WOMEN’S SAFETY AND HYGIENE:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Implementation of touch-free washrooms and sanitary pad
            vending machines to address hygiene concerns.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Provision of high-quality sanitary pads free of cost to
            promote menstrual health and hygiene.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Integration of CCTV surveillance systems to enhance security
            and deter potential threats.
          </p>
        </div>
      </div>

      {/* Objective 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full lg:flex lg:justify-center">
          <img
            src={object2}
            alt="Objective 2"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. ENHANCING COMFORT AND SECURITY:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Provision of recliner seating arrangements exclusively for
            women, ensuring comfort during waiting periods.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Closed-guarded environment to mitigate any feelings of
            discomfort or vulnerability.
          </p>
        </div>
      </div>

      {/* Objective 3 */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={object3}
            alt="Objective 3"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. PROMOTING INCLUSIVITY:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Extending facilities to men and transgender individuals,
            fostering inclusivity and societal acceptance.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Installation of washrooms catering specifically to the needs
            of transgender individuals, promoting equality and dignity.
          </p>
        </div>
      </div>

      {/* Objective 4 */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full lg:flex lg:justify-center">
          <img
            src={object4}
            alt="Objective 4"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. INTRODUCING NIRMAL KITCHEN:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Establishment of Nirmal Kitchen offering a diverse range of
            fresh, healthy food and beverages.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Serving food in edible crockery to minimize environmental
            impact and promote sustainability.
          </p>
        </div>
      </div>

      {/* Objective 5 */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={object5}
            alt="Objective 5"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. HEALTH AWARENESS AND PROMOTION:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Deployment of Hevani ionizers for purifying drinking water
            and raising awareness about health and wellbeing.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Collaboration with healthcare institutions to provide free
            OPD facilities for women, ensuring access to essential healthcare
            services.
          </p>
        </div>
      </div>

      {/* Objective 6 */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full lg:flex lg:justify-center">
          <img
            src={object6}
            alt="Objective 6"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. EMPLOYMENT GENERATION:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Creation of employment opportunities for women through roles
            in facility management and supervision.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Empowering women economically and promoting gender equality
            in the workforce.
          </p>
        </div>
      </div>

      {/* Objective 7 */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={object7}
            alt="Objective 7"
            className="rounded-lg shadow-lg mx-auto w-[500px] h-[400px] lg:mx-0"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. DIGITAL ADVERTISING SCREENS:
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Integration of advanced digital advertising screens to
            replace traditional billboards.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Efficient and diverse advertising opportunities, including
            government initiatives and election campaigning.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            &rarr; Offering government services at no cost to support financial
            sustainability and promote public engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
