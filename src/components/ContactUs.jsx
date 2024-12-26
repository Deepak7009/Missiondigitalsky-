import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import WaterBottle from "../images/WaterBottle4.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    company: "",
    businessType: "",
    advertising: "",
    budget: "",
    message: "",
    recaptcha: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.number) newErrors.number = "Phone number is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.advertising)
      newErrors.advertising = "Advertising info is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.recaptcha)
      newErrors.recaptcha = "Please confirm you are not a robot";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      number,
      company,
      businessType,
      advertising,
      budget,
      message,
    } = formData;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const templateParams = {
          name: `${firstName} ${lastName}`,
          email,
          number,
          company,
          businessType,
          advertising,
          budget,
          message,
        };

        const result = await emailjs.send(
          "service_ct1sm8r",
          "template_v037phl",
          templateParams,
          "fn5lz-21UhP48x3t7"
        );

        if (result.status === 200) {
          toast.success("Email sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            company: "",
            businessType: "",
            advertising: "",
            budget: "",
            message: "",
            recaptcha: false,
          });
        } else {
          toast.error("Failed to send email. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="contact min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-100 overflow-hidden">
        <div className=" contact flex justify-center items-center min-h-screen py-8 px-4 bg-gray-100 mt-6">
          <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-6 text-center text-teal-600 font-serif">
              Contact Us
            </h1>
            <ToastContainer />
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-lg font-bold text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-lg font-bold text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">{errors.number}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  Type of Business <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.businessType && (
                  <p className="text-red-500 text-sm">{errors.businessType}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="advertising"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  What do you want to advertise?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="advertising"
                  name="advertising"
                  value={formData.advertising}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.advertising && (
                  <p className="text-red-500 text-sm">{errors.advertising}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  What is your budget? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm">{errors.budget}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-bold text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-3 shadow-inner"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="recaptcha"
                  name="recaptcha"
                  checked={formData.recaptcha}
                  onChange={handleChange}
                  className="form-checkbox border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-inner"
                />
                <label
                  htmlFor="recaptcha"
                  className="ml-2 text-lg font-bold text-gray-700"
                >
                  I'm not a robot
                </label>
                {errors.recaptcha && (
                  <p className="text-red-500 text-sm">{errors.recaptcha}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full font-serif bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 text-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* <div
          className="mt-12 md:mt-0 md:w-1/2 lg:w-1/3 flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={WaterBottle}
            alt="Drippy"
            className="w-full max-w-sm rounded-lg"
          />
        </div> */}
      </div>
    </>
  );
};

export default ContactUs;
