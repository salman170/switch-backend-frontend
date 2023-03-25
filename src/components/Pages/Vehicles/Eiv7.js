import React, { useEffect } from 'react';

import homeBanner from '../../../assets/themes/custom/switchmobility/resources/images/eiv7/EiV7-banner.jpg';
import homeMobileBanner from '../../../assets/themes/custom/switchmobility/resources/images/eiv7/EiV-mobile-banner.jpg';
import logoEiv from '../../../assets/sites/default/files/eiv7/eiv-logo-sm.png';
import productEiv7 from '../../../assets/sites/default/files/eiv7/Eiv-product-offering-image.jpg';
import eivImage1 from '../../../assets/sites/default/files/eiv7/EiV-img1.jpg';
import eivImage2 from '../../../assets/sites/default/files/eiv7/EiV-img2.jpg';
import eivImage3 from '../../../assets/sites/default/files/eiv7/EiV-img3.jpg';
import eivImage4 from '../../../assets/sites/default/files/eiv7/EiV-img4.jpg';
import eivImage5 from '../../../assets/sites/default/files/eiv7/EiV-img5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageSlider from './imageSlider';

const slides = [
  { url: {eivImage1}, title: 'beach' },
  { url: {eivImage2}, title: 'boat' },
  { url: {eivImage3}, title: 'forest' },
  { url: {eivImage4}, title: 'city' },
  { url: {eivImage5}, title: 'italy' },
];

const Eiv7 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section>
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
      </section>

      <section
        className=' py-28 bg-[#edede6] '
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='flex justify-center  '>
          <div className='text-center lg:w-full container md:px-24'>
            <h2 className='text-3xl lg:text-4xl  font-semibold text-center'>
              Aesthetically designed for multi-passenger urban commuting.
            </h2>
            <p className='mt-4 text-center text-xl font-mono leading-7 lg:text-lg'>
              SWITCH EiV 7 is packed with features that offer the comfort of a
              personal vehicle.
            </p>
            <p className='mt-4 text-center text-xl text-[#505bfe] leading-6 lg:text-lg mb-5'>
              A modern, emission-free mobility alternative to help cities and
              customers move towards net zero.
            </p>
            <p className='mt-4 text-center text-lg leading-6 lg:text-lg mb-5'>
              Equipped with SWITCH iON, it is capable of bustling through nooks
              and corners of India.
            </p>
            <p className='text- text-center text-gray-500'>
              <i> Unlock sustainable mobility with</i>
            </p>
            <img
              src={logoEiv}
              className='mx-auto my-4 px-6 w-auto'
              alt='SWITCH IeV Series logo'
            />
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
          <div class='container '>
            <h2 class='text-center text-4xl lg:text-6xl  md:pt-12 pt-6'>
              Product Offering
            </h2>
            <div className='object-cover p-4 md:p-12 flex  flex-col justify-center'>
              <img
                src={productEiv7}
                alt=''
                className='xl:px-72 lg:px-30 md:px-10'
              />

              <div className='flex text-lg xl:px-72 md:px-10 lg:px-30 font-medium justify-between py-4 '>
                <h3>SWITCH IeV Series Product 1</h3>
                <a
                  href='#product1'
                  className='cursor-pointer text-blue-700 underline'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='w-[500px] h-[280px] mx-auto bg-slate-200'></div>
        <ImageSlider slides={slides} />
      </section>
    </div>
  );
};

export default Eiv7;
