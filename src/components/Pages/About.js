import React, { useEffect } from 'react';
import videoPlay from '../../assets/themes/custom/switchmobility/resources/images/company-animation-v2.mp4';
import backImage from '../../assets/sites/default/files/banner-company.jpg';
import carbonneutralLogo from '../../assets/sites/default/files/carbonneutralLogo.png';
import patternGreen from "../../assets/themes/custom/switchmobility/resources/images/pattern-green.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <section class='hero-banner hero-banner-plain bg-color-green-grid generic-padding text-white d-flex align-items-center text-center mb-5'>
        <div class='hero-image'></div>
        <div class='container-fluid'>
          <div class='hero-holder'>
            <div class='section-heading' data-aos='fade-up'>
              <h2 class='title' data-editor-processed='true'>
                Hello, we're SABOO eZONE
              </h2>
              <p class='subtitle' data-editor-processed='true'>
                A next-generation electric vehicle company backed by over 50
                years of experience.
              </p>
            </div> 
          </div>
        </div>
      </section> */}
      <section className='bg-emerald-500 grid md:min-h-[70vh] lg:min-h-[84vh] place-items-center  text-white ' style={{ backgroundImage: `url(${patternGreen})` }}>
        <div className='section-heading ' data-aos='fade-up'>
          <div
            className='text-2xl md:text-4xl lg:text-6xl   flex justify-center  '
            data-editor-processed='true'
          >
            Hello, we're SABOO eZONE ⚡
          </div>
          <div
            className='md:text-xl text-lg text-center pt-4'
            data-editor-processed='true'
          >
            A next-generation electric vehicle company backed by over 50 years
            of experience.
          </div>
        </div>
      </section>
      <section class='bg-color-blue company-animation-wrapper'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div class='col-md-6 company-animation'>
            <div class='embed-responsive embed-responsive-16by9'>
              <video
                loop
                muted
                playsinline
                width='100%'
                preload='metadata'
                autoPlay
                className='d-block'
              >
                <source src={videoPlay} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className='md:h-auto bg-cover bg-no-repeat h-screen'
            style={{ backgroundImage: `url(${backImage})` }}
          ></div>
        </div>
      </section>
      <section class='generic-padding-xl m-4 md:m-8'>
        <div class='container-fluid'>
          <div class='row d-flex align-items-start'>
            <div class='col-lg-6'>
              <div
                class='section-heading section-heading-xs'
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
              class='col-lg-6 aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <img
                class='img-fluid mb-4'
                src={carbonneutralLogo}
                alt='carbonneutralLogo'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
