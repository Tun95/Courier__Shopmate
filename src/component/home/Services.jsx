import React from "react";
import "./styles.css";
import s1 from "../../asset/Services/6.jpg";
import s2 from "../../asset/Services/7.jpg";
import s3 from "../../asset/Services/52.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Services() {
  const data = [
    {
      id: 1,
      title: "Ocean Cargo",
      image: s1,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 2,
      title: "Ocean Cargo",
      image: s2,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 3,
      title: "Ocean Cargo",
      image: s3,
      description:
        " Lorem ipsum dolor sit, amet amet consectetur adipisicing elit. consectetur adipisicing elit. Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
  ];
  return (
    <div className="h_service">
      <div className="services_box container">
        <div className="services_box_cont">
          <div className="top_section">
            <div className="section">
              <Fade cascade direction="up" damping={0.1}>
                <h2>Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  deserunt ducimus ea laboriosam a error deserunt ducimus ea
                  laboriosam a error.
                </p>
              </Fade>
            </div>
          </div>
          <div className="lower_section sb_flex">
            {data.map(({ title, image, description }, index) => (
              <article className="l_section" key={index}>
                <Fade cascade triggerOnce direction="up" damping={0.2}>
                  <Link to="">
                    <img src={image} alt="services" />
                  </Link>
                  <Link to="">
                    <h3>{title}</h3>
                  </Link>
                  <p>{description}</p>
                </Fade>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
