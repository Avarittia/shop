import React, { useState } from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Row, Col, Button, Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../Context/useLogout";
import { useAuthContext } from "../Context/useAuthContext";
import Category from "./Category";
// import { cartContext } from "../Context/CartContext";

const Navigation = () => {
  const navigate = useNavigate();

  const { logout } = useLogout();

  const { user } = useAuthContext();
  // const Cart = useContext(cartContext);
  // const CartState = Cart.state;
  const [searchKey, setSearchKey] = useState("");

  const handleClick = () => {
    navigate("/login");
    logout();
  };

  const searchProduct = (e) => {
    e.preventDefault();
    window.location = "/search/" + searchKey;
  };

  return (
    <div>
      <div style={{ backgroundColor: "#333333" }} className="py-3">
        <Container className="d-flex justify-content-between align-items-center top-navigate">
          <p className="text-light nav-para">
            SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
            <span>
              <Link
                style={{
                  fontWeight: "bold",
                  color: "#FE9126",
                  textDecoration: "none",
                }}
                to="/products"
              >
                SHOP NOW
              </Link>
            </span>
          </p>
          <div
            className="d-flex justify-content-evenly align-items-center account"
            width={"100%"}
            style={{ gap: "8px" }}
          >
            {" "}
            <div>
              <Link
                style={{
                  paddingLeft: "1rem",
                  textDecoration: "none",
                  fontWeight: "600 ",
                  color: "white",
                }}
                to="/contact"
              >
                Help
              </Link>
            </div>
            <div>
              {user ? (
                <div className="text-white" style={{ fontWeight: "500" }}>
                  <Link
                    to="/profile"
                    style={{
                      paddingLeft: "1rem",
                      textDecoration: "none",
                      fontWeight: "600 ",
                      color: "white",
                    }}
                  >
                    My Account
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    style={{
                      paddingLeft: "1rem",
                      textDecoration: "none",
                      fontWeight: "600 ",
                      color: "white",
                    }}
                    to="/register"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
            <div>
              {user ? (
                <div className="mt-0">
                  <button
                    style={{
                      backgroundColor: "#fe9126",
                      border: "1px solid #fe9126",
                      borderRadius: "0",
                      color: "white",
                      fontWeight: "500",
                    }}
                    onClick={handleClick}
                    className="logout-btn mt-0"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link
                    style={{
                      paddingLeft: "1rem",
                      textDecoration: "none",
                      fontWeight: "600 ",
                      color: "white",
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/cart"
            className="d-flex align-items-center justify-content-evenly"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#fe9126",
              textDecoration: "none",
            }}
          >
            {user ? (
              <Button
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                  borderColor: "#fe9126",
                }}
                variant="outline-primary"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="#fe9126"
                  className="cart"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
              </Button>
            ) : null}
          </Link>
        </Container>
      </div>
      <Container>
        <Row className="py-5 align-items-center">
          <Col
            sm={12}
            md={4}
            lg={4}
            style={{ fontSize: "1rem", textAlign: "center" }}
          >
            <FaPhoneAlt /> Order online or call us : (+0123) 234 567
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "center" }}
            className="pt-3"
          >
            <Link
              style={{
                color: "#fe9126",
                textDecoration: "none",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
              to="/"
            >
              SUPER MARKET
            </Link>
          </Col>
          <Col
            sm={12}
            md={4}
            lg={4}
            style={{ textAlign: "center" }}
            className="pt-3"
          >
            <form
              style={{
                width: "100%",
                textAlign: "center",
                paddingLeft: "10px",
              }}
              className="d-flex flex-row py-0 justify-content-center align-items-center"
              onSubmit={searchProduct}
            >
              <input
                type="text"
                style={{ width: "80%", paddingLeft: "1rem", height: "45px" }}
                placeholder="Search Product..."
                onChange={(e) => setSearchKey(e.target.value)}
                className="py-0"
              />
              <Button
                className="mt-0 search-btn border"
                style={{
                  height: "45px",
                  borderRadius: "0",
                  backgroundColor: "#fe9126",
                }}
                type="submit"
              >
                <FaSearch />
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#fe9126", height: "" }}>
        <Container fluid>
          <Navbar bg={"#fe9126"} expand="lg">
            <Container fluid>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ms-auto"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Category />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </Container>
    </div>
  );
};

export default Navigation;
