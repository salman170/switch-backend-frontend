import React, { useEffect } from 'react';

import homeBanner from '../../../assets/sites/default/files/metrocity/metrocity-home-banner.jpg';
import homeMobileBanner from '../../../assets/sites/default/files/metrocity/metrocity-banner-mobile1.jpg';
import metrocityFirstBritish from '../../../assets/sites/default/files/metrocity/metrocity-first-british.jpg';
import metrocityEfficient from '../../../assets/themes/custom/switchmobility/resources/images/metrocity/metrocity-efficient-class.jpg';
import metrocityNews1 from '../../../assets/sites/default/files/metrocity/superior-quality.jpg';
import metrocityNews2 from '../../../assets/sites/default/files/metrocity/metrocity-premium-customer.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Metrocity = () => {
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
            className='object-cover w-full relative hidden md:block '
          />
          <img
            src={homeMobileBanner}
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
                The first British-built EV in London
              </div>

              <p class='text-left px-5 md:px-16 lg:px-12 lg:text-lg'>
                The SWITCH metrocity was the first British-built, pure electric
                bus to enter service on London’s roads in 2014. Since then, it
                has been helping cities around the world move with ease and meet
                their net zero targets. Whether it’s a crowded city street or an
                open road, the SWITCH metrocity can help you get where you need
                to go in the most efficient way possible - without harming the
                environment.
              </p>
              <br />
              <p class='text-left px-5 md:px-16 lg:px-12 lg:text-lg pb-4'>
                Its versatile design, unbeatable efficiency and 100% electric
                drivetrain have made it a firm favourite on routes across the
                UK, Europe, and Japan.
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
                src={metrocityFirstBritish}
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
              <div class=' text-2xl pt-10 font-medium md:text-3xl lg:text-5xl  text-left pl-8 md:px-10  lg:mx-14 xl:mx-18 pb-8'>
                More miles, less impact
              </div>

              <p class='text-left px-5 pl-8 md:px-10 lg:mx-14 xl:mx-18 lg:text-lg 
              xl:text-2xl '>
                From the city to the suburbs, the SWITCH metrocity is the ideal
                single-deck bus for all urban environments.
                <br />
                <br /> At just 7.8-8.8 tonnes and fitted with the latest NMC
                battery technology, the SWITCH metrocity is the most efficient
                bus in its class. It can travel up to 190 miles on a single
                charge, with a full charge complete in just three hours.
                <br />
                <br /> Whether it’s a crowded city street or an open road, the
                SWITCH metrocity can help you get where you need to go in the
                most efficient way possible - without harming the environment.
              </p>

              <div className='md:mb-4 px-5   xl:m-10 pl-8 md:px-10  lg:mx-14 xl:mx-16 '>
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
            <img src={metrocityEfficient} alt='' srcset='' />
          </div>
        </div>
      </section>
      <section className='bg-[#00002d] text-white'>
        <div class='text-4xl font-medium pt-10  text-center  p-3  md:pt-16 md:pb-4'>
          Technical Specifications
        </div>
        <div className='text-xl text-justify   p-3 md:px-28  md:pb-10'>
          This battery electric low weight and short wheelbase single deck bus,
          renowned for its manoeuvrability and efficiency, has a seating
          capacity of up to 44 passengers. The SWITCH metrocity is an excellent
          vehicle for all environments.
        </div>
      </section>
      <section class=' bg-[#00002d] text-white overflow-x-scroll overflow-y-none md:overflow-x-hidden   '>
        <div class='col-lg-10 col-md-12 offset-lg-1 pr-3 mx-auto '>
          <div class='col-sm-12 customTable ' style={{ position: 'relative' }}>
            <div class=' p-3 md:px-28  md:pb-3 '>
              <table class='table m-auto  '>
                <tr>
                  <td className='border-b-2 md:text-xl  md:py-2 md:pl-2 p-1   bg-indigo-500'>
                    Body Length Options
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 md:pl-2 p-1   bg-indigo-500'>
                    8.7 m
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 md:pl-2 p-1  bg-indigo-500'>
                    9.4 m
                  </td>
                  <td className='border-b-2 md:text-xl  md:py-2 md:pl-2 p-1   bg-indigo-500'>
                    10.1 m
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 md:pl-2 p-1   bg-indigo-500'>
                    10.8 m
                  </td>
                  <td className='border-b-2 md:text-xl  md:py-2 md:pl-2 p-1   bg-indigo-500'>
                    11.5 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Overall length (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>8,740</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>9,440</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>10,130</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>10,820</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>11,520</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Overall width (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,470</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,470</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,470</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,470</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,470</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Overall height (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,850</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,850</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,850</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,850</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,850</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Wheelbase (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>3,740</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>4,440</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>5,130</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>5,820</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>6,520</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Front overhang (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,430</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,430</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,430</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,430</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,430</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Rear overhang (mm)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,570</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,570</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,570</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,570</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,570</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Gross vehicle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    13,000/ 12,960**
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    13,000/ 12,960**
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    13,000/ 12,960**
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    13,000/ 12,960**
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    13,000/ 12,960**
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Front axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    4,500/4,480
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    4,500/4,480
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    4,500/4,480
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    4,500/4,480
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    4,500/4,480
                  </td>
                </tr>
                
                <small class='text-white '>
                  All Lengths Rear axle weight design/plated (kg): 8,000/8,480
                </small>

                <br />
                <br />

                <tr>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    Overall Length (mm)
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    8.7 m 1 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    9.4 m 2 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    10.1 m 1 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    10.1 m 1 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    10.8 m 1 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    10.8 m 2 Door
                  </td>
                  <td className='border-b-2 md:text-xl   md:py-2 p-1   bg-indigo-500'>
                    11.5 m 1 Door
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Seats (maximum)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>24</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>23*</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>36</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>25*</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>40</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>29*</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>44</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Total (maximum)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>43</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>53*</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>60</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>60</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>60</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>60</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>60</td>
                </tr>
              </table>
            </div>
          </div>
          <div className='text-center'>
            <small class='text-white '>
              * Capacity limited to Transport for London (Tfl) specification
            </small>
          </div>
          <div class='text-center pb-8 pt-4'>
            <button
              class='bg-green-500 rounded-lg hover:bg-indigo-600 hover:text-white px-4 py-3 text-xl '
              data-toggle='modal'
              data-target='.download'
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      <section class='my-8'>
        <div class='row generic-padding-lg grid md:grid-cols-3 grid-rows'>
          <div class='col-span-2 md:col-span-1'>
            {/* <!-- <h2 class="subHeading mb-4">A free-flowing <br> operation.</h2> --> */}
            <div className='text-3xl px-5  pt-5 md:px-5 lg:px-16 font-medium'>
            The most efficient bus in its class.
            </div>
            <p class='p-5 text-lg text-justify  pb-4 md:px-5 lg:px-16 lg:text-xl'>
            Designed and built by a carbon neutral manufacturer, with over five million tonnes of CO2 saved to date. SWITCH metrocity utilises the knowledge we have gained from the 30 million electric miles our buses have covered, to deliver a state-of-the-art transport solution.
            </p>
          </div>
          <div class='col-lg-8 col-md-12 col-span-2 m-1 '>
            <div class='sliderNextPrev grid sm:grid-cols-2 grid-rows'>
              <div
                class='item col-span-1 m-1 bg-gray-100 rounded-lg'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden rounded-lg'>
                  <img
                    src={metrocityNews1}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='freeFlowing'
                  />
                </div>
                <div class='px-2 py-1'>
                  {/* <!-- <h4 class="font-weight-bold ">We’ve thought of everything.</span> </h4> --> */}
                  <p className='py-2 text-2xl md:py-8 font-medium'>
                  Superior agility
                  </p>
                  <p className='pb-6'>
                  This midi-bus is renowned for its superior agility and manoeuvrability, available in five different lengths with an optimised wheelbase position to make turning even the tightest corners a breeze.
                  </p>
                </div>
              </div>

              <div
                class='item col-span-1 m-1 bg-gray-100 rounded-lg '
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden rounded-lg'>
                  <img
                    src={metrocityNews2}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='free Flowing 2'
                  />
                </div>
                <div class='px-2 py-1 '>
                  {/* <!-- <h4 class="font-weight-bold ">Comfortably in control.</span> </h4> --> */}
                  <p className='py-2 md:py-10 text-2xl font-medium'>
                  Premium customer service
                  </p>
                  <p className='pb-6'>
                    You’re never on your own. Our regionally based customer
                    service managers are the first point of call for everything
                    you need to keep your vehicles on the road.
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

export default Metrocity;
