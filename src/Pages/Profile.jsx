import React, { useEffect, useState, useRef } from "react";
import { Accordion, Container } from "react-bootstrap";
import { FaCheck, FaHome, FaInfoCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAuthContext } from "../Context/useAuthContext";
// import { useLogout } from "../Context/useLogout";

const Profile = () => {
  // const { logout } = useLogout();

  // const { user } = useAuthContext();
  const url = "https://uat.ordering-farmshop.ekbana.net/api/v4/profile";
  const url1 =
    "https://uat.ordering-farmshop.ekbana.net/api/v4/profile/change-password";
  const token = JSON.parse(window.localStorage.getItem("user"));
  const [profile, setProfile] = useState([]);

  const errRef = useRef();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [newPassword, setnewPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const result = pwd;

    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    if (token) {
      fetchProfile();
    } else {
      window.location = "/login";
    }
  }, [token]);

  const fetchProfile = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        "Warehouse-Id": "1",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    console.log(data);
    setProfile(data.data);
    console.log(profile);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const successToast = () => {
      toast.success(
        "Sign Up Successful, You'll be redirected to Log In page Now!",
        {
          position: "top-center",
        }
      );
    };
    const mydata = await fetch(url1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        "new-password": pwd,
        "old-password": matchPwd,
        "confirm-password": newPassword,
      }),
    });
    const res = await mydata.json();
    console.log(res);
    if (mydata.status === 201) {
      successToast();
    } else {
      setErrMsg(res.errors[0].message);
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
            Account
          </span>
        </Container>

      </Container>
      <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <div>
              <img src={profile.image} alt="" className="img-fluid" />
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{profile.firstName}</td>
                </tr>
                <tr>
                  <td>Lastname</td>
                  <td>:</td>
                  <td>{profile.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{profile.email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td>{profile.mobileNumber}</td>
                </tr>
                <tr>
                  <td>Created At</td>
                  <td>:</td>
                  <td>{profile.createdAt}</td>
                </tr>
                <tr>
                  <td>Last Updated</td>
                  <td>:</td>
                  <td>{profile.updatedAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Accordion variant="secondary" className=" ">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Change Password</Accordion.Header>
              <Accordion.Body>
                <form style={{ width: "70%" }} onSubmit={changePassword}>
                  <h2>Edit Profile</h2>
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                    {errMsg}
                  </p>
                  <label htmlFor="password">
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
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    className={
                      pwdFocus && pwd && !validPwd
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FaInfoCircle /> 8-24 characters. <br />
                    Must include one uppercase and lowercase letters, a number
                    and a special character. <br />
                    Allowed characters are !, @, #, $, %.
                  </p>
                  <label htmlFor="confirm-password">
                    Confirm Password
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                      <FaCheck />
                    </span>
                    <span
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    >
                      <FaTimes />
                    </span>
                  </label>

                  <input
                    type="password"
                    id="confirm-password"
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
                  <label htmlFor="new-password">New Password</label>
                  <input
                    type="password"
                    id="new-password"
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                  <button
                    className="login-btn"
                    style={{
                      backgroundColor: "#3399cc",
                      border: "none",
                      height: "55px",
                      color: "white",
                    }}
                  >
                    SUBMIT
                  </button>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <form style={{ width: "70%" }} onSubmit={changePassword}>
            <h2>Edit Profile</h2>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <label htmlFor="password">
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
              id="password"
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
            <label htmlFor="confirm-password">
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
              id="confirm-password"
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
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              onChange={(e) => setnewPassword(e.target.value)}
            />
            <button
              className="login-btn"
              style={{
                backgroundColor: "#3399cc",
                border: "none",
                height: "55px",
                color: "white",
              }}
            >
              SUBMIT
            </button>
          </form> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Profile;
