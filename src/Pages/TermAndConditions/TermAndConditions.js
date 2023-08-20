import React from "react";
import Section from "./components/Section";
import PrivacyAndPolicyPage from "./components/TermAndConditionsPage";

const TermAndConditions = () => {
  document.title =
    "Term & Conditions | Pets HelpFul";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default TermAndConditions;
