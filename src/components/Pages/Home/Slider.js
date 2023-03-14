import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//Import images
import IeV_Series from '../../../assets/sites/default/files/2023-01/IEV_SERIES_REVEAL_0.jpg';
import Eiv_7 from '../../../assets/sites/default/files/2023-01/EiV7-home-banner.jpg';
import e1 from '../../../assets/sites/default/files/2022-06/e1-switch-home-banner-new_0.jpg';
import eiv12 from '../../../assets/sites/default/files/2022-06/home_eiv12.jpg';
import eiv22 from '../../../assets/sites/default/files/2022-08/EIV22-main-banner.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
// import { sliders } from "../../../constants";

const width = window.innerWidth;
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
          // dynamicBullets: true,
        }}
        navigation={ width > 425 ? true: false}
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home'
      >
        <SwiperSlide>
        <div className='relative'>
          
        <img src={IeV_Series} className='w-full' alt='SWITCH IeV Series' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white  bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
            SWITCH IeV Series
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='relative'>
          <img src={Eiv_7} className='w-full' alt='The All New SWITCH EiV 7' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/4'>
            The All New SWITCH EiV 7
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
        <img src={e1} className='w-full' alt='SWITCH e1' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
            SWITCH e1
            </span>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={eiv12} className='w-full' alt='SWITCH EiV 12' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
              SWITCH EiV 12
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src={eiv22} className='w-full' alt='SWITCH EiV 22' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
              SWITCH EiV 22
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
