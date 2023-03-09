import React, { useEffect } from 'react';
import vBUSES from '../../../assets/video/vBUSES.mp4';
import Slider from './Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section >
        <Slider />
      </section>
      <section className='p-xl bg-stone-200'>
        <div className='container'>
          <div className='text-4xl lg:text-6xl pt-16 pl-12 pb-12' data-aos='fade-up'>
            <h2 className='title' data-editor-processed='true'>
              Cleaner, smarter journeys
              <br />
              Cleaner, connected cities
            </h2>
          </div>
          <div className='divide-x'></div>
          <div className='flex justify-between flex-col md:flex-row '>
            <div className='mx-12 mb-24'>
              <p
                className='text-xl'
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                At SWITCH, we're working with cities across the world to make
                everyday life better. Our carbon neutral transport solutions are
                built with your whole community in mind.
              </p>
            </div>
            <div className='mx-12 '>
              <h3
                className=' text-blue-600 text-xl'
                data-aos='fade-up'
                data-aos-delay='200'
                data-editor-processed='true'
              >
                A carbon neutral certified company
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className='video-container'>
        <video
          width='100%'
          preload='metadata'
          loop
          autoPlay
          playsinline
          muted
          className='d-block'
        >
          <source src={vBUSES} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="generic-padding">
          <div className="container-fluid">
            <div className="flex">
              <div className="col-md-5">
                <div className='text-3xl lg:text-5xl pt-16 pl-12 pb-8' data-aos="fade-up">
                  <h2 className="title">Leading the charge</h2>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-editor-processed="true"
                >
                  In 2014, we introduced the first British built, pure electric
                  buses to London’s roads. Since then, we’ve clocked over 30
                  million electric miles.
                </p>
              </div>
              <div className="pt-16 pl-12 pb-8">
                <h3
                  className="text-blue-600 text-xl"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-editor-processed="true"
                >
                  Explore our current range
                </h3>
              </div>
            </div>

            <div className="row gutter-100 mb-3">
              <div
                className="col-md-6 col-lg-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="300"
              >
                <div className="prod-title">
                  <h3 className="title">SWITCH e1</h3>
                </div>
                <div className="prod-pic">
                  <img
                    src="sites/default/files/2022-06/e1-vehicle-img.jpg"
                    alt="SWITCH e1"
                    className="img-fluid"
                  />
                </div>
                <div className="prod-btm">
                  <a
                    className="d-flex justify-content-between"
                    href="en/switch-e1.html"
                  >
                    <span>MORE INFORMATION</span>
                    <img
                      src="themes/custom/switchmobility/resources/images/chevron-right.svg"
                      width="20"
                      alt="MORE INFORMATION"
                    />
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="400"
              >
                <div className="prod-title">
                  <h3 className="title">SWITCH EiV 12</h3>
                </div>
                <div className="prod-pic">
                  <img
                    src="sites/default/files/2022-06/vehicle_ev12_0.jpg"
                    alt="SWITCH EiV 12"
                    className="img-fluid"
                  />
                </div>
                <div className="prod-btm">
                  <a
                    className="d-flex justify-content-between"
                    href="en/switch-eiv12.html"
                  >
                    <span>MORE INFORMATION</span>
                    <img
                      src="themes/custom/switchmobility/resources/images/chevron-right.svg"
                      width="20"
                      alt="MORE INFORMATION"
                    />
                  </a>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <div className="prod-title">
                  <h3 className="title">SWITCH EiV 22</h3>
                </div>
                <div className="prod-pic">
                  <img
                    src="sites/default/files/2022-08/EIV-22-thumb-img.jpg"
                    alt="SWITCH EiV 22"
                    className="img-fluid"
                  />
                </div>
                <div className="prod-btm">
                  <a
                    className="d-flex justify-content-between"
                    href="en/switch-eiv22.html"
                  >
                    <span>MORE INFORMATION</span>
                    <img
                      src="themes/custom/switchmobility/resources/images/chevron-right.svg"
                      width="20"
                      alt="MORE INFORMATION"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;
