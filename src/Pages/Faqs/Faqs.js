import React from "react";
import Section from "./components/Section";
import FaqContent from "./components/FaqContent";

const Faqs = () => {
  document.title = "FAQs | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
