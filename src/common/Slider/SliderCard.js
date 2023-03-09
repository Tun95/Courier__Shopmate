import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.css";
import banner1 from "../../asset/Hero/2.jpg";
import banner2 from "../../asset/Hero/12.jpg";
import banner3 from "../../asset/Hero/3.jpg";
import banner4 from "../../asset/Hero/4.jpg";

function SliderCard() {
  const banners = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
    },
    {
      id: 3,
      img: banner3,
    },
    {
      id: 4,
      img: banner4,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="slick-slider">
        {banners?.map((item, index) => (
          <div key={index} className="box  top slider_box">
            <div className="left">
              <img src={item.img} alt="banners" />
              <div
              className="light_dark"></div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderCard;
