import React from "react";
import { Link } from "react-router-dom";
import img from "../../asset/About/10.jpg";
import img1 from "../../asset/Services/6.jpg";
import img2 from "../../asset/Services/9.jpg";
import { Fade } from "react-awesome-reveal";

function Service() {
  const data = [
    {
      id: 1,
      title: "Ocean Cargo",
      img: img,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.repudiandae iure hic excepturi vero doloremque autem fuga commodi Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 2,
      title: "Fly Anywhere",
      img: img2,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.repudiandae iure hic excepturi vero doloremque autem fuga commodi Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
    {
      id: 3,
      title: "Fly Anywhere",
      img: img1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.repudiandae iure hic excepturi vero doloremque autem fuga commodi Sed distinctio qui dicta similique quisquam id dicta similique quisquam id.",
    },
  ];
  return (
    <div className="contact services">
      <div className="blog_box container">
        <div className="blog_style">
          <div className="blog_terror">
            {data.map(({ title, img, description }, index) => (
              <div className="blog_content" key={index}>
                <div className="image">
                  <img src={img} alt="blog_images" />
                </div>
                <div className="content">
                  <Fade cascade triggerOnce direction="down" damping={0.1}>
                    <Link to="" className="title_link">
                      {" "}
                      <h1>{title}</h1>
                    </Link>
                    <p>{description}</p>
                    <div className="blog_btn">
                      <Link to="" className="btn btn-primary">
                        Get a quote{" "}
                        <i className="fa-sharp fa-solid fa-right-long"></i>
                      </Link>
                    </div>
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
