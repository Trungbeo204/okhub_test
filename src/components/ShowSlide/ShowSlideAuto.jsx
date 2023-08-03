import React, { useState } from "react";
import "./ShowSlideAuto.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Slide1 from "../../pages/Slide1/Slide1";
import Slide2 from "../../pages/Slide2/Slide2";
import Slide3 from "../../pages/Slide3/Slide3";
import logoPage1 from "../../assets/images/photo1.png";
import logoPage2 from "../../assets/images/photo2.png";
import logoPage3 from "../../assets/images/photo3.png";

function ShowSlideAuto() {
  const [settings, setSetting] = useState({});

  setTimeout(() => {
    setSetting({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      pauseOnHover:false,
    });
  }, 1);

  return (
    <div>
      <div className="Page">
        <Slider {...settings} className="slick">
          {/* {page1 && <Page1 />}
        {page2 && <Page2 />}
        {page3 && <Page3 />} */}
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </Slider>
      </div>
      <div className="btn_slide">
        <img
          className="img_card"
          src={logoPage1}
          alt=""
        />
        <img
          className="img_card"
          src={logoPage2}
          alt=""
        />
        <img
          className="img_card"
          src={logoPage3}
          alt=""
        />
      </div>
    </div>
  );
}

export default ShowSlideAuto;
