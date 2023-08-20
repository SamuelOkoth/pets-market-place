import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";

const PostForm = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Ad!</h5>
              </div>
            </Col>
          </Row>
          <form action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Pet Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Name"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Pet Description
                    </Label>
                    <textarea
                      className="form-control"
                      id="jobdescription"
                      rows="3"
                      placeholder="Enter Pet Description"
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                <div className="mb-4">
                  <Label htmlFor="email" className="form-label">
                    Pet Gender 
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="petGender "
                    placeholder="Pet Gender "
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-4">
                  <Label htmlFor="phoneAge" className="form-label">
                   Pet Age
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="petAge"
                    placeholder="Pet Age"
                  />
                </div>
              </Col>



                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Email Address (optional)
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      Phone Number (optional)
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </Col>
               
                <Col lg={4}>
                  <div className="mb-4">
                    <label htmlFor="jobtype" className="form-label">
                      Pet Type
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtype"
                      placeholder="Pet type"
                    />
                  </div>
                </Col>

                 <Col lg={4}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-ad-type"
                      className="form-label"
                    >
                      Type of Ad
                    </label>
                    <select
                      className="form-select"
                      data-trigger
                      name="choices-ad-type"
                      id="choices-ad-type"
                      aria-label="Default select example"
                    >
                      <option value="20">Missing</option>
                      <option value="25">Temporary adoption</option>
                      <option value="30">Marriage</option>
                      <option value="0">Free rescue</option>
                      <option value="30">Sale</option>
                      <option value="20">Adoption</option>
                    </select>
                  </div>
                </Col>
               
                <Col lg={4}>
                  <div className="mb-4">
                    <label htmlFor="salary" className="form-label">
                      Pet Price (optional)
                    </label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petPrice"
                      placeholder="Pet Price"
                    />
                  </div>
                </Col>
               
                
                
                <Col lg={6}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-single-location"
                      className="form-label"
                    >
                      Country
                    </label>
                    <select
                      className="form-select"
                      data-trigger
                      name="choices-single-location"
                      id="choices-single-location"
                      aria-label="Default select example"
                    >
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                    </select>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="zipcode" className="form-label">
                      Zipcode
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder="Zipcode"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                <div className="mb-4">
                  <Label htmlFor="petImages" className="form-label">
                    Pet Images
                  </Label>
                  <Input
                    type="file"
                    className="form-control"
                    id="petImages"
                  />
                </div>
              </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/myprofile" className="btn btn-success">
                      Back
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Post Now <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </Col>

               
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PostForm;
