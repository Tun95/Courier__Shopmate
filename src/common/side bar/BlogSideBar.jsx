import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function BlogSideBar() {
  const data = [
    {
      id: 1,
      title: "Logistics Firm Agrees $9.9m Property Deal In A Big Profile Case",
    },
    {
      id: 2,
      title:
        "Tools to Help Reduce Freight's Climate Impact Coming To New Markets",
    },
    {
      id: 3,
      title: "Logistics Firm Agrees $9.9m Property Deal In A Big Profile Case",
    },
    {
      id: 4,
      title:
        "Tools to Help Reduce Freight's Climate Impact Coming To New Markets",
    },
    {
      id: 5,
      title: "Logistics Firm Agrees $9.9m Property Deal In A Big Profile Case",
    },
  ];
  return (
    <div className="side_bar">
      <div className="side_bar_box">
        <div className="side_bar_content">
          <div className="sections">
            <div className="section_box">
              <div className="search">
                <label htmlFor="search">Search</label>
                <form action="" className="search_box_btn d_flex">
                  <input type="search" />
                  <button>Search</button>
                </form>
              </div>
            </div>
            <div className="section_box">
              <h2>Categories</h2>
            </div>
            <div className="section_box">
              <ul className="category_list">
                <li className="d_flex">
                  <Link to="">Logistic</Link>
                  <span>(2)</span>
                </li>
                <li className="d_flex">
                  <Link to="">Freight</Link>
                  <span>(1)</span>
                </li>
              </ul>
            </div>
            <div className="section_box">
              <h2>Recent Post</h2>
            </div>
            <div className="section_box">
              {data.map(({ id, title }, index) => (
                <ul className="recent_post" key={index}>
                  <li>
                    <Link to="">{title}</Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="section_box">
              <h2>Archives</h2>
              <ul className="archive_list">
                <li>
                  <Link to="">December 2022</Link>
                </li>
              </ul>
            </div>
            <div className="section_box">
              <h2>Categories</h2>
              <div className="lower_category">
                <ul className="category_list">
                  <li className="d_flex">
                    <Link to="">Logistic</Link>
                  </li>
                  <li className="d_flex">
                    <Link to="">Freight</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section_box">
              <h4>Event</h4>
              <div className="event_list">
                <ul className="event_list_ul">
                  <li>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium hic laboriosam suscipit.
                    </p>{" "}
                  </li>
                  <li>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusantium hic laboriosam suscipit. Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Accusantium hic
                      laboriosam suscipit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSideBar;
