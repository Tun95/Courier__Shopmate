import React from "react";
import Banner from "../../component/home/Banner";
import Blog from "../../component/home/Blog";
import ContactInfo from "../../component/home/ContactInfo";
import Performances from "../../component/home/Performances";
import Services from "../../component/home/Services";
import Testimonial from "../../component/home/Testimonial";

function HomeScreen() {
  return (
    <>
      <div className="home">
        <Banner />
        <ContactInfo />
        <Services />
        <Testimonial />
        <Performances />
        <Blog />
      </div>
    </>
  );
}

export default HomeScreen;
