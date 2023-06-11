import React, { useState } from "react";

// Styled Components
import styled from "styled-components";
import { ProductImage } from "../pages/ProductPage";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/slider.css"

// Swiper required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductCarouselImg = styled.img`
  width: 86px;
  @media (max-width: 600px){
    width: 80px;
  }
  @media (max-width: 500px){
    width: 70px;
  }
  @media (max-width: 400px){
    width: 60px;
  }
`

function ProductCarousel({ imgProduct, imgCpu, imgGpu, imgRam }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="c2">
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <ProductImage size="380px" src={imgProduct} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="380px" src={imgCpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="380px" src={imgGpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="380px" src={imgRam} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCarouselImg src={imgProduct} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCarouselImg src={imgCpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCarouselImg src={imgGpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCarouselImg src={imgRam} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductCarousel