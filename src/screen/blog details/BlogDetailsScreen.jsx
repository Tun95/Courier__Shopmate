import React from "react";
import BlogSideBar from "../../common/side bar/BlogSideBar";
import Details from "../../component/blog details/Details";

function BlogDetailsScreen() {
  return (
    <>
      <div className="container">
        <div className="blog_grid">
          <Details />
          <BlogSideBar />
        </div>
      </div>
    </>
  );
}

export default BlogDetailsScreen;
