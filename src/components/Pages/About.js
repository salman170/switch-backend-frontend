import React, { useEffect } from 'react';
import videoPlay from '../../assets/themes/custom/switchmobility/resources/images/company-animation-v2.mp4';
import backImage from '../../assets/sites/default/files/banner-company.jpg';
import carbonneutralLogo from '../../assets/sites/default/files/carbonneutralLogo.png';
import patternGreen from '../../assets/themes/custom/switchmobility/resources/images/pattern-green.png';
import patternBlackSvg from '../../assets/themes/custom/switchmobility/resources/images/pattern-black.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AboutSlider from './AboutSlider';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section
        className='bg-emerald-500 grid min-h-[70vh] lg:min-h-[84vh] place-items-center  text-white '
        style={{ backgroundImage: `url(${patternGreen})` }}
      >
        <div className=' ' data-aos='fade-up'>
          <div
            className='text-3xl md:text-4xl lg:text-6xl   flex justify-center text-center  '
            data-editor-processed='true'
          >
            Hello, we're SABOO eZONE
          </div>
          <div
            className='font-mono  md:text-xl lg:text-3xl text-lg text-center pt-4'
            data-editor-processed='true'
          >
            A next-generation electric vehicle company backed by over 50 years
            of experience.
          </div>
        </div>
      </section>
      <section className='bg-color-blue company-animation-wrapper my-2'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <div className='col-md-6 company-animation'>
            <div className='embed-responsive embed-responsive-16by9'>
              <video
                autoPlay
                loop
                muted
                playsinline
                width='100%'
                preload='metadata'
                className='d-block'
              >
                <source src={videoPlay} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className='md:h-auto lg:h-auto bg-cover bg-no-repeat min-h-[40vh]'
            style={{ backgroundImage: `url(${backImage})` }}
          ></div>
        </div>
      </section>
      <section className='generic-padding-xl m-4 md:m-8 mb-6'>
        <div className='container-fluid'>
          <div className='row d-flex align-items-start'>
            <div className='col-lg-6'>
              <div
                className='section-heading section-heading-xs'
                data-aos='fade-up'
              >
                <h2 className='text-xl md:text-2xl lg:text-3xl pt-10 pb-4'>
                  The only way to a cleaner, smarter, better future is together.
                </h2>
              </div>
              <p className='pb-4'>
                We've combined over a century of engineering expertise, the very
                best innovators and cutting edge technology to deliver
                unrivalled product choice on a global scale. Together, we’re
                speeding up the SWITCH to zero carbon transportation.
              </p>
            </div>
            <div
              className='col-lg-6 aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <img
                className='img-fluid mb-4'
                src={carbonneutralLogo}
                alt='carbonneutralLogo'
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className='split-column mb-5'>
        <div className='row no-gutters align-items-center'>
          <div
            className='col-md-6 order-md-last generic-padding split-col-banner aboutCompanyBackground'
            style="background-image:url('../sites/default/files/banner-ohm.jpg');"
          ></div>
          <div className='col-lg-1 d-none d-lg-block'></div>
          <div className='col-md-6 col-lg-5 order-md-first generic-padding'>
            <div className='section-heading section-heading-sm'>
              <h2 className='title'>OHM</h2>
            </div>
            <p className='lead text-blue'>
              We believe that everyone on earth has the right to be part of the
              protection of our planet. OHM Global Mobility, part of SWITCH,
              offers a range of eMobility services that are accessible to all.
            </p>
            <p className='lead text-blue'>
              Discover OPEX-based, pay-per-km solutions ranging from vehicle
              subscriptions to eMobility as a Service (eMaaS).
            </p>
            <p className='mt-5'>
              <a
                target='_blank'
                href='https://www.ohmemobility.com/'
                className='btn btn-rectangle btn-sm'
              >
                Learn More{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns:xlink='http://www.w3.org/1999/xlink'
                  version='1.0'
                  x='0px'
                  y='0px'
                  viewBox='0 0 24.9 24.8'
                  style='enable-background:new 0 0 24.9 24.8;'
                  xml:space='preserve'
                  className='ico-arrow'
                  width='22px'
                >
                  <g>
                    <defs>
                      <circle id='icoArrow1' cx='12.4' cy='12.2' r='11.5' />
                    </defs>
                    <clipPath id='icoArrow2'>
                      <use xlink:href='#icoArrow1' style='overflow:visible;' />
                    </clipPath>
                    <path
                      className='st0'
                      d='M12.4,2.2c5.5,0,10,4.5,10,10h3c0-7.2-5.8-13-13-13V2.2z M2.4,12.2c0-5.5,4.5-10,10-10v-3c-7.2,0-13,5.8-13,13   H2.4z M12.4,22.2c-5.5,0-10-4.5-10-10h-3c0,7.2,5.8,13,13,13V22.2z M22.4,12.2c0,5.5-4.5,10-10,10v3c7.2,0,13-5.8,13-13H22.4z'
                    />
                  </g>
                  <path
                    className='st1'
                    d='M15.2,12.7c-0.3-0.2-0.3-0.6,0-0.8l1,1.2c0.5-0.4,0.5-1.1,0-1.5L15.2,12.7z M15.2,11.8l-5.4,4.5l1,1.2l5.4-4.5  L15.2,11.8z M9.8,8.2l5.4,4.5l1-1.2L10.7,7L9.8,8.2z M15.7,12.4l0.5,0.6L15.7,12.4z M15.7,12.1l0.5-0.6L15.7,12.1z'
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section> */}
      <section className=''>
        <div className='container-fluid'>
          <div className='flex-row sm:flex sm:justify-between mx-4 my-8 '>
            <div className='col-md-6'>
              <div className='section-heading mb-0 text-3xl '>
                <h2 className='title'>Awards & Accreditations</h2>
              </div>
            </div>
            <div className='col-md-6 text-xl pt-2'>
              <h3 className='web-font-2 text-md-right'>
                World-leading mobility solutions
              </h3>
            </div>
          </div>
          <div className=' w-full divide-x-8 h-[5px] bg-no-repeat pb-6 text-center' style={{ backgroundImage: `url(${patternBlackSvg})` }}></div>
        {/* <AboutSlider /> */}
        </div>
      </section>
      
    </div>
  );
};

export default About;
