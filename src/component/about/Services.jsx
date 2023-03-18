import React from "react";
import "./styles.scss";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <div className="testimonial">
      <div className="testimonial_box container">
        <div className="testimonial_content">
          <div className="sections ">
            <div className="section_1">
              <div className="sect_testimonies">
                <Fade cascade direction="down" damping={0.1}>
                  <h1>Our Services</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae enim ipsam alias libero praesentium totam, omnis
                    voluptas esse magni necessitatibus.
                  </p>
                </Fade>
              </div>
            </div>
            {/* <div className="section_2"> */}
            <Fade cascade triggerOnce direction="down" damping={0.1}>
              <div className="testimonies flex">
                <i className="fa-solid fa-square-check"></i>
                <div className="test_content">
                  <h2>Call Center</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores .
                  </p>
                </div>
              </div>
              <div className="testimonies testi_2 flex">
                <i className="fa-solid fa-warehouse"></i>
                <div className="test_content">
                  <h2>Warehousing</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores .
                  </p>
                </div>
              </div>
              <div className="testimonies testi_2 flex">
                <i className="fa-solid fa-truck-fast"></i>
                <div className="test_content">
                  <h2>Shipping</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores .
                  </p>
                </div>
              </div>
              <div className="testimonies testi_2 flex">
                <i className="fa-solid fa-diagram-project"></i>
                <div className="test_content">
                  <h2>Protection Policy</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores .
                  </p>
                </div>
              </div>
              <div className="testimonies testi_2 flex">
                <i className="fa-solid fa-cloud-moon-rain"></i>
                <div className="test_content">
                  <h2>Weather Insurance</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores .
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
