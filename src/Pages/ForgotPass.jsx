import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPass() {
  const [email, setEmail] = useState("");

  const myToast = (msg, type) => {
    toast[type](msg, {
      position: "top-center",
    });
  };
  const resetPass = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const data = await res.json();
    if (res.status === 200) {
      e.target.reset();
      myToast("Password reset link sent to your e-mail", "success");
    } else {
      myToast(data.errors[0].message, "error");
    }
  };

  return (
    <>
      {" "}
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
            Forgot Password
          </span>
        </Container>
      </Container>
      <div className="">
        <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
          <h2 className="text-center pb-3">Forgot Password</h2>
          <p style={{ textAlign: "center", color: "#999999" }} className="pb-3">
            Lost your password? Please enter your email address. You will <br />
            receive a link to create a new password via email.
          </p>

          <section
            className="login-form-grids animated wow slideInUp forgot-password"
            data-wow-delay=".5s"
          >
            <form onSubmit={resetPass}>
              <input
                type="email"
                placeholder="Email Address"
                required=" "
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="error" className="error"></div>
              <input
                type="submit"
                value="Submit"
                className="login-btn"
                style={{
                  backgroundColor: "#3399cc",
                  border: "none",
                  height: "40px",
                  color: "white",
                }}
              />
            </form>
          </section>
          <p className="py-2">
            <Link to="/login" style={{textDecoration:"none", fontWeight:"bold", color:"#fe9126"}}>Sign In</Link> (Or) go back to{" "}
            <Link to="/" style={{textDecoration:"none", fontWeight:"bold", color:"#fe9126"}}>Home</Link>
          </p>
        </Container>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
}
export default ForgotPass;
