import React, { useEffect } from 'react';
import heroImage from '../../../assets/sites/default/files/metrodecker/metrodecker-home-banner.jpg';
import heroImageMobile from '../../../assets/sites/default/files/metrodecker/metrodecker-banner-mobile1.jpg';
import metrodecker3rd from '../../../assets/sites/default/files/metrodecker/metrodecker-3rd-fold.jpg';
import subBanner from '../../../assets/sites/default/files/metrodecker/sub-banner1.jpg';
import metrodeckerLightest from '../../../assets/sites/default/files/metrodecker/metrodecker-lightest-bus.jpg';
import news1 from '../../../assets/sites/default/files/metrodecker/light-on-earth.jpg';
import news2 from '../../../assets/sites/default/files/metrodecker/customer-service.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Metrodecker = () => {
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
   
      <section>
        <div className='flex '>
          <div className='lg:w-3/6  h-[300px] md:h-[500px] lg:h-[600px]  flex my-2 '>
            <div className='lg:w-1/3 bg-[#16b895]'></div>
            <div
              className='hidden lg:block lg:w-2/3 w-full '
              style={{
                backgroundImage: `url(${subBanner})`,
          
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
              }}
              data-aos='fade-right'
              data-aos-duration='2000'
            ></div>
          </div>
          <div
            className='w-full lg:w-3/6 contrast-125 brightness-90 h-[300px] md:h-[500px] lg:h-[600px] bg-cover   m-2'
            style={{
              backgroundImage: `url(${metrodecker3rd})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              width: '100%',
            }}
            data-aos='fade-left'
            data-aos-duration='2000'
          >
            <div className='flex flex-col items-start justify-end pb-12 pl-1 md:pb-12  md:pl-12 h-[300px] md:h-[500px] lg:h-[600px]'>
              <div className='text-white text-xl  md:text-3xl lg:text-5xl '>
              Class-leading double-decker
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className='flex flex-col md:flex-row overflow-hidden items-center '>
          <div className='md:w-1/2'>
            <div class='col-span-1  '>
              <div class=' text-2xl pt-8 md:py-10 font-medium md:text-3xl lg:text-5xl  text-left pl-4 md:pl-8 md:px-10  lg:mx-14 xl:mx-18 '>
                The lightest bus in its class
              </div>

              <div
                className='md:w-1/2 p-5 xl:py-40  md:hidden '
                data-aos='fade-left'
                data-aos-duration='1500'
              >
                <img src={metrodeckerLightest} alt='' srcset='' />
              </div>

              <p class='text-left px-5 pl-8 md:px-10 lg:mx-14 xl:mx-18 lg:text-lg  '>
                This award-winning, British-built electric bus has been designed
                to be the lightest in its class, with the highest passenger
                capacity and the latest battery technology.
                <br />
                <br /> SWITCH metrodecker has been built with passengers,
                drivers, operators, and local authorities in mind, helping them
                to keep their city moving efficiently, whilst reducing its
                carbon footprint.
              </p>

              <div className='md:mb-4 px-5   xl:m-20 pl-8 md:px-10  lg:mx-14 xl:mx-16 py-5 '>
                <button className='bg-indigo-600 text-white py-2 px-4 '>
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
          <div
            className='md:w-1/2 p-5 xl:py-20 hidden md:block '
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <img src={metrodeckerLightest} alt='' srcset='' />
          </div>
        </div>
      </section>
      <section className='p-1'>
        <video
          height='50%'
          preload='metadata'
          loop
          autoPlay
          playsinline
          muted
          className='d-block'
        >
          <source
            src='https://d2dg8z6chpdy03.cloudfront.net/FIRST_YORK _B-ROLL.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </section>
      <section class=' bg-[#00002d] text-white  '>
        <div class='col-lg-10 col-md-12 offset-lg-1 pr-3 mx-auto '>
          <div class='text-4xl font-medium pt-10  text-center  p-3  md:pt-16 md:pb-4'>
            Technical Specifications
          </div>
          <div className='text-xl text-justify  mb-5  p-3 md:px-28  md:pb-10'>
            The lightest double-decker in its class. Our largest zero emission
            bus is the battery electric SWITCH metrodecker. Like the other
            vehicles in the SWITCH family, the SWITCH metrodecker has a fully
            integral frame. This low floor vehicle seats up to 84 and in
            addition has exceptional standing capacity, up to 99 passengers
            depending on the layout. The integral stainless-steel structure and
            the latest driveline technologies ensure the SWITCH metrodecker
            delivers optimum operating efficiencies.
          </div>
          <div class='col-sm-12 customTable ' style={{ position: 'relative' }}>
            <div class=' p-3 md:px-28  md:pb-3'>
              <table class='table m-auto '>
                <tr>
                  <td className='border-b-2 md:text-xl  md:pr-60 md:py-2 md:pl-2 p-1 xl:pr-96  bg-indigo-500'>
                    Body Length Options
                  </td>
                  <td className='border-b-2 md:text-xl md:pr-24 py-1 lg:pr-48 bg-indigo-500'>
                    10.5 m
                  </td>
                  <td className='border-b-2 md:text-xl md:pr-24 py-1 lg:pr-48 bg-indigo-500'>
                    11.1 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Overall length (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>10,500</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>11,140</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Overall width (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,500</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,500</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Overall height (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>4,310</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>4,310</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Wheelbase (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>5,350</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>6,000</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Front overhang (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,760</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,760</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Rear overhang (mm)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,386</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>2,386</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Gross vehicle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>18,000</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>18,000</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Front axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>6,300</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>6,300</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>
                    Rear axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>11,600</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>11,600</td>
                </tr>

                <br />

                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1 bg-indigo-500'>
                    Seating Capacity
                  </td>
                  <td className='border-b-2 md:text-xl md:p-2 py-1 bg-indigo-500'>10.5 m</td>
                  <td className='border-b-2 md:text-xl md:p-2 py-1 bg-indigo-500'>11.1 m</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Seats (maximum)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>63</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>84</td>
                </tr>
                <tr>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>Total (maximum)</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>94+</td>
                  <td className='border-b-2 md:text-xl md:p-2 p-1'>94+</td>
                </tr>
                
              </table>
            </div>
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
              A premium passenger experience.
            </div>
            <p class='p-5 text-lg text-justify  pb-4 md:px-5 lg:px-16 lg:text-xl'>
              At SWITCH, we pride ourselves on offering you the lowest Total
              Cost of Ownership whilst providing a superior product. Quiet,
              efficient motors ensure a smoother drive and reliable operation.
              All of this – alongside a multitude of accessibility, driver and
              passenger features – means that your passengers can enjoy a better
              journey at the lowest total cost to you.
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
                    src={news1}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='freeFlowing'
                  />
                </div>
                <div class='px-2 py-1'>
                  {/* <!-- <h4 class="font-weight-bold ">We’ve thought of everything.</span> </h4> --> */}
                  <p className='py-2 text-2xl md:py-8 font-medium'>
                    Lighter on the road, and on the planet
                  </p>
                  <p className='pb-6'>
                    Lightest bus in its class, weighing as little as 11.2T
                    unladen. The SWITCH metrodecker is capable of delivering a
                    range of up to 215 miles on a single charge
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
                    src={news2}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='free Flowing 2'
                  />
                </div>
                <div class='px-2 py-1 '>
                  {/* <!-- <h4 class="font-weight-bold ">Comfortably in control.</span> </h4> --> */}
                  <p className='py-2 md:py-10 text-2xl font-medium'>
                    Quality customer service
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

export default Metrodecker;
