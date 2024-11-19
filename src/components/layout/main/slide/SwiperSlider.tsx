// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";

// Import Swiper styles
import "swiper/css";

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      style={{ height: "380px", textAlign: "center" }}
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={true}
    >
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/SSVr2ZxJ3bUc655YFoRy1Q/689x387.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/IrYGXFGNRK9Mt3z4N3LvWQ/689x387.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/xO0BO6SH877VpYQg4t5yjw/689x387.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/9614uvFWNf4CbTg6Bk7rpQ/689x387.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Ym5bvI2aGsb-r3-7C5Y6rA/689x387.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
