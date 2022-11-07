import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import items from "../Data/personalcare.json";

const PersonalCare = () => {
  return (
    <>
      <Container
        fluid
        className="py-4 px-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container className="">
          <Link
            style={{
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3399cc",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              <FaHome />
            </span>{" "}
            <span className="px-1 pt-1">Home</span>
          </Link>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            Groceries
          </span>
        </Container>
      </Container>
      <Container>
        <Row fluid className="px-0 g-5">
          <Col lg={4} md={12} sm={12} className="px-5 g-3">
            <Sidebar />
          </Col>

          <Col lg={8} md={12} sm={12} className="p-3">
            <Container className="p-5">
              <Row>
                {items.map((item) => {
                  return (
                    <Col lg={4} className="g-5">
                      <Link
                        to="/products"
                        style={{ textDecoration: "none", color: "black" }}
                        className="align-items-center d-flex justify-content-center"
                      >
                        <Card
                          style={{
                            height: "350px",
                            gap: "2rem",
                            borderRadius: "0",
                            width: "250px",
                            textAlign: "center",
                          }}
                          className="d-flex flex-column justify-content-center align-items-center py-3 card"
                        >
                          <Card.Img
                            variant="top"
                            src={item.images}
                            height="150px"
                            width="150px"
                            style={{ objectFit: "cover", width: "150px" }}
                          />
                          <Card.Body style={{ width: "100%" }}>
                            <Card.Title
                              className="text-center"
                              style={{
                                fontSize: ".9rem",
                                fontWeight: "500",
                                fontSize: "18px",
                              }}
                            >
                              {item.name}
                            </Card.Title>
                            <Card.Title
                              className="text-center"
                              style={{
                                fontSize: ".9rem",
                                fontWeight: "500",
                                fontSize: "18px",
                              }}
                            >
                              ${item.price}
                            </Card.Title>
                            <Link to="/products/285">
                              <Button
                                className="w-100 add-cart-button"
                                style={{
                                  backgroundColor: "#3399cc",
                                  border: "none",
                                  borderRadius: "0",
                                }}
                              >
                                Add To Cart
                              </Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PersonalCare;
