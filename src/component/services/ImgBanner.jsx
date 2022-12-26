import React from "react";
import img from "../../asset/Services/11-1920x852.jpg";

function ImgBanner() {
  return (
    <div className="img_banner">
      <div className="img_banner_box container">
        <div className="img_banner_cont">
					<img src={img} alt="banner" />
				</div>
      </div>
    </div>
  );
}

export default ImgBanner;
