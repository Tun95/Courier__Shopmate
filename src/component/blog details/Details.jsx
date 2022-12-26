import React from "react";
import img2 from "../../asset/Blog Images/42.jpg";
import { Link } from "react-router-dom";
import "./styles.scss";
import Comment from "./Comment";

function Details() {
  return (
    <div className="blog">
      <div className="blog_box">
        <div className="blog_content">
          <div className="post_details">
            <div className="post_image">
              <img src={img2} alt="post_banner_image" />
            </div>
            <div className="header">
              <div className="date_by">
                <span> Dec 24, 2022 by</span> <Link to="">Olatunji</Link>
              </div>
            </div>
            <div className="details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
                ex expedita quos cum quam reprehenderit alias. Sed molestiae
                consequatur perspiciatis atque, doloribus sunt. Ratione
                architecto, animi deserunt labore ipsum exconsequatur
                perspiciatis atque, doloribus sunt. Ratione architecto, animi
                deserunt labore ipsum ex.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                magnam obcaecati quibusdam voluptatem expedita? Voluptates
                recusandae autem adipisci porro ducimus.
              </p>
              <h3>Be The Change You Want to See in the world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quia sint excepturi perspiciatis, ipsum atque? Saepe, quas
                dignissimos. Dignissimos, quibusdam aliquam perspiciatis beatae
                nam deleniti ut earum unde asperiores illum consequuntur dolores
                vero officiis doloribus sapiente non saepe quos laboriosam
                praesentium, corporis rerum minus blanditiis quas dolore?
                Voluptatem, molestias tenetur!
              </p>
              <p
                className="italics"
                style={{ fontStyle: "italic", margin: "20px 0px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                dignissimos nobis necessitatibus. Fugiat velit aspernatur
                dolores animi, eum quisquam voluptate?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis perferendis ipsum, veniam deleniti facilis sint
                nostrum quibusdam ea cumque iure similique nobis enim quia
                voluptatem quas asperiores inventore unde magnam rerum accusamus
                exercitationem sit! Possimus vitae quasi quaerat recusandae
                tenetur.
              </p>
              <h1>Demo Magazine Article Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nam fuga, nemo impedit ut illum at sit nobis similique omnis
                voluptates quia dignissimos quasi aliquid praesentium eius ipsa
                temporibus eum quibusdam repudiandae, saepe delectus recusandae
                accusantium vero? Voluptates, necessitatibus cum corporis est
                vel nam atque nobis, amet doloribus aliquid eaque!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                corrupti numquam voluptatibus aliquam atque fugit rerum
                inventore ab exercitationem impedit!
              </p>
            </div>
            <div className="lower_details">
              <div className="category">
                <i className="fa-solid fa-folder"></i>
                <Link to="">Freight</Link>
              </div>
            </div>
            <div className="prev_next">
              <ul>
                <li className="d_flex">
                  <i className="fa-solid fa-chevron-left"></i>
                  <Link to="">
                    Logistics Firm Agrees $9.9m Property Deal In A Big Profile
                    Case
                  </Link>
                </li>
                <li className="d_flex">
                  <i className="fa-solid fa-chevron-right"></i>
                  <Link to="">
                    Logistics Firm Agrees $9.9m Property Deal In A Big Profile
                    Case
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="blog_box">
        <div className="blog_content">
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Details;
