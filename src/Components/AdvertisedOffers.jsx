import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import items from "../Data/groceries.json";

const AdvertisedOffers = () => {
  return (
    <Container className="p-5">
      <h4> Advertised this week</h4>
      <p style={{ color: "#999999" }}>
        We've pulled together all our advertised offers into one place, so you{" "}
        <br /> won't miss out on a great deal.
      </p>
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
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      {item.name}
                    </Card.Title>
                    <Card.Title
                      className="text-center"
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      ${item.price}
                    </Card.Title>
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
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AdvertisedOffers;
