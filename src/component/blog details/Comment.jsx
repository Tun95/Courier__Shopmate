import React from "react";
import { Link } from "react-router-dom";

function Comment() {
  return (
    <div className="comment">
      <div className="comment_box">
        <form action="" className="comment_form">
          <div className="header">
            <h1>Leave a Comment</h1>
          </div>
          <div className="form_input">
            <div className="textarea">
              <textarea
                name="comment"
                id="comment"
                className="text_box"
              ></textarea>
            </div>
            <div className="input_box">
              <input type="name" name="name" placeholder="Name *" />
              <input type="name" name="name" placeholder="Email *" />
            </div>
          </div>
          <div className="comment_btn">
            <Link to="" className="btn btn-primary">Post Comment</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
