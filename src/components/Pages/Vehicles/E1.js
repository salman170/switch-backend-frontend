import React, { useEffect } from 'react';

import homeBanner from '../../../assets/sites/default/files/odin/ODIN-banner-img.jpg';
// import logo from '../../../assets/sites/default/files/odin/e1-logo.svg';
import homeMobileBanner from '../../../assets/sites/default/files/odin/main-mobile-banner.jpg';
import subBanner from '../../../assets/sites/default/files/odin/sub-banner1.jpg';
import largeImage from '../../../assets/sites/default/files/odin/sub-banner-largeImage.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const E1 = () => {
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
          className='object-cover w-full relative hidden lg:block pt-2'
        />
        <img
          src={homeMobileBanner}
          alt=''
          srcset=''
          className=' object-cover w-full lg:hidden block m-auto '
        />
      </section>
      {/* <section>
      <div className='w-full  h-[300px] md:h-[500px] lg:h-[600px]  flex '>
          
        <div
              className='md:w-2/3 w-full '
              style={{
                backgroundImage: `url(${homeBanner})`,
                // height: '600px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
              }}
            >
              <img src={logo} alt="" srcset="" />
            </div>
        </div>
      </section> */}
      <section>
        <div className='flex bg-[#16b895]'>
          <div className='lg:w-3/6  h-[300px] md:h-[500px] lg:h-[600px]  flex '>
            <div className='lg:w-1/3'></div>
            <div
              className='hidden lg:block lg:w-2/3 w-full '
              style={{
                backgroundImage: `url(${subBanner})`,
                // height: '600px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
              }}
              data-aos='fade-right'
              data-aos-duration='2000'
            ></div>
          </div>
          <div
            className='w-full lg:w-3/6 h-[300px] md:h-[500px] lg:h-[600px] '
            style={{
              backgroundImage: `url(${largeImage})`,
              // height: '600px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
              width: '100%',
            }}
            data-aos='fade-left'
            data-aos-duration='2000'
          >
            <div className='flex flex-col items-end pt-12 md:pr-12'>
              <div className='text-white text-xl md:text-3xl lg:text-5xl '>
                Next generation.
              </div>
              <div className='text-white text-xl md:text-3xl lg:text-5xl '>
                For the now generation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default E1;
