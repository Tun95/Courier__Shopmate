import React from "react";
import "./styles.css";
import ava1 from "../../asset/Testimonial Images/ava2.jpg";
import ava2 from "../../asset/Testimonial Images/ava4.jpg";
import quote from "../../asset/Logo/quote.png";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial_box container">
        <div className="testimonial_content">
          <div className="sections e_flex">
            <div className="section_1">
              <div className="sect_testimonies">
                <h4>Our Testimonial</h4>
                <h1>What customers say about us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae enim ipsam alias libero praesentium totam, omnis
                  voluptas esse magni necessitatibus.
                </p>
              </div>
            </div>
            <div className="section_2">
              <div className="testimonies">
                <img src={quote} alt="quote" className="quote" />
                <div className="test_content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores accusantium quasi officiis eos.
                  </p>
                  <span className="rating d_flex">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <div className="name_img">
                    <img src={ava2} alt="testimonial" />
                    <h4>James Golden</h4>
                  </div>
                </div>
              </div>
              <div className="testimonies testi_2">
                <img src={quote} alt="quote" className="quote" />
                <div className="test_content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic voluptatum dignissimos officia, omnis eum facilis
                    asperiores accusantium quasi officiis eos.
                  </p>
                  <span className="rating d_flex">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <div className="name_img">
                    <img src={ava1} alt="testimonial" />
                    <h4>Anna Gifty</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
