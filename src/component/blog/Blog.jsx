import React from "react";
import img1 from "../../asset/Services/7.jpg";
import img2 from "../../asset/Blog Images/42.jpg";
import img3 from "../../asset/Blog Images/22.jpg";
import { Link } from "react-router-dom";
import "./styles.scss";

function Blog() {
  const data = [
    {
      id: 1,
      title: "Logistics Firm Agrees $9.9m Property Deal In A Big Profile Case",
      postedBy: "Olatunji",
      image: img1,
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum, inventore. Neque ullam pariatur ex eaque perferendis similique a labore autLorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum, inventore. Neque ullam pariatur exeaque perferendis similique a labore aut",
      category: "Logistic",
    },
    {
      id: 2,
      title:
        "Tools to Help Reduce Freight's Climate Impact Coming To New Markets",
      postedBy: "Akande",
      image: img2,
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum, inventore. Neque ullam pariatur ex eaque perferendis similique a labore autLorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum, inventore. Neque ullam pariatur exeaque perferendis similique a labore aut",
      category: "Freight",
    },
    {
      id: 3,
      title: "Logistics Firm Agrees $9.9m Property Deal In A Big Profile Case",
      postedBy: "Olatunji",
      image: img3,
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum, inventore. Neque ullam pariatur ex eaque perferendis similique a labore autLorem ipsum dolor sit amet consecteturadipisicing elit. Dolorum, inventore. Neque ullam pariatur exeaque perferendis similique a labore aut",
      category: "Logistic",
    },
  ];
  return (
    <div className="blog">
      {data.map(
        ({ id, title, postedBy, image, short_desc, category }, index) => (
          <div className="blog_box">
            <div className="blog_content">
              <div className="post">
                <div className="header">
                  <Link to="/blog-details/:id" className="header_link">
                    <h1>{title}</h1>
                  </Link>
                  <div className="date_by">
                    <span> Dec 24, 2022 by</span> <Link to="">{postedBy}</Link>
                  </div>
                </div>
                <div className="image">
                  <Link to="/blog-details/:id">
                    {" "}
                    <img src={image} alt="post_banner" />
                  </Link>
                </div>
                <div className="short">
                  <p>
                    {short_desc}... <Link to="">Read more</Link>
                  </p>
                </div>
                <div className="lower">
                  <div className="category">
                    <i className="fa-solid fa-folder"></i>
                    <Link to="">{category}</Link>
                  </div>
                  <div className="comment">
                    <i className="fa-solid fa-comments"></i>
                    <Link to="">Leave a comment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Blog;
