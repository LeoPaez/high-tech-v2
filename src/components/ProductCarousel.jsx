import React, { useState } from "react";

// Styled Components
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

function ProductCarousel({ imgProduct, imgCpu, imgGpu, imgRam }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
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
          <ProductImage size="100px" src={imgProduct} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="100px" src={imgCpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="100px" src={imgGpu} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductImage size="100px" src={imgRam} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductCarousel