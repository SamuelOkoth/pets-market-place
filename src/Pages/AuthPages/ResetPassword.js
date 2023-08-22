import React from "react";

//Import Image
import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import resetPasswordImage from "../../assets/images/auth/reset-password.png";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  document.title =
    "Reset Password | Pets HelpFul";
  const {t} = useTranslation();
  return (
   <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                                style={{ height: "100px" }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{ height: "100px" }}
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={resetPasswordImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="text-center mb-4">
                              <h5>{t("reset_password_heading")}</h5>
                              <p className="text-white-50">
                                {t("reset_password_subheading")}
                              </p>
                            </div>
                            <Form className="auth-form text-white">
                              <div
                                className="alert alert-warning text-center mb-4"
                                role="alert"
                              >
                                {t("reset_password_alert")}
                              </div>
                              <div className="mb-4">
                                <label className="form-label" htmlFor="email">
                                  {t("reset_password_email_label")}
                                </label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder={t("reset_password_email_placeholder")}
                                />
                              </div>
                              <div className="mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-white w-100"
                                >
                                  {t("reset_password_button")}
                                </button>
                              </div>
                            </Form>
                            <div className="mt-5 text-center text-white-50">
                              <p>
                                {t("reset_password_remembered_question")}
                                <Link
                                  to="/signin"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  {t("reset_password_login_link")}{" "}
                                </Link>
                              </p>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
