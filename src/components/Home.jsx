import React from "react";
import TopSection from "./TopSection";
import Introduction from "./Introduction";
import Objectives from "./Objectives";
import Implementation from "./Implementation";
import Benefits from "./Benefits";
import Conclusion from "./Conclusion";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <TopSection />
      <Introduction />
      <Objectives />
      <Implementation />
      <Benefits />
      <Conclusion />
      <ContactUs />
    </div>
  );
};

export default Home;
