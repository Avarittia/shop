import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/useAuthContext";
import { useLogout } from "../Context/useLogout";

const Footer = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/login");
    logout();
  };
  return (
    <Container
      fluid
      className="py-5 text-light mt-5"
      style={{ backgroundColor: "#2b2a2a" }}
    >
      <Container>
        <Row className="py-5">
          <Col sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Contact</h3>
            <div style={{ color: "#fa9126" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-3">
                  <FaMapMarkerAlt />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "500",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                  >
                    1234k Avenue, 4th block, New York City.
                  </span>
                </li>
                <li className="py-3">
                  <GrMail />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                  >
                    info@example.com
                  </span>
                </li>
                <li className="py-3">
                  <FaPhoneAlt />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "500",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                  >
                    +1234 567 567
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Information</h3>
            <div style={{ color: "#fa9126" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/contact"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    {" "}
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/contact"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Short Codes
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    FAQ's
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Special Products
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Category</h3>
            <div style={{ color: "#fa9126" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/142"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Groceries
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/6"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Household
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Personal Care
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/9"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Packaged Food
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/147"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Beverages
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Profile</h3>
            <div style={{ color: "#fa9126" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/products"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Store
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    to="/cart"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    My Cart
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  {user ? (
                    <Link
                      style={{
                        color: "#AFAFAF",
                        textDecoration: "none ",
                        fontWeight: "bold",
                        paddingLeft: ".9rem",
                        fontSize: "1rem",
                      }}
                      className="footer-link"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      style={{
                        color: "#AFAFAF",
                        textDecoration: "none ",
                        fontWeight: "bold",
                        paddingLeft: ".9rem",
                        fontSize: "1rem",
                      }}
                      className="footer-link"
                      onClick={handleClick}
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li className="py-2">
                  {user ? null : (
                    <>
                      <FaArrowRight />
                      <Link
                        style={{
                          color: "#AFAFAF",
                          textDecoration: "none ",
                          fontWeight: "bold",
                          paddingLeft: ".9rem",
                          fontSize: "1rem",
                        }}
                        className="footer-link"
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
