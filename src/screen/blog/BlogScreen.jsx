import React from "react";
import Blog from "../../component/blog/Blog";
import SideBar from "../../common/side bar/SideBar";
import "./styles.scss"

function BlogScreen() {
  return (
    <>
      <div className="container">
        <div className="blog_grid">
          <Blog />
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default BlogScreen;
