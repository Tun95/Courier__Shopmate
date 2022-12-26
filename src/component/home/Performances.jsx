import React from "react";
import "./styles.css";

function Performances() {
  return (
    <div className="performance">
      <div className="performance_box container">
        <div className="performance_content">
          <div className="sections p_flex">
            <div className="section_1">
              <div className="progress_box">
                <span className="title">Region Market Share</span>
                <div className="progress_bar">
                  <span className="progress_per progress1">
                    <span className="tooltip">90%</span>
                  </span>
                </div>
              </div>
              <div className="progress_box">
                <span className="title">Revenue Growth Per Year</span>
                <div className="progress_bar">
                  <span className="progress_per progress2">
                    <span className="tooltip">80%</span>
                  </span>
                </div>
              </div>
              <div className="progress_box">
                <span className="title">Profit Growth Per Year</span>
                <div className="progress_bar">
                  <span className="progress_per progress3">
                    <span className="tooltip">75%</span>
                  </span>
                </div>
              </div>
              <div className="progress_box">
                <span className="title">Number of Logistics center</span>
                <div className="progress_bar">
                  <span className="progress_per progress4">
                    <span className="tooltip">90%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="section_2">
              <div className="content">
                <h1>Our Year In Number</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt consequatur sequi nulla ut vero modi et vitae qui
                  aliquam quas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performances;
