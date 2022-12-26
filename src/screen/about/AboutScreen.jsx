import React from "react";
import Banner from "../../component/about/Banner";
import Contact from "../../component/about/Contact";
import Counter from "../../component/about/Counter";
import Services from "../../component/about/Services";

function AboutScreen() {
  return (
    <>
      <div className="box">
        <Banner />
        <Services />
        <Counter />
        <Contact />
      </div>
    </>
  );
}

export default AboutScreen;
