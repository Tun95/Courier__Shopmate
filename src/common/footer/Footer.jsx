import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_box container">
        <div className="footer_content">
          <div className="sections ">
            <div className="section_1">
              <div className="footer_head">
                <h2>About Us</h2>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate veniam eum cum! Obcaecati repellendus reprehenderit
                  error, molestias quam minima maxime!
                </p>
                <div className="footer_social d_flex">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+23412345678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="section_2">
              <div className="footer_head">
                <h2>Quick Links</h2>
              </div>
              <div className="content">
                <ul>
                  <Link to="/" className="d_flex">
                    <i className="fa-solid fa-chevron-right"></i>
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="d_flex">
                    <i className="fa-solid fa-chevron-right"></i>
                    <li>About</li>
                  </Link>
                  <Link to="/services" className="d_flex">
                    <i className="fa-solid fa-chevron-right"></i>
                    <li>What we do?</li>
                  </Link>
                  <Link to="/contact" className="d_flex">
                    <i className="fa-solid fa-chevron-right"></i>
                    <li>Get in touch with us</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="section_3">
              <div className="footer_head">
                <h2>Contact Us</h2>
              </div>
              <div className="content">
                <h5>Your Location</h5>
                <span>+1 234 567 8910</span>
                <small>admin@example.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower_footer">
        <div className="lower_cont container">
          <p>
            Copyright&copy; 2022 | Fast Logistic Company | Developed by{" "}
            <a
              href="https://myporfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olatunji Akande
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
