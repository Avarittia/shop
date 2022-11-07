import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/useAuthContext";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import ForgotPass from "../Pages/ForgotPass";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import CategoryBody from "./CategoryBody";
// import Cart from "./Cart";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import Login from "./Login";
import Navigation from "./Navigation";
import Products from "./Products";
import Register from "./Register";
import ScrollButton from "./ScrollButton";
import SingleProduct from "./SingleProduct";

const Main = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search/:searchKey" element={<Search />} />
        <Route path="/products/:productID" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/forgetpassword"
          element={!user ? <ForgotPass /> : <Navigate to="/" />}
        />
        <Route path="/:categoryID" element={<CategoryBody />} />

      </Routes>
      <Footer />
      <FooterBottom />
      <ScrollButton/>
    </>
  );
};

export default Main;
