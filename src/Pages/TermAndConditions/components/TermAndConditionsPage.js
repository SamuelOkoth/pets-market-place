import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const TermAndConditionsPage = () => {
  const privacyandpolicyPage = [
    {
      id: 1,
      policyTitle: "When using the website, you acknowledge and agree to the following:",
      policyRules: [
        {
          id: 1,
          policyInnerRule:
            " The website does not specifically advertise or sell any products. It provides a service that enables users to create and manage their own advertisements on the website."
        },
        {
          id: 2,
          policyInnerRule:
            " You commit to adhering to the teachings of Islamic law and general etiquette in all your posts."
        },
        {
          id: 3,
          policyInnerRule:
            " You will not use an inappropriate username."
        },
        {
          id: 4,
          policyInnerRule:
            " You will not advertise using multiple accounts on the website."
        },
        {
          id: 5,
          policyInnerRule:
            " You will ensure the accuracy of information provided during registration, such as contact numbers, email addresses, or any other details."
        },
        {
          id: 6,
          policyInnerRule:
            "You will adhere to the website's sections and post each advertisement in the appropriate category, refraining from adding links to other websites unless it serves the purpose of the advertisement."
        },
        {
          id: 7,
          policyInnerRule:
            "You will refrain from posting non-serious requests or offers and from publishing advertisements unrelated to buying and selling within the website's scope."
        },
        {
          id: 8,
          policyInnerRule:
            "You will not undervalue or disrespect members' advertisements."
        },
        {
          id: 9,
          policyInnerRule:
            " You will not bid on a specific advertisement using multiple accounts."
        },
        {
          id: 10,
          policyInnerRule:
            "Accounts that remain unused for a full year will be deleted."
        },
        {
          id: 11,
          policyInnerRule:
            "Business transactions occur directly between members without any liability on the website. The website warns against money transfers and advises direct interaction between the parties involved."
        },
        {
          id: 12,
          policyInnerRule:
            "The website management receives a fee for the type of advertisement published through the website, and the advertiser is obligated to pay it. The responsibility for this fee lies with the advertiser, and the website management has the right to claim it."
        },
        {
          id: 13,
          policyInnerRule:
            "The website management reserves the right to change the value of advertisements at any time."
        },
        {
          id: 14,
          policyInnerRule:
            "The website may update, modify, add, or delete any of the provisions of this agreement."
        },
        {
          id: 15,
          policyInnerRule:
            "By accepting the terms of the website's terms of use, you signify your agreement and commitment to all the provisions of this agreement. Any violation of these provisions gives the website management the right to impose an appropriate penalty."
        },
        {
          id: 16,
          policyInnerRule:
            "You bear full legal responsibility for all your posts before official authorities, without any liability on the website."
        }
      ]
    },
   
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                    )
                  )}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TermAndConditionsPage;
