import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { addToCart } from "../Components/AddToCart";

const Search = () => {
  const params = useParams();
  const searchKey = params.searchKey;
  const [loading, setLoading] = useState(true);

  const [results, setResults] = useState();
  // console.log(results);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      );
      const data = await response.json();

      const resultData = data.data.filter((items) => {
        const title = items.title;
        const searchArray = searchKey.split("");
        const reg = new RegExp("(?=.*" + searchArray.join(")(?=.*") + ")", "i");

        if (reg.test(title)) {
          return items;
        }
      });
      setLoading(false);
      setResults(resultData);
    };
    fetchData();
  }, [searchKey]);

  if (loading) {
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
              Search
            </span>
          </Container>
        </Container>
        <div className="parent">
          <div className="loader"></div>
        </div>
      </>
    );
  }

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
            Search
          </span>
        </Container>
      </Container>
      <Container>
        <h4 className="text-center py-4">
          {results.length} items found for keyword: &apos;{searchKey}&apos;
        </h4>
      </Container>
      <Container>
        <Row>
          {results.map((items) => {
            return (
              <Col lg={4} md={6} sm={12} className="g-5 px-4" key={items.id}>
                <Card
                  style={{ height: "350px", gap: "2rem", borderRadius: "0" }}
                  className="d-flex flex-column justify-content-center align-items-center py-3"
                >
                  <Link to={`/products/${items.id}`}>
                    <Card.Img
                      variant="top"
                      src={items.images[0].imageName}
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
                      {items.title}
                    </Card.Title>
                    <Card.Title
                      className="text-center mb-2"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      <span>$</span>
                      <span>{items.unitPrice[0].sellingPrice}</span>
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
                          addToCart(e, items.id, items.unitPrice[0].id);
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
          <ToastContainer />
        </Row>
      </Container>
    </>
  );
};

export default Search;
