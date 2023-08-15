import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Card, Col, Input, Row, CardBody } from "reactstrap";

import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signupSchema } from "../../utils/validations";
import signUpImage from "../../assets/images/auth/sign-up.png";
import { signUpAsync } from "../../store/reducers/auth.reducer";

const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const onSubmit = async data => {
    if (data?.terms === "" || data?.terms === false) {
      toast.warning("Terms and conditions are Required");
      return
    }
    setLoading(true);
    try {
      const sendData = {
        user: {
          email: data.email,
          password: data.password,
        }
      }
      await dispatch(signUpAsync(sendData));
      toast.success("User created successfully");
      navigate("/signin");
    } catch (error) {
      console.log("Error Sign Up Form:", error);
      toast.error(error?.response?.data?.status?.message);
    } finally {
      setLoading(false);
    }
  };

  document.title = "Sign Up | Pets HelpFul";
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
                      <Row className="align-items-center">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                                style={{
                                  height: "100px",
                                }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{
                                  height: "100px",
                                }}
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  Pets HelpFul
                                </p>
                              </div>
                              <div>
                                <ul className="blog-social-menu list-inline mb-0 text-center">
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-primary-subtle text-primary"
                                    >
                                      <i className="uil uil-facebook-f"></i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-success-subtle text-success"
                                    >
                                      <i className="uil uil-whatsapp"></i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-primary-subtle text-primary"
                                    >
                                      <i className="uil uil-linkedin-alt"></i>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-danger-subtle text-danger"
                                    >
                                      <i className="uil uil-envelope"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <br />
                              <p className="text-center ">or</p>

                              <Form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Username
                                  </label>
                                  <Controller
                                    name="username"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="text"
                                        className="form-control"
                                        id="usernameInput"
                                        placeholder="Enter your username"
                                      />
                                    )}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="Enter your email"
                                      />
                                    )}
                                  />
                                  {errors?.email && <span className="">{errors?.email?.message}</span>}
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="passwordInput" className="form-label">
                                    Password
                                  </label>
                                  <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="password"
                                        autoComplete="true"
                                        className="form-control"
                                        id="passwordInput"
                                        placeholder="Enter your password"
                                      />
                                    )}
                                  />
                                  {errors?.password && <span className="">{errors?.password?.message}</span>}
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <Controller
                                      name="terms"
                                      control={control}
                                      defaultValue=""
                                      render={({ field }) => (
                                        <Input
                                          {...field}
                                          className="form-check-input"
                                          type="checkbox"
                                          id="flexCheckDefault"
                                        />
                                      )}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      I agree to the{" "}
                                      <Link
                                        to="#"
                                        className="text-white text-decoration-underline"
                                      >
                                        Terms and conditions
                                      </Link>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    {loading ? <Icon icon="svg-spinners:180-ring" color="#a6652c" fontSize={16} /> : "Sign Up"}
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
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

export default SignUp;
