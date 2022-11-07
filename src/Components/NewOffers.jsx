import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { addToCart } from "./AddToCart";

const NewOffers = () => {
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/category/147";

  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
        },
      })
      .then((response) => {
        setItems(response.data.data.subcategories);
      });
  }, []);
  return (
    <Container fluid className="pt-5">
      <h3 className="text-center" style={{ fontSize: "3rem" }}>
        New Offers
      </h3>
      <Container className="py-0 px-5">
        <Row>
          {items.map((item) => {
            return (
              <Col lg={4} md={6} sm={12} className="g-5 px-5">
                <Card
                  style={{
                    height: "350px",
                    gap: "2rem",
                    borderRadius: "0",
                  }}
                  className="d-flex flex-column justify-content-center align-items-center py-3 card"
                >
                  <Link to={`${item.id}`}>
                    {" "}
                    <Card.Img
                      variant="top"
                      src={item.icon}
                      height="150px"
                      width="150px"
                      style={{ objectFit: "cover", width: "150px" }}
                    />
                  </Link>

                  <Card.Body style={{ width: "100%" }}>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: ".9rem", fontWeight: "500" }}
                    >
                      {item.title}
                    </Card.Title>
                    <Card.Title
                      className="text-center mb-2"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      <span>$</span>
                      <span>250</span>
                    </Card.Title>
                    <div className="mt-auto">
                      <Button
                        className="w-100 add-cart-button"
                        style={{
                          backgroundColor: "#3399cc",
                          border: "none",
                          borderRadius: "0",
                        }}
                        onClick={(e) => {
                          addToCart(e, item.id, item.id);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <ToastContainer/>
    </Container>
  );
};

export default NewOffers;

https://github.com/Avarittia/shop.git
