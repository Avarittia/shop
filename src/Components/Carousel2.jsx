import React from "react";
import { Carousel, Container } from "react-bootstrap";
import carousel from "../Assets/images/b1.jpg";
import carousel2 from "../Assets/images/b3.jpg";
import carousel3 from "../Assets/images/b1.jpg";

const Carousel2 = () => {
  return (
    <Container fluid className="px-0 py-5 mt-5">
      <Carousel indicators={true} controls={false} className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel}
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousel2;
