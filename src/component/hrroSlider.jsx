import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//hmoe.css
import "../page/homs.css";

// import required modules

export default function HrroSlider() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="swiper-slide"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controller
                </h3>
                <p>Windows Xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop Now
                </Link>
              </div>
              <img src="src/img/images (10).jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 controller
                </h3>
                <p>Windows Xp/10/7/8 ps3, Tv Box</p>
                <Link to="/" className="btn">
                  shop Now
                </Link>
              </div>
              <img src="src/img/images (3).jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
