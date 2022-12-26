import React from "react";
import SideBar from "../../common/side bar/SideBar";
import Details from "../../component/blog details/Details";

function BlogDetailsScreen() {
  return (
    <>
      <div className="container">
        <div className="blog_grid">
          <Details />
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default BlogDetailsScreen;
