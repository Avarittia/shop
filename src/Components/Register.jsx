import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { FaCheck, FaTimes, FaInfoCircle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,30}))$/;

const Register = () => {
  //ref

  const userRef = useRef();
  const errRef = useRef();

  //state

  const [user, setUser] = useState("");
  const [validName, setValidname] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [number, setNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  //useEffect

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // console.log(result);
    // console.log(user);
    setValidname(result);
  }, [user]);

  //

  useEffect(() => {
    const result = USER_REGEX.test(lastName);
    // console.log(result);
    // console.log(lastName);
    setValidLastName(result);
  }, [lastName]);

  //

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const result = number.length >= 10;
    setValidNumber(result);
  }, [number]);

  //

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    // console.log(email);
    setValidEmail(email);
  }, [email]);

  const signUp = async (e) => {
    e.preventDefault();
    const successToast = () => {
      toast.success(
        "Sign Up Successful, You'll be redirected to Log In page Now!",
        {
          position: "top-center",
        }
      );
    };
    const mydata = await fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
      {
        method: "POST",
        headers: {
          "warehouse-id": "1",
          "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: user,
          last_name: lastName,
          email: email,
          mobile_number: number,
          password: pwd,
        }),
      }
    );
    const res = await mydata.json();
    // console.log(res);
    if (mydata.status === 201) {
      successToast();
      e.target.reset();
      setTimeout(() => {
        window.location = "/login";
      }, 2500);
    } else {
      setErrMsg(res.errors[0].message);
    }
  };
  return (
    <Container fluid className="px-0">
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
            Register
          </span>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center text-align-center">
        <section className="mt-5">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <h1 style={{ color: "#fe9126" }}>Sign Up</h1>
          <form onSubmit={signUp}>
            <label style={{ fontWeight: "bold" }} htmlFor="username">
              First Name
              <span className={validName ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> 4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/*  */}

            <label style={{ fontWeight: "bold" }} htmlFor="lastname">
              Last Name
              <span className={validLastName ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validLastName || !lastName ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="lastname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              required
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
            />
            <p
              className={
                lastNameFocus && lastName && !validLastName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> 4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/*  */}

            <label style={{ fontWeight: "bold" }} htmlFor="email">
              Email
              <span className={validEmail ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validEmail || !email ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Email address is invalid.
            </p>

            {/*  */}

            <label style={{ fontWeight: "bold" }} htmlFor="phonenumber">
              Phone Number
              <span className={validNumber ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validNumber || !number ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="number"
              required
              id="phonenumber"
              autoComplete="off"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={() => setNumberFocus(true)}
              onBlur={() => setNumberFocus(false)}
            />
            <p
              className={
                numberFocus && number && !validNumber
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Phone Number should have 10 numbers
            </p>

            {/*  */}

            <label style={{ fontWeight: "bold" }} htmlFor="password">
              Password
              <span className={validPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              className={
                pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> 8-24 characters. <br />
              Must include one uppercase and lowercase letters, a number and a
              special character. <br />
              Allowed characters are !, @, #, $, %.
            </p>

            {/*  */}

            <label style={{ fontWeight: "bold" }} htmlFor="password">
              Confirm Password
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="off"
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              className={
                matchFocus && matchPwd && !validMatch
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Password does not match
            </p>
            <button
              className="login-btn"
              style={{
                backgroundColor: "#3399cc",
                border: "none",
                height: "40px",
                color: "white",
              }}
            >
              Register
            </button>
          </form>
          already have an account ?{" "}
          <Link
            to="/login"
            style={{
              color: "#3399cc",
              textDecoration: "none",
              fontSize: "500",
            }}
          >
            Sign In
          </Link>
        </section>
      </Container>
      <ToastContainer/>
    </Container>
  );
};

export default Register;
