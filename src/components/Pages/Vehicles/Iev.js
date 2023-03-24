import React, { useEffect,  } from 'react';

import homeBanner from '../../../assets/themes/custom/switchmobility/resources/images/ieV/Iev-series-banner.jpg';
import homeMobileBanner from '../../../assets/themes/custom/switchmobility/resources/images/ieV/Iev-series-tab-banner.jpg';

import ievSeriesLogo from '../../../assets/sites/default/files/ieV/eiv-logo-sm.png';
import iev3 from '../../../assets//sites/default/files/ieV/IeV-3-img.jpg';
import iev4 from '../../../assets/sites/default/files/ieV/IeV-4-img.jpg';
// import iev4 from '../../../assets/sites/default/files/ieV/IeV-4-img.jpg';
// import product1 from '../../../assets/sites/default/files/ieV/prodct-1-img1.jpg';
// import product3 from '../../../assets/sites/default/files/ieV/prodct-1-img3.jpg';

// import blueArrow  from '../../../assets/sites/default/files/ieV/blueArrow.png'
//  import icoArrowLeft  from '../../../assets/sites/default/files/eiv7/ico-arrow-left.png'
//  import icoArrowRight  from '../../../assets/sites/default/files/eiv7/ico-arrow-right.png'

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
                  <a
                    href='#product1'
                    className='cursor-pointer text-blue-700 underline'
                  >
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
                  <a
                    href='#product2'
                    className='cursor-pointer text-blue-700 underline'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className='tableWithSlider tableSliderBlue'
        id='product1'
        data-aos='fade-up'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='container'>
          <div className='buttonGroup'>
            <a
              href='javascript:void(0)'
              className='button active'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <span className='icon'>
                <img src={blueArrow} alt="" />
              </span>
              <span className='text'>Product 1</span>
            </a>
            <a href='#product2' className='button scrollLink'>
              <span className='text'>Product 2</span>
            </a>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <h2 className='d-block d-lg-none d-xl-none'>
                SWITCH IeV Series Product 1
              </h2>
              <div className='tableSlider'>
                <div
                  id='productOne'
                  className='carousel slide'
                  data-ride='carousel'
                  data-interval='false'
                >
                  {/* Indicators */}
                  {/* <ul className='carousel-indicators mb-0'>
                    <li
                      data-target='#productOne'
                      data-slide-to='0'
                      className='active'
                    ></li>
                    <li data-target='#productOne' data-slide-to='1'></li>
                  </ul> */}

                  {/* The slideshow */}
               {/*    <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img
                        src={product1}
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='carousel-item'>
                      <img
                        src={product3}
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </div>

                  {/* Left and right controls */}
                 {/*  <a
                    className='carousel-control-prev'
                    href='#productOne'
                    data-slide='prev'
                  >
                    <img src={icoArrowLeft} alt='' />
                  </a>
                  <a
                    className='carousel-control-next'
                    href='#productOne'
                    data-slide='next'
                  >
                    <img src={icoArrowRight} alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 tableSliderRight'>
              <h2 className='d-none d-lg-block d-xl-block'>
                SWITCH IeV Series Product 1
              </h2>
              <h3>Technical Specifications</h3>

              <div className='table-responsive'>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <td className='font-medium'>GVW (Rated) in kgs</td>
                      <td>2620</td>
                    </tr>
                    <tr>
                      <td className='font-medium'>Volume Load (Cu ft)</td>
                      <td>250</td>
                    </tr>
                    <tr>
                      <td className='font-medium'>
                        Range in kms for Non AC (Base)
                      </td>
                      <td>~ 150</td>
                    </tr>
                    <tr>
                      <td className='font-medium'>Max Speed (kmph)</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td className='font-medium'>Restart Gradeability in %</td>
                      <td>22%</td>
                    </tr>
                    <tr>
                      <td className='font-medium'>Motor (Peak Power)</td>
                      <td>40 Kw</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Iev;
