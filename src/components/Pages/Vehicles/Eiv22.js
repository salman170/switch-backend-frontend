import React, { useEffect } from 'react';

// import heroImageMobile from '../../../assets/sites/default/files/eiV22/EIV-22-mobile-banner.jpg'
import heroImage from '../../../assets/sites/default/files/eiV22/switch-eiv22-banner.jpg';
import heroImageMobile from '../../../assets/sites/default/files/metrodecker/metrodecker-banner-mobile1.jpg';
import doubledecker from '../../../assets/sites/default/files/eiV22/india-first-doubledecker.jpg';
import eiv22 from '../../../assets/sites/default/files/eiV22/EVI-22-dimension.png';
import seats from '../../../assets/themes/custom/switchmobility/resources/images/e1/perfect-engn-img.jpg';
import evi22Blog1 from '../../../assets/sites/default/files/eiV22/EVI-22-blog1.jpg';
import evi22Blog2 from '../../../assets/sites/default/files/eiV22/EVI-22-blog2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Eiv22 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section>
        <div>
          <img
            src={heroImage}
            alt=''
            srcset=''
            className='object-cover w-full relative hidden md:block '
          />
          <img
            src={heroImageMobile}
            alt=''
            srcset=''
            className=' object-cover w-full md:hidden block m-auto'
          />
        </div>
      </section>
      <section class='' id='main-container' style={{ scrollMarginTop: '65px' }}>
        <div class='col-12  bg-[#16b895]'>
          <div class='grid lg:grid-cols-3  ' style={{ overflow: 'hidden' }}>
            <div class='col-span-1 text-white '>
              <div class=' text-2xl font-medium md:text-3xl lg:text-5xl lg:pt-18 text-left p-5 md:px-16 md:pt-16'>
              India's first electric double-decker
              </div>

              <p class='text-left  px-5 md:px-16 lg:px-12 lg:text-lg'>
              Introducing the next generation of intra-city bus travel. The iconic double-decker bus has gone fully electric for cleaner, smarter journeys that won’t harm the earth.
              </p>
              <br />
              <p class='text-left px-5 md:px-16 lg:px-12 lg:text-lg pb-4'>
              Designed, developed and manufactured in India using SWITCH'S global expertise in electric buses, the SWITCH EiV 22 is equipped with the latest technology, ultra-modern design, highest safety and best-in-class comfort features. This renewed icon will revolutionise public transportation in the country and set new standards across the industry.
              </p>
              {/* <img
                class='img-fluid d-lg-none d-md-block pb-4'
                src={subBanner}
                alt=''
              /> */}
            </div>
            <div
              class='md:h-[70vh] my-4 mx-4 md:col-span-2 bg-no-repeat'
              // style={{
              //   backgroundImage: `url(${largBanner})`,
              // }}
              data-aos='fade-left'
              data-aos-duration='1500'
            >
              {/* <div class='banner-sm-caption pt-5'></div> */}
              <img
                src={doubledecker}
                alt=''
                srcset=''
                className='object-cover md:h-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col md:flex-row overflow-hidden items-center '>
          <div className='md:w-1/2'>
            <div class='col-span-1  '>
              <div class=' text-2xl pt-10 font-medium md:text-3xl lg:text-5xl  text-left pl-8 md:px-10  lg:mx-14 xl:mx-18 '>
                Upgrading the urban commute
              </div>

              <div class='text-left px-5 pt-4 pl-8 md:px-10 lg:mx-14 xl:mx-18 lg:text-lg font-semibold pb-5 '>
                Contemporary, comfortable, cool.
              </div>

              <p class='text-left px-5 pl-8 md:px-10 lg:mx-14 xl:mx-18 lg:text-lg pb-4 '>
                The SWITCH EiV 22 has been designed with the driver and
                passenger experience in mind. Step inside the cabin to discover
                premium interior design, high-quality materials, lightweight
                cushions and other car-like features for your most comfortable
                commute yet.
                <br />
                <br /> This state-of-the-art EV is fitted with the latest AC
                technology, offering effective cooling in India's hot climatic
                conditions. Features include extra-wide front and rear doors,
                two staircases and an emergency door complying with the latest
                safety standards.
                <br />
                <br /> The double-decker serves as the ideal solution for city
                transportation. With optimised seating, the SWITCH EiV 22 can
                comfortably transport 65 seated passengers, occupying less road,
                terminal and depot floor space per seated passenger.
              </p>

              <div className='md:mb-4 px-5   xl:m-20 pl-8 md:px-10  lg:mx-14 xl:mx-16 '>
                <button className='bg-indigo-600 text-white py-2 px-4 '>
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
          <div
            className='md:w-1/2 p-5 xl:py-40  '
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <img src={seats} alt='' srcset='' />
          </div>
        </div>
      </section>
      <section class='generic-padding-sm bg-[#00002d]  '>
        <div class='col-lg-10 col-md-12 offset-lg-1 pr-2 mx-auto pb-12'>
          <div class='text-4xl font-medium pt-8 text-left mb-5 text-white p-3 px-10 md:px-28 md:pt-16 md:pb-10'>
            Technical Specifications
          </div>
          <img
            src={eiv22}
            alt=''
            srcset=''
            className='xl:hidden lg:hidden md:block block m-auto'
          />
          <div class='text-white pl-2 md:px-28  md:pb-3 flex'>
            <div class='table-responsive '>
              <table class='table '>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1 bg-'>Product</td>
                  <td className='border md:p-2 p-1'>EiV 22 – Double Decker</td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Application</td>
                  <td className='border md:p-2 p-1'>
                    City / Mofussil / Tourist
                  </td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Motor</td>
                  <td className='border md:p-2 p-1'>
                    Permanent Magnet Synchronous AC Motor; 235 KW Peak, 140 KW
                    Continuous, 3100 Nm Peak
                  </td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Battery Technology</td>
                  <td className='border md:p-2 p-1'>
                    Advanced Lithium-Ion NMC chemistry with Modular battery
                    options
                  </td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Suspension</td>
                  <td className='border md:p-2 p-1'>
                    Front : Weveller Suspension; Rear : Air Suspension
                  </td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Brakes</td>
                  <td className='border md:p-2 p-1'>
                    Disc Brakes at Front & Drum at Rear
                  </td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Door Locations</td>
                  <td className='border md:p-2 p-1'>FOH / ROH</td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Range</td>
                  <td className='border md:p-2 p-1'>
                    Upto 250KMs in a day with opportunity charging;
                  </td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Charging Time</td>
                  <td className='border md:p-2 p-1'>1.5 – 3 Hours</td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Floor Height</td>
                  <td className='border md:p-2 p-1'>900 mm</td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Height</td>
                  <td className='border md:p-2 p-1'>4750 mm</td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Length</td>
                  <td className='border md:p-2 p-1'>9800 mm</td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Width</td>
                  <td className='border md:p-2 p-1'>2600 mm</td>
                </tr>
                <tr>
                  <td className='border md:p-2 p-1'>Wheel Base</td>
                  <td className='border md:p-2 p-1'>4860 mm</td>
                </tr>
                <tr className='bg-indigo-500'>
                  <td className='border md:p-2 p-1'>Seating Capacity</td>
                  <td className='border md:p-2 p-1'>65+D</td>
                </tr>
              </table>
            </div>
            <div className='pt-24'>
              <img
                src={eiv22}
                alt=''
                srcset=''
                className='xl:block lg:block md:hidden hidden m-auto'
              />
            </div>
          </div>
        </div>
      </section>
      <section class='my-8'>
        <div class='row generic-padding-lg grid md:grid-cols-3 grid-rows'>
          <div class='col-span-2 md:col-span-1'>
            {/* <!-- <h2 class="subHeading mb-4">A free-flowing <br> operation.</h2> --> */}
            <div className='text-3xl px-5 pt-5 md:px-5 lg:px-16 font-medium'>
              Quality First
            </div>
            <p class='p-5 text-lg pb-4 md:px-5 lg:px-16 lg:text-xl'>
              Our current range of SWITCH EV buses in India have had an uptime
              of over 98% consistently, testimony to the product design,
              engineering and performance.
            </p>
          </div>
          <div class='col-lg-8 col-md-12 col-span-2 m-1'>
            <div class='sliderNextPrev grid sm:grid-cols-2 grid-rows'>
              <div
                class='item col-span-1 m-1 bg-gray-200 rounded-lg'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden rounded-lg'>
                  <img
                    src={evi22Blog1}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='freeFlowing'
                  />
                </div>
                <div class='px-2 py-1'>
                  {/* <!-- <h4 class="font-weight-bold ">We’ve thought of everything.</span> </h4> --> */}
                  <p>
                    SWITCH EiV 22 has been designed, developed and manufactured
                    in India utilising SWITCH'S global electric bus experience.
                    Maintenance of this ultra-modern double decker can be
                    carried out quickly and effortlessly through our dedicated
                    service teams.
                  </p>
                </div>
              </div>

              <div
                class='item col-span-1 m-1 bg-gray-200 rounded-lg'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden rounded-lg'>
                  <img
                    src={evi22Blog2}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='free Flowing 2'
                  />
                </div>
                <div class='px-2 py-1 '>
                  {/* <!-- <h4 class="font-weight-bold ">Comfortably in control.</span> </h4> --> */}
                  <p>
                    Ground up new design for EiV 22 enables easy access to key
                    service components including batteries, compressors and
                    inverters. The electric drivetrains and higher energy
                    density batteries with longer life cycles are calibrated to
                    ensure superior efficiency and lower Total Cost of Ownership
                    (TCO).
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

export default Eiv22;
