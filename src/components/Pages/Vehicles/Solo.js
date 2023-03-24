import React, { useEffect } from 'react';

import homeBanner from '../../../assets/sites/default/files/vehicle-banner.jpg';
import blueSvg from '../../../assets/themes/custom/switchmobility/resources/images/pattern-blue.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Solo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section>
        <div>
          <img
            src={homeBanner}
            alt=''
            srcset=''
            className='object-cover w-full relative '
          />
          {/* <img
            src={homeBanner}
            alt=''
            srcset=''
            className=' object-cover w-full lg:hidden block m-auto'
          /> */}
        </div>
      </section>
      <section className=' bg-stone-100'>
        <div className='container lg:mx-12'>
          <div
            className='text-2xl md:text-3xl lg:text-4xl pt-8 md:mx-12 md:pt-16 pl-8  pb-6'
            data-aos='fade-up'
          >
            <h2 className='text-[#505bfe]' data-editor-processed='true'>
              From London’s red double-deckers to rapid charging networks in
              Ahmedabad – our trusted range is leading the way in zero-emission
              public transport.
            </h2>
          </div>

          <div
            className=' w-full divide-x-8 h-[5px] bg-no-repeat pb-6 my-10'
            style={{ backgroundImage: `url(${blueSvg})` }}
          ></div>

          <div className='flex flex-col md:flex-row justify-between'>
            <div className='px-5 md:mb-24 mb-12'>
              <div
                className='text-lg md:text-xl'
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                <div className='text-[#505bfe] font-semibold'>
                  A proven track record
                </div>
                <div>
                  Our EVs are already on the road. We’ve delivered over 300
                  vehicles and clocked over 30 million electric miles in
                  developed and developing markets.
                </div>
              </div>
            </div>
            <div className='px-2 md:mb-24 mb-12'>
              <div
                className='text-lg md:text-xl'
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                <div className='text-[#505bfe] font-semibold'>
                  Advanced offering
                </div>
                <div>
                  Buses and eLCVs fitted with the latest battery innovations and
                  SWITCH proprietary tech. Our smart solutions mean lower costs
                  for you.
                </div>
              </div>
            </div>
            <div className='px-5 md:mb-24 mb-12'>
              <div
                className='text-lg md:text-xl'
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                <div className='text-[#505bfe] font-semibold'>
                  Unrivalled service
                </div>
                <div>
                  You’re never on your own. From customisation to aftersales and
                  updates, we’ll be with you at every step.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solo;
