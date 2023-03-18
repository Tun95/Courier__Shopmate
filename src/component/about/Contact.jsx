import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import img from "../../asset/About/10.jpg";
import { Fade } from "react-awesome-reveal";

function Contact() {
  return (
    <div className="contact">
      <div className="blog_box container">
        <div className="blog_content d_flex">
          <div className="image">
            <img src={img} alt="blog_images" />
          </div>
          <div className="content">
            <Fade cascade triggerOnce direction="down" damping={0.2}>
              <h1>Become Our Partners</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                quod tempora soluta suscipit, illo non cum doloribus officia
                eius repudiandae iure hic excepturi vero doloremque autem fuga
                commodi quis sequi. repudiandae iure hic excepturi vero
                doloremque autem fuga commodi quis sequi. <br />
                <br />
                repudiandae iure hic excepturi vero doloremque autem fuga
                commodi quis sequi. repudiandae
              </p>
              <div className="blog_btn">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us <i className="fa-sharp fa-solid fa-right-long"></i>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
