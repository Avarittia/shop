import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaPhoneAlt,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
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
            Contact
          </span>
        </Container>
      </Container>
      <Container fluid>
        <Row className="mt-5">
          <Col lg={6} className="p-0">
            <div className="">
              <iframe
                title="asdf"
                src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                &q=Space+Needle,Seattle+WA"
                style={{ border: 0, height: "600px", width: "100%" }}
              ></iframe>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div style={{ width: "" }}>
              <h2 className="text-center">Leave a Message</h2>

              <form
                action="#"
                method="post"
                className="d-flex flex-column justify-content-evenly align-items-center p-5"
                style={{ height: "600px" }}
              >
                <input
                  className=""
                  type="text"
                  id="input-25"
                  name="Name"
                  placeholder="Your Name "
                  required
                  style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "bold",
                    padding: "5px 0 5px 10px ",
                  }}
                />

                <input
                  className=""
                  type="email"
                  id="input-26"
                  name="Email"
                  placeholder="Your Email "
                  required
                  style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "bold",
                    padding: "5px 0 5px 10px ",
                  }}
                />

                <textarea
                  name="Message"
                  placeholder="Your message here..."
                  required=""
                  style={{
                    width: "100%",
                    height: "300px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                ></textarea>
                <input
                  type="button"
                  value="Submit"
                  style={{
                    width: "100%",
                    height: "40px",
                    background: "black",
                    fontWeight: "bold",
                    color: "white",
                  }}
                />
              </form>
            </div>
          </Col>
        </Row>
        <div
          className="position-absolute p-5"
          style={{ top: "35%", left: "29.5%", backgroundColor: "#3399cc" }}
        >
          <div
            className=" d-flex flex-column justify-content-start align-items-start p-3"
            style={{ backgroundColor: "#3399cc", border: "1px solid white" }}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "2rem" }}>
              Contact Info
            </h3>
            <p style={{ fontWeight: "bold" }}>
              1234k Avenue, 4th block, New York City.
            </p>
            <ul
              className="d-flex flex-column text-light "
              style={{ listStyle: "none", gap: "1.5rem" }}
            >
              <li style={{ backgroundColor: "" }}>
                <i className="fa fa-envelope" aria-hidden="true">
                  <FaEnvelope />
                </i>
                <a
                  href="mailto:info@example.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  info@example.com
                </a>
              </li>
              <li
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <i className="fa fa-phone" aria-hidden="true">
                  <FaPhoneAlt />
                </i>
                +(0123) 232 232
              </li>
            </ul>
            <div className="">
              <ul
                className="d-flex"
                style={{ listStyle: "none", gap: "1.5rem" }}
              >
                <li style={{ backgroundColor: "white" }} className="p-2">
                  <Link to="#" style={{ color: "blue" }}>
                    <FaFacebook />
                  </Link>
                </li>
                <li style={{ backgroundColor: "white" }} className="p-2">
                  <Link to="#" style={{ color: "orange" }}>
                    <FaRss />
                  </Link>
                </li>
                <li style={{ backgroundColor: "white" }} className="p-2">
                  <Link to="#" style={{ color: "black" }}>
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
