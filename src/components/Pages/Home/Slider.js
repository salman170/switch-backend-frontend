import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//Import images
import IeV_Series from "../../../assets/sites/default/files/2023-01/IEV_SERIES_REVEAL_0.jpg"
import Eiv_7 from "../../../assets/sites/default/files/2023-01/EiV7-home-banner.jpg"
import e1 from "../../../assets/sites/default/files/2022-06/e1-switch-home-banner-new_0.jpg"
import eiv12 from "../../../assets/sites/default/files/2022-06/home_eiv12.jpg"
import eiv22 from "../../../assets/sites/default/files/2022-08/EIV22-main-banner.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// import { sliders } from "../../../constants";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper slider-home"
      >
        
          <SwiperSlide >
            <img src={IeV_Series} className="w-full" alt='SWITCH IeV Series' />
          </SwiperSlide>
          <SwiperSlide >
            <img src={Eiv_7} className="w-full" alt='The All New SWITCH EiV 7' />
          </SwiperSlide>
          <SwiperSlide >
            <img src={e1} className="w-full" alt='SWITCH e1' />
          </SwiperSlide>
          <SwiperSlide >
            <img src={eiv12} className="w-full" alt='SWITCH EiV 12' />
          </SwiperSlide>
          <SwiperSlide >
            <img src={eiv22} className="w-full" alt='SWITCH EiV 22' />
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Slider;
