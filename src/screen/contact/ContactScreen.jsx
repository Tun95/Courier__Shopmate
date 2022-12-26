import React from "react";
import Banner from "../../component/contact/Banner";
import Contact from "../../component/contact/Contact";
import Information from "../../component/contact/Information";

function ContactScreen() {
  return (
    <>
      <div className="box">
        <Banner />
        <Contact />
        <Information />
      </div>
    </>
  );
}

export default ContactScreen;
