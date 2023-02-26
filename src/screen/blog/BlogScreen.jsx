import React from "react";
import Blog from "../../component/blog/Blog";
import "./styles.scss";
import BlogSideBar from "../../common/side bar/BlogSideBar";

function BlogScreen() {
  return (
    <>
      <div className="container">
        <div className="blog_grid">
          <Blog />
          <BlogSideBar />
        </div>
      </div>
    </>
  );
}

export default BlogScreen;
