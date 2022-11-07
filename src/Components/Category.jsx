import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";

const Category = () => {
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/category";
  const [link, setLink] = useState([]);
  // console.log(link)
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
        setLink(response.data.data);
      });
  }, []);

  return (
    <Container fluid className="p-0 m-0">
      <Nav
        key={link.id}
        className="ms-0 me-auto my-2 my-lg-0 d-flex justify-content-evenly align-items-center text-center"
      >
        <Nav.Link href="/" className="ms-5 text-light">
          Home
        </Nav.Link>
        <Nav.Link href="/products" className="ms-5 text-light">
          Products
        </Nav.Link>
        {link.map((el) => {
          return (
            <Nav.Link key={el.id} href={`${el.id}`} className="ms-5 text-light">
              {el.title}
            </Nav.Link>
          );
        })}

        <Nav.Link href="/contact" className="ms-5 text-light">
          Contact
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Category;
