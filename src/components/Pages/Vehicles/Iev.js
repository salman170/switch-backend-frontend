import React, { useEffect } from 'react';

import homeBanner from '../../../assets/themes/custom/switchmobility/resources/images/ieV/Iev-series-banner.jpg';
import homeMobileBanner from '../../../assets/themes/custom/switchmobility/resources/images/ieV/Iev-series-tab-banner.jpg';

import ievSeriesLogo from '../../../assets/sites/default/files/ieV/eiv-logo-sm.png';
import iev3 from '../../../assets//sites/default/files/ieV/IeV-3-img.jpg';
import iev4 from '../../../assets//sites/default/files/ieV/IeV-4-img.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Iev = () => {
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
            className='object-cover w-full relative hidden lg:block '
          />
          <img
            src={homeMobileBanner}
            alt=''
            srcset=''
            className=' object-cover w-full lg:hidden block m-auto'
          />
        </div>
      </section>
      <section
        className=' py-28 bg-[#edede6] '
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='flex justify-center  '>
          <div className='text-center lg:w-full container md:px-24'>
            <h2 className='text-3xl lg:text-4xl font-semibold text-center'>
              Launching the SWITCH IeV Series, the intelligent electric vehicle.
            </h2>
            <p className='mt-4 text-center leading-7 lg:text-lg'>
              Designed to deliver performance and equipped with tech-enabled
              intelligence, here is the forerunner of next-generation commercial
              mobility. The SWITCH IeV Series cuts down emissions in the
              mid-mile and last-mile delivery segments whilst providing the most
              comfortable experience in every inch of the driver's cabin.
            </p>
            <p className='mt-4 text-center leading-6 lg:text-lg'>
              <small>
                Built for smooth operations, the SWITCH IeV series offers a
                significantly lower total cost of ownership in comparison to
                conventional commercial vehicles.
              </small>
            </p>
            <img
              src={ievSeriesLogo}
              className='mx-auto my-8 w-48'
              alt='SWITCH IeV Series logo'
            />
            <p className='text-sm text-center text-gray-500'>
              The SWITCH IeV Series, From SWITCH Mobility.
            </p>
            <h3 className='text-center text-blue-500 font-semibold text-xl mt-8'>
              Move Better, Together.
            </h3>
          </div>
        </div>
      </section>
     
        <section
        class='product-range-Section'
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='flex justify-center'>
          <div class='container'>
          <h2 class='text-center text-4xl font-medium pt-12'>
              Range Of Products
            </h2>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div class='product-range-SingleProduct mb-12'>
                <img
                  src={iev3}
                  class='w-full h-full object-cover p-6 md:p-12 md:pb-2'
                  alt='Product 1 '
                />
                <div className='flex justify-around px-8 '>
                  <h3>SWITCH IeV Series Product 1</h3>
                  <a href='#product1' className='cursor-pointer text-blue-700 underline'>
                    Learn More
                  </a>
                </div>
              </div>
              <div class='product-range-SingleProduct mb-12'>
                <img
                  src={iev4}
                  class='w-full h-full object-cover p-6 md:p-12 md:pb-2'
                  alt='Product 2 '
                />
                 <div className='flex justify-around px-8 '>
                  <h3>SWITCH IeV Series Product 2</h3>
                  <a href='#product2' className='cursor-pointer text-blue-700 underline'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   

    </div>
  );
};

export default Iev;
