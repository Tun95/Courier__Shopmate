import React from "react";
import Banner from "../../component/services/Banner";
import ContactIfo from "../../component/services/ContactIfo";
import ImgBanner from "../../component/services/ImgBanner";
import Performance from "../../component/services/Performance";
import Service from "../../component/services/Service";

function ServiceScreen() {
  return (
    <>
      <div className="box">
        <Banner />
        <Service />
        <Performance />
        <ImgBanner />
        <ContactIfo />
      </div>
    </>
  );
}

export default ServiceScreen;
