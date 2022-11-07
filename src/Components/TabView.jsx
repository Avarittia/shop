import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdvertisedOffers from "./AdvertisedOffers";
import TodayOffers from "./TodayOffers";

const TabView = () => {
  return (
    <Container fluid style={{ border: "1px solid #ced4da" }} className="px-0">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Advertised Offers" className="tabview">
          <AdvertisedOffers />
        </Tab>
        <Tab eventKey="profile" title="Today Offers">
          <TodayOffers/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabView;
