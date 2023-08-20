import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";

//Import Image
import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../utils/validations";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { signInAsync } from "../../store/reducers/auth.reducer";

const SignIn = () => {
  document.title = "Sign In | Pets HelpFul";

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = async data => {

    setLoading(true);
    try {
      const sendData = {
        user: {
          email: data.username,
          password: data.password,
        }
      }
      await dispatch(signInAsync(sendData));
      toast.success("Log in");
    } catch (error) {
      console.log("Error Sign Up Form:", error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

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
                                style={{
                                  height: "100px"
                                }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{
                                  height: "100px"
                                }}
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Welcome Back !</h5>
                                <p className="text-white-70">
                                  Sign in to continue to Pets HelpFul.
                                </p>
                              </div>
                              <div>
                                <ul className="blog-social-menu list-inline mb-0 text-center">
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-primary-subtle text-primary"
                                    >
                                   <Icon icon="ri:facebook-fill" />
                                    </Link>
                                  </li>
                                  
                                  
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-danger-subtle text-danger"
                                    >
                                   
                                      <Icon icon="grommet-icons:google" />
                                     
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
                                  {errors?.username && <span className="">{errors?.username?.message}</span>}
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
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
                                      name="remember_me"
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
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      Forgot Password?
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    {loading ? <Icon icon="svg-spinners:180-ring" color="#a6652c" fontSize={16} /> : "Sign In"}
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up{" "}
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

export default SignIn;
