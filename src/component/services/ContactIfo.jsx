import React from "react";
import { Fade } from "react-awesome-reveal";

function ContactIfo() {
  return (
    <div className="contact_info">
      <div className="contact_info_box container">
        <div className="contact_info_cont d_grid">
          <Fade cascade direction="up" damping={0.2}>
            <div className="section_1 d_flex">
              <div className="icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="section_content">
                <h2>Call Center</h2>
                <p>Give us a free call +1 234 567 8910</p>
              </div>
            </div>

            <div className="section_1 d_flex">
              <div className="icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="section_content">
                <h2>Working Hours</h2>
                <p>Mon-Sat: 7AM-5PM Sunday 9AM-3PM</p>
              </div>
            </div>

            <div className="section_1 d_flex">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-arrow"></i>
              </div>
              <div className="section_content">
                <h2>Our Location</h2>
                <p>300 Kansas Ave NW New Jersey, United States</p>
              </div>
            </div>

            <div className="section_1 d_flex">
              <div className="icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="section_content">
                <h2>Global Office</h2>
                <p>Japan Head Quater in New Hall in Tokyo City</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default ContactIfo;
