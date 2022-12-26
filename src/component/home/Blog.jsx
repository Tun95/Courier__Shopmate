import React from "react";
import "./styles.css";
import b1 from "../../asset/Blog Images/13.jpg";
import b2 from "../../asset/Blog Images/22.jpg";
import b3 from "../../asset/Blog Images/42.jpg";
import { Link } from "react-router-dom";

function Blog() {
  const data = [
    {
      id: 1,
      title: "Logistic Firm Agrees $4.9m Perperty Deal In A Big Profile Case",
      image: b1,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 2,
      title: "Logistic Firm Agrees $4.9m Perperty Deal In A Big Profile Case",
      image: b2,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 3,
      title: "Logistic Firm Agrees $4.9m Perperty Deal In A Big Profile Case",
      image: b3,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
  ];
  return (
    <div className="h_service blog_post">
      <div className="services_box container">
        <div className="services_box_cont">
          <div className="top_section">
            <div className="section">
              {" "}
              <h2>Latest Blog &amp; News</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                deserunt ducimus ea laboriosam a error deserunt ducimus ea
                laboriosam a error.
              </p>
            </div>
          </div>
          <div className="lower_section sb_flex">
            {data.map(({ title, image, description }, index) => (
              <article className="l_section" key={index}>
                <Link to="/blog-details/:id">
                  <img src={image} alt="services" />
                </Link>
                <Link to="/blog-details/:id">
                  <h3>{title}</h3>
                </Link>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="blog_btn">
            <Link to="/blog-post" className="btn btn-primary">
              View All <i className="fa-sharp fa-solid fa-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
