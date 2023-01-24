import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo/Website Logo/Logo.png";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("");
  // useEffect(() => {
  //   localStorage.setItem("", activeNav);
  // }, [activeNav]);
  // JSON.parse(localStorage.getItem(""));

  return (
    <div className="nav">
      <div className="nav_bar container">
        <div className="nav_bar_cont  c-flex">
          <div className="logo">
            {/* <Link to="/">
              <img src={Logo} alt="" />
            </Link> */}
          </div>
          <div className="nav_list">
            <ul className="nav_ul n_flex">
              <Link
                to="/"
                onClick={() => setActiveNav("/")}
                className={activeNav === "/" ? "active" : "nav_links"}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                onClick={() => setActiveNav("/about")}
                className={activeNav === "/about" ? "active" : "nav_links"}
              >
                <li>About</li>
              </Link>
              <Link
                to="/services"
                onClick={() => setActiveNav("/services")}
                className={activeNav === "/services" ? "active" : "nav_links"}
              >
                <li>Services</li>
              </Link>
              <Link
                to="/track"
                onClick={() => setActiveNav("/track")}
                className={activeNav === "/track" ? "active" : "nav_links"}
              >
                <li>Track Goods</li>
              </Link>
              <Link
                to="/contact"
                onClick={() => setActiveNav("/contact")}
                className={activeNav === "/contact" ? "active" : "nav_links"}
              >
                <li>Contact</li>
              </Link>
              <Link
                to="/blog-post"
                onClick={() => setActiveNav("/blog-post")}
                className={activeNav === "/blog-post" ? "active" : "nav_links"}
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
