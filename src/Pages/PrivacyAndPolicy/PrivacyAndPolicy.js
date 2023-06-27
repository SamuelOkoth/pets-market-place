import React from "react";
import Section from "./components/Section";
import PrivacyAndPolicyPage from "./components/PrivacyAndPolicyPage";

const PrivacyAndPolicy = () => {
  document.title =
    "Privacy & Policy | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
