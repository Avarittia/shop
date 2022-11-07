import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../Assets/images/111.jpg";
import img2 from "../Assets/images/p2.jpg";
import img3 from "../Assets/images/p3.jpg";
import img4 from "../Assets/images/p4.jpg";

const AdSection = () => {
  return (
    <Container>
      <Row className="Ad">
        <Col className=" g-2" lg={6}>
          <Row>
            <Col md={12} >
              <img src={img2} alt="/" lg={12} className="img-fluid img"/>
            </Col>
            <Col sm={6} md={6} lg={6} className="mt-4 pt-2">
              <img src={img3} alt="/" className="img-fluid img" width={"100%"} height={"100%"}/>
            </Col>
            <Col sm={6} md={6} lg={6} className="mt-4 pt-2">
              <img src={img4} alt="/" className="img-fluid img"  width={"100%"} height={"100%"}/>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6} className="g-2 advert">
          <img src={img1} alt="/" className="img-fluid img" width={"100%"}  height={"100%"}/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdSection;
