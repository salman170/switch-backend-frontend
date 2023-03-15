import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//Import images
import Switch_Mobility_Ltd_ISO45001_Certificate from '../../assets/sites/default/files/Switch_Mobility_Ltd_ISO45001_Certificate.pdf';
import isoLogo from '../../assets/sites/default/files/iso-logo.jpg';
import cdp from '../../assets/sites/default/files/cdp.png';
import iatia from '../../assets/sites/default/files/iatia.png';
import isgf from '../../assets/sites/default/files/isgf.png';
import iesa from '../../assets/sites/default/files/iesa.png';
import emobility from '../../assets/sites/default/files/emobility.png';
import goldenPeacockAwards from '../../assets/sites/default/files/golden-peacock-awards.png';
import zemo from '../../assets/sites/default/files/zemo.png';
import smmt from '../../assets/sites/default/files/smmt.png';
import cpt from '../../assets/sites/default/files/cpt.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';


const width = window.innerWidth;
function AboutSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          // clickable: true,
          dynamicBullets: true,
        }}
        navigation={width > 425 ? true : false}
        // effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home'
      >
        <SwiperSlide>
          <a
            href={Switch_Mobility_Ltd_ISO45001_Certificate}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={isoLogo}
              className=''
              alt='QAS International ISO45001 Registered Company'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cdp} alt='CDP' />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={iatia}
            alt='Auto Tech Review, Indian Automotive Technology and Innovation Awards'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={isgf} alt='ISGF, India Smart Grid Forum' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iesa} alt='IESA, India Energy Storage Alliance' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={emobility} alt='EMobility Plus Logo' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={goldenPeacockAwards} alt='Golden Peacock Awards' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zemo} alt='Zemo Partnership Member' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={smmt} alt='SMMT Member' />
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <img src={cpt} alt='CDP Driving Sustainable Economies' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default AboutSlider;
