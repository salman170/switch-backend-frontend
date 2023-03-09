import React, { useEffect } from 'react';
import vBUSES from '../../assets/video/vBUSES.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
       <section className="p-xl bg-stone-100">
          <div className="container">
            <div className="text-4xl p-8" data-aos="fade-up">
              <h2 className="title" data-editor-processed="true">
                Cleaner, smarter journeys<br />
                Cleaner, connected cities
              </h2>
            </div>
            <div className="divide-x"></div>
            <div className="flex justify-between flex-col md:flex-row">
              <div className="col-lg-6 col-xl-5">
                <p
                  className="display-def-16"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-editor-processed="true"
                >
                  At SWITCH, we're working with cities across the world to make
                  everyday life better. Our carbon neutral transport solutions
                  are built with your whole community in mind.
                </p>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-2 pl-xl-0">
                <h3
                  className="web-font-2 text-blue text-lg-right"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-editor-processed="true"
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
    </div>
  );
};

export default Home;
