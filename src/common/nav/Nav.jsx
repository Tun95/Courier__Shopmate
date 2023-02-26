import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo/Website Logo/Logo.png";
import { useState } from "react";
import SideBar from "../side bar/SideBar";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_bar container">
        <div className="nav_bar_cont  c-flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav_list">
            <ul className="nav_ul n_flex">
              <Link to="/" className="nav_links">
                <li>Home</li>
              </Link>
              <Link to="/about" className="nav_links">
                <li>About</li>
              </Link>
              <Link to="/services" className="nav_links">
                <li>Services</li>
              </Link>
              <Link to="/track-goods" className="nav_links">
                <li>Track Goods</li>
              </Link>
              <Link to="/contact" className="nav_links">
                <li>Contact</li>
              </Link>
              <Link to="/blog-post" className="nav_links">
                <li>Blog</li>
              </Link>
            </ul>
            <div className="menuIcon">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
