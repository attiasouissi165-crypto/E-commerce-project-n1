import React from 'react'
import Product from "./Product"
import "./slideProduct.css"
  import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function SliderProduct({data, title}) {
  return (
    <div className='slider-product slide'>
      <div className="container">
      <div className="Top-slide"  >
<h2>{title}</h2>
<p>Lorem ipsum dolor voluptates minima voluptatum error odio reiciendis ipsa.</p>
      </div>
 <Swiper
    loop={true} 
     autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          slidesPerView={5}
  navigation={true}
   modules={[Autoplay, Navigation]} 
        className="mySwiper">
          { data.map((item) =>  {
             return (<SwiperSlide> <Product item={item} /></SwiperSlide>)})}
      </Swiper>
    </div>
    </div>
  )
}

export default SliderProduct
