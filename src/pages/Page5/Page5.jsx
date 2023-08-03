import React, { useState } from "react";
import "./Page5.css";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import required modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import new1 from "../../assets/images/img1.png";
import new2 from "../../assets/images/img2.png";
import new3 from "../../assets/images/img3.png";
import new4 from "../../assets/images/img4.png";

function Page5() {
  const data = [
    {
      id: 1,
      img: new1,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 2,
      img: new2,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 3,
      img: new3,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 4,
      img: new4,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 5,
      img: new2,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 6,
      img: new4,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 7,
      img: new1,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 8,
      img: new1,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 9,
      img: new3,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 10,
      img: new4,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
    {
      id: 11,
      img: new2,
      time: "26.04.2022/EVENT",
      title:
        "Lorem ipsum dolor sit amet consectetur. Quisque curabitur nunc diam laoreet.",
    },
  ];

  return (
    <div className="Page5">
      <div className="news_title">
        <div className="title_box">
          <p>NEWS</p>
          <p>Lastest News</p>
        </div>
        <button className="btn_title"> SEE MORE </button>
      </div>
      <div className="news_box">
        <Swiper
          spaceBetween={30}
          slidesPerView={3.5}
          navigation={true}
          pagination={{
            type: 'fraction',
          }}
          modules={[Navigation]}
        >
          {data.map((value) => {
            return (
              <SwiperSlide>
                <div className="news_card">
                  <img src={value.img} alt="" className="news_img_card" />
                  <p className="news_time_card">{value.time}</p>
                  <p className="news_title_card">{value.title}</p>
                  <button className="news_btn">SEE MORE +</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Page5;
