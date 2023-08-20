
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Blog images
import ClientImage1 from "../../../assets/images/reviews/client-1.png";
import ClientImage2 from "../../../assets/images/reviews/client-2.png";
import ClientImage3 from "../../../assets/images/reviews/client-4.png";
import ClientImage4 from "../../../assets/images/reviews/client-3.png";
import { Col, Container, Row } from "reactstrap";

const Testimonial = () => {
  const adSwiper = [
    {
    id: 1,
    image: ClientImage1,
    review: "I liked your quick response and cooperation. Your account is well organized and beautifully designed. I was impressed by the clear adoption details for each pet. 💓",   
    name: "Dfordeema"
      
    },
    {
      id: 2,
      image: ClientImage2,
    review: "Excellent and fast service, Mashallah. I thank you for it and for your cooperation and support. May Allah reward you with goodness. 👍🤍",   
    name: "Meed"
    },
    {
      id: 3,
      image: ClientImage3,
    review: "Thank you so much, Pets Helpful, for the quick publication of the adoption ads I sent to you. Your approach and presentation of adoption cases are very beautiful. May Allah reward you abundantly. 💕💕",   
    name: "Mona"
      },
    {
      id: 4,
      image: ClientImage4,
    review: "Ten out of ten.",   
    name: "Ahmed Altaweel"
    }
  ];

  SwiperCore.use([Autoplay, Pagination]);
  return (
      <React.Fragment>
          <Container>
            <Row className="justify-content-center py-5">
            <Col lg={7}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-4">Testimonials</h3>
                <p className="para-desc text-muted mx-auto">
                 Our Company Testimonial
                </p> 
              </div>
            </Col>
          </Row>
          </Container>
          
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        autoHeight={true}
        pagination={{ clickable: true }}
      >
              <div className="swiper-wrapper">
                  
                 
          {(adSwiper || []).map((adSwiperDetails, key) => (
              <SwiperSlide key={key}>
                   <Container>
                      <Row className="text-center justify-content-center" >
                          <Col style={{ height: "100px", maxWidth: "800px" }}>
                          <p>"{adSwiperDetails.review}"</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="text-end">
                              <img
                                src={adSwiperDetails.image}
                                alt={adSwiperDetails.name}
                                className="img-fluid rounded-full"
                                style={{
                                    height:"60px",
                                    width:"60px",
                                    objectFit: "cover",
                                    borderRadius: "50%"
                                }}
                              />
                          </Col>
                          <Col className="justify-content-start align-items-center d-flex">{adSwiperDetails.name}</Col>
                      </Row>
                      <Row>
                          <Col >
                    <br />
                    <br />
                    <br />
                  </Col>
              </Row>
                  </Container>
            
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </React.Fragment>
  );
};

export default Testimonial;
