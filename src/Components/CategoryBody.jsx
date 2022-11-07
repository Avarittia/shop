import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { addToCart } from "./AddToCart";
import Sidebar from "./Sidebar";

const CategoryBody = () => {
  const params = useParams();
  const categoryID = params.categoryID;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(items);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://uat.ordering-farmshop.ekbana.net/api/v4/category/${categoryID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      setItems(data.data.subcategories);

      setLoading(false);
    };
    fetchProducts();
  }, [categoryID]);

  if (loading) {
    return (
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
            Category
          </span>
        </Container>
        <div className="parent">
          <div className="loader"></div>
        </div>
      </Container>
    );
  }
  return (
    <div>
      {items.length === 0 ? (
        <div>
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
                Category
              </span>
            </Container>
          </Container>
          <Container>
            <Row fluid className="px-0 g-5">
              <Col lg={4} md={12} sm={12} className="px-5 g-3">
                <Sidebar />
              </Col>
              <Col lg={8} md={12} sm={12} className="p-3">
                <h1 className="text-center">
                  "There are no products of this category available at the
                  moment"
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div>
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
                Category
              </span>
            </Container>
          </Container>
          <Container>
            <Row fluid className="px-0 g-5">
              <Col lg={4} md={12} sm={12} className="px-5 g-3">
                <Sidebar />
              </Col>
              <Col lg={8} md={12} sm={12} className="p-3">
                <Row key={items.id}>
                  {items.map((item) => {
                    return (
                      <Col lg={4} md={6} sm={12} className="g-5 px-4">
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
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CategoryBody;
