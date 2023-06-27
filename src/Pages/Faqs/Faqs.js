import React from "react";
import Section from "./components/Section";
import FaqContent from "./components/FaqContent";

const Faqs = () => {
  document.title = "FAQs | Pets HelpFul";
  return (
    <React.Fragment>
      <Section />
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
