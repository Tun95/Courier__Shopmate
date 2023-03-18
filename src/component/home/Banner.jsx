import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Slider from "../../common/Slider/Slider";
import { Fade } from "react-awesome-reveal";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_box container">
          <div className="banner_content hidden show">
            <Fade cascade direction="up" triggerOnce damping={0.1}>
              <h1>
                Industry Leading <br /> Logistic Firm
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat Rem cum exercitationem laboriosam ratione. Quisquam?
              </p>
            </Fade>
            <Fade cascade triggerOnce direction="up" damping={0.1}>
              <div className="banner_btn">
                <Link to="/contact" className="btn btn-primary ">
                  Contact Us
                </Link>
                <Link to="/blog-post" className="btn banner_btn_right">
                  Discover More
                </Link>
              </div>{" "}
            </Fade>
          </div>
        </div>
        <div className="banner_slider">
          <Slider />
          <div className="light_dark"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
