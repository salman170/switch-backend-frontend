import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import patternWhite from '../../assets/themes/custom/switchmobility/resources/images/pattern-grid-white.png';
import techPlay from '../../assets/sites/default/files/tech-animation.mp4';
import lightweight from '../../assets/sites/default/files/ico-tech-monocoque.svg';
import BespokeBattery from '../../assets/sites/default/files/ico-tech-bespoke-battery.svg';
import AIpoweredDigitalTwin from '../../assets/sites/default/files/ico-tech-digital-twin.svg';
import icoTechBig from '../../assets/sites/default/files/ico-tech-big-data.svg';
import controlYourfleet from '../../assets/sites/default/files/ico-tech-i-alert.svg';
import smartIneraction from '../../assets/sites/default/files/ico-tech-smart-interactions.svg';
import upgradableOverTheAir from '../../assets/sites/default/files/ico-tech-upgradable.svg';
import eMobilityService from '../../assets/sites/default/files/ico-tech-emobility.svg';



const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <section
          className="hero-banner hero-banner-plain bg-color-grey-grid generic-padding text-blue d-flex align-items-center text-center"
        >
          <div className="hero-image"></div>
          <div className="container-fluid">
            <div className="hero-holder">
              <div className="section-heading" data-aos="fade-up">
                <h2 className="title">A connected world</h2>
                <p className="subtitle">Intelligent systems, net zero by design.</p>
              </div>
            </div>
          </div>
        </section> */}
      <section
        className='bg-[#edede6] grid min-h-[60vh] lg:min-h-[84vh] place-items-center  text-white '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className='section-heading text-indigo-600' data-aos='fade-up'>
          <div
            className='text-3xl md:text-4xl lg:text-6xl   flex justify-center text-center  '
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            A connected world
          </div>
          <div
            className='md:text-2xl lg:text-4xl text-xl text-center pt-4 font-mono '
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            Intelligent systems, net zero by design.
          </div>
        </div>
      </section>
      <section className='generic-padding '>
        <div className='container-fluid'>
          <div className='md:p-10 p-3'>
            <video
              width='100%'
              preload='metadata'
              loop
              autoPlay
              playsinline
              muted
              className='d-block'
            >
              <source src={techPlay} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className=' bg-[#edede6]'>
        <div
          className='sm:py-20 py-10 md:px-16 sm:px-10 px-5 grid grid-cols-1 md:grid-cols-6'
          data-aos='fade-up'
        >
          <div
            className='text-2xl text-indigo-600 md:col-span-4 lg:col-span-3'
            data-aos='fade-up'
          >
            <p className=' mb-8'>
              With the world changing rapidly, our research and proprietary
              technologies are helping us stay ahead of the curve.
            </p>
            <p className=''>
              We’ve designed everything from the ground up to be net zero and
              achieve the lowest possible TCO. Discover the tech behind our
              smart vehicles.
            </p>
          </div>
        </div>
      </section>
      <section className='my-10 mx-5'>
        <div className='flex flex-col'>
          <div className='flex md:gap-3 gap-2'>
            <div className=''>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='100'>
                <h3 className='title'>
                  <img
                    src={lightweight}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Icon'
                  />
                  <span className='text-blue web-font-1'>
                    Lightweight Monocoque Material
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    Strong, ultra-lightweight and made from a high proportion of
                    plant-based composites. The self-coloured body panels
                    eliminate the need for paint process during manufacturing,
                    and make replacements and repairs more efficient. SWITCH
                    materials do not degrade over time meaning a longer life for
                    your vehicle.
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='200'>
                <h3 className='title'>
                  <img
                    src={BespokeBattery}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Bespoke Battery Technology'
                  />
                  <span className='text-blue web-font-1'>
                    Bespoke Battery Technology
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    Build your own range. We offer the latest innovations in
                    battery design, built to meet your exact needs. Our modular
                    batteries are integrated into the vehicle structure with a
                    wide variety of options, allowing you to choose how long you
                    want to keep going.
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='300'>
                <h3 className='title'>
                  <img
                    src={AIpoweredDigitalTwin}
                    className='icon'
                    width='40'
                    height='40'
                    alt='AI powered Digital Twin'
                  />
                  <span className='text-blue web-font-1'>
                    AI powered Digital Twin
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    All SWITCH designed products have a digital twin (a virtual
                    replica of a physical device). These allow us to monitor,
                    diagnose and continually optimise each and every vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='divider divider-black'></div>
          <div className='flex md:gap-3 gap-2'>
            <div className='col-md-4'>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='100'>
                <h3 className='title'>
                  <img
                    src={icoTechBig}
                    className='icon'
                    width='40'
                    height='40'
                    alt='We use Big Data'
                  />
                  <span className='text-blue web-font-1'>We use Big Data</span>
                </h3>
                <div>
                  <p className='text-sm'>
                    To get a complete picture of our vehicles, data is vital. We
                    collect and analyse over 2TB of data daily, giving us the
                    insights we need to continuously improve our offering.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='200'>
                <h3 className='title'>
                  <img
                    src={controlYourfleet}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Control your fleet with i-Alert'
                  />
                  <span className='text-blue web-font-1'>
                    Control your fleet with i-Alert
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    Our i-Alert platform allows our customers to access vehicle
                    tracking and performance remotely. Diagnostics, prognostics
                    and battery management tools for world-class fleet
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='300'>
                <h3 className='title'>
                  <img
                    src={smartIneraction}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Smart interactions'
                  />
                  <span className='text-blue web-font-1'>Smart interactions</span>
                </h3>
                <div>
                  <p className='text-sm'>
                    From speed restrictions to automatic emergency braking, our
                    vehicles communicate with the world around them to ensure
                    the highest levels of safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='divider divider-black'></div>
          <div className='flex md:gap-3 gap-2 justify-between'>
            <div className='col-md-4'>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='100'>
                <h3 className='title'>
                  <img
                    src={upgradableOverTheAir}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Upgradable over the air'
                  />
                  <span className='text-blue web-font-1'>
                    Upgradable over-the-air
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    We provide over-the-air updates for our software meaning our
                    clients always have the latest optimisations instantly,
                    without the need to visit a service centre.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='icon-block' data-aos='fade-up' data-aos-delay='200'>
                <h3 className='title'>
                  <img
                    src={eMobilityService}
                    className='icon'
                    width='40'
                    height='40'
                    alt='eMobility as a Service'
                  />
                  <span className='text-blue web-font-1'>
                    eMobility as a Service
                  </span>
                </h3>
                <div>
                  <p className='text-sm'>
                    (Or eMaaS for short.) SWITCH provides a pay as you go
                    option. We take care of the vehicles and their maintenance,
                    so that you can focus on the most important things to you –
                    transporting passengers or goods safely and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
