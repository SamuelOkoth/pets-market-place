import React from "react";
import Section from "./components/Section";
import PrivacyAndPolicyPage from "./components/PrivacyAndPolicyPage";

const PrivacyAndPolicy = () => {
  document.title =
    "Privacy & Policy | Pets HelpFul";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
