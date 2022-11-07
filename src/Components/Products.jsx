import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataMapping from "./DataMapping";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const URL =
    "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);
  // console.log(products);
  useEffect(() => {
    // axios
    //   .get(URL, {
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
    //       "Warehouse-Id": "1",
    //     },
    //   })
    //   .then((response) => {
    //     setProducts(response.data.data);
    //     console.log(response.data.data);
    //   });
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(URL, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
        },
      });
      setProducts(res.data.data);
      setLoading(false);
      // console.log(res.data.data);
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            Products
          </span>
        </Container>
      </Container>
      <Container>
        <Row fluid className="px-0 g-5">
          <Col lg={4} md={12} sm={12} className="px-5 g-3">
            <Sidebar />
          </Col>

          <Col lg={8} md={12} sm={12} className="p-3">
            <select
              className="form-select ms-auto"
              id="floatingSelect"
              aria-label="Floating label select example"
              style={{ width: "300px", borderRadius: "0" }}
              onChange={(e) => {
                const selectedProducts = e.target.value;
                setProductPerPage(selectedProducts);
              }}
            >
              <option value="9" defaultValue={9}>
                items on page: 9
              </option>
              <option value="32">items on page: 32</option>
              <option value="64">items on page: 64</option>
              <option value="107">Display all items</option>
            </select>
            <DataMapping products={currentProduct} loading={loading} />
            <Pagination
              productPerPage={productPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
