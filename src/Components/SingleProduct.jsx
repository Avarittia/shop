import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { addToCart } from "./AddToCart";

const SingleProduct = () => {
  const params = useParams();
  const productID = params.productID;
  // console.log(productID);

  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(productDetails);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://uat.ordering-farmshop.ekbana.net/api/v4/product/${productID}`,
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
      setProductDetails(data.data);
      // console.log(productDetails);
      setLoading(false);
    };
    fetchProducts();
  }, [productID]);

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
            {"/"}
            <span className="px-2" style={{ fontSize: "1rem" }}>
              {productDetails.title}
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
            <Link
              to="/products"
              style={{
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#3399cc",
              }}
            >
              Products
            </Link>
          </span>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            {productDetails.title}
          </span>
        </Container>
      </Container>
      <Container className="p-5">
        <Container className="d-flex justify-content-center align-items-center flex-column">
          <div>
            <img
              src={productDetails.images[0].imageName}
              alt=""
              width={"500px"}
              height={"500px"}
            />
          </div>
          <div>
            <h4 className="py-3">Name: {productDetails.title}</h4>
            <h4 className="py-3">Category: {productDetails.categoryTitle}</h4>
            <h4 className="py-3">
              Price: $ {productDetails.unitPrice[0].sellingPrice}
            </h4>
            <Button
              className="w-100 add-cart-button"
              style={{
                backgroundColor: "#3399cc",
                border: "none",
                borderRadius: "0",
              }}
              onClick={(e) => {
                addToCart(e, productDetails.id, productDetails.unitPrice[0].id);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </Container>
        <ToastContainer />
      </Container>
    </>
  );
};

export default SingleProduct;
