import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Slider from "../../common/Slider/Slider";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_box container">
          <div className="banner_content hidden show">
            <h1>
              Industry Leading <br /> Logistic Firm
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              Rem cum exercitationem laboriosam ratione. Quisquam?
            </p>
            <div className="banner_btn">
              <Link to="/contact" className="btn btn-primary ">
                Contact Us
              </Link>
              <Link to="/blog-post" className="btn banner_btn_right">
                Discover More
              </Link>
            </div>
          </div>
        </div>
        <div className="banner_slider">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Banner;
