import React from "react";
import AdSection from "../Components/AdSection";
import BrandStore from "../Components/BrandStore";
import Carousel1 from "../Components/Carousel1";
import Carousel2 from "../Components/Carousel2";
import NewOffers from "../Components/NewOffers";
import TopSelling from "../Components/TopSelling";
// import Chickenitems from "./Chickenitems";

const Home = () => {
  return (
    <>
      <Carousel1 />
      <TopSelling />
      <Carousel2 />
      <AdSection/>
      <BrandStore/>
      <NewOffers/>

      {/* <Chickenitems/> */}

    </>
  );
};

export default Home;
