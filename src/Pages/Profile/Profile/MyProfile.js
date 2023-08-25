import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./components/LeftSideContent";
import RightSideContent from "./components/RightSideContent";
import Section from "./components/Section";

const MyProfile = () => {
  document.title = "My Profile | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
