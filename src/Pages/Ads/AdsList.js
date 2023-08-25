import React from "react";
import { Col, Container, Row } from "reactstrap";
// import Section from "../../Jobs/JobList2/Section";
import Popular from "./components/Popular";
import Fliter from "./components/Fliter";
import Sidebar from "./components/SideBar";
import Ad from "./components/Ad";
import Pagination from "./components/Pagination";
import HeroSwiper from "./components/HeroSwiper"

const AdsList = () => {
  document.title = "Ads List | Petshelpful";
  return (
    <React.Fragment>
      {/* <Section /> */}
      <HeroSwiper/>
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <Fliter />
                <Popular />
                <Ad />
                <Pagination />
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdsList;
