import React from 'react'
import styled from "styled-components"
import PromoBanner1 from "/assets/img/banners/promo-banner1.webp"
import PromoBanner2 from "/assets/img/banners/promo-banner2.webp"
import PromoBanner3 from "/assets/img/banners/promo-banner3.webp"
import PromoBanner4 from "/assets/img/banners/promo-banner4.webp"
import PromoBanner5 from "/assets/img/banners/promo-banner5.webp"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/slider.css"

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = styled.img`
  width: 100%;
  height: auto;
`

const Carousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed="600"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner src={PromoBanner4} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={PromoBanner1} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={PromoBanner2} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={PromoBanner3} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={PromoBanner5} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel