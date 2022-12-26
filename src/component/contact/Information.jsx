import React from "react";
import "./styles.scss";

function Information() {
  return (
    <div className="infomation">
      <div className="infomation_box container ">
        <div className="infomation_content">
          <div className="box_1">
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </div>
            <div className="content">
              <h2>Our Locations</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat nulla rerum dolorum, laboriosam inventore accusamus.
              </p>
            </div>
          </div>
          <div className="box_1">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="content">
              <h2>Our Locations</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat nulla rerum dolorum, laboriosam inventore accusamus.
              </p>
            </div>
          </div>
          <div className="box_1">
            <div className="icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="content">
              <h2>Our Locations</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat nulla rerum dolorum, laboriosam inventore accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
