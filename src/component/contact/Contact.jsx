import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import img from "../../asset/Contact/8.jpg";

function Contact() {
  return (
    <div className="contact_form">
      <div className="contact_form_box container">
        <div className="contact_form_cont">
          <div className="sections ">
            <div className="section_1">
              <div className="header">
                <h1>Send Us A Message</h1>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, accusamus! Consequatur maiores corporis eaque
                  repellendus provident.
                </p>
                <form action="" className="input_boxes">
                  <div className="input_box">
                    <input
                      type="text"
                      name="name"
                      placeholder="E.g. Tunji Akande"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E.g. tunji@gmail.com"
                    />
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                  <div className="text_area">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="submit_btn">
                    <Link className="btn btn-primary">Send Message</Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="section_2">
              <div className="content">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
