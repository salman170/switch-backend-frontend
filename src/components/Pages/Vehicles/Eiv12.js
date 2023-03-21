import React, { useEffect } from 'react';

//images
import HeroImageEiv12 from '../../../assets/sites/default/files/e1/ODIN-banner-img.jpg';
// import subBanner from '../../../assets/sites/default/files/e1/sub-banner-largeImage.jpg';
import largBanner from '../../../assets/sites/default/files/e1/sub-banner-largeImage.jpg';
import perfectEngn from '../../../assets/sites/default/files/e1/perfect-engn-img.jpg';
import freeFlowing1 from '../../../assets/sites/default/files/e1/free-flowing-img1.jpg';
import freeFlowing2 from '../../../assets/sites/default/files/e1/free-flowing-img2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Eiv12 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <section class='banner'>
        <div
          id='carousel'
          class='carousel slide odinBanner'
          data-ride='carousel'
        >
          {/* <!-- Carousel Content --> 
          <div class='carousel-inner c-section' role='listbox'>
            <div
              class='carousel-item active'
            style={{backgroundImage: `linear-gradient( 360deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 20.71%  ), url(${HeroImageEiv12})`}}
            >
              <div class='carousel-caption'>
                <h2>
                  SWITCH <span>EiV 12</span>
                </h2>
              </div>
              <div
                class='mouse_scroll hero__scroll aos-init aos-animate'
                id='scrollDown'
                data-aos-easing='ease'
              >
                <div class='mouse'>
                  <div class='wheel'></div>
                </div>
                <div>
                  <a class='scrollDown' href='#main-container'>
                    <span class='m_scroll_arrows unu'></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- banner for mobile -->
            <div
              id="landingBanner"
              class="carousel slide my-carousel main-banner"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div
                  class="carousel-item active c-section text-center"
                  style="
                    background-image: linear-gradient(
                        360deg,
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0) 20.71%
                      ),
                      url('../sites/default/files/e1/main-mobile-banner.jpg');
                  "
                >
                  <div class="carousel-caption">
                    <h2>SWITCH <span>EiV 12</span></h2>
                  </div>
                </div>
              </div>
            </div>
            <!-- end section -- banner mobile -->

            <div class="rightSticky">
              <button
                type="button"
                class="stickybtn"
                data-toggle="modal"
                data-target=".enquiry"
              >
                <span class="rotateText d-inline-block ev12">Enquire Now</span>
                <span
                  ><?xml version="1.0" encoding="utf-8"?>
                  <!-- Generator: Adobe Illustrator 26.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    style="enable-background: new 0 0 24 24"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M12,19.7c-2.8,0-5.6,0-8.3,0C2,19.7,1,18.8,1,17.1c0-3.5,0-7,0-10.6C1,4.8,2,3.9,3.6,3.9c5.6,0,11.2,0,16.8,0
                             c1.7,0,2.6,0.9,2.6,2.6c0,3.5,0,7,0,10.6c0,1.7-0.9,2.6-2.6,2.6C17.6,19.7,14.8,19.7,12,19.7C12,19.7,12,19.7,12,19.7z M2.1,6
                             c2.8,1.9,5.5,3.8,8.3,5.7c1.1,0.8,2.3,0.8,3.4,0c2.6-1.9,5.3-3.7,7.9-5.6c0.1-0.1,0.2-0.2,0.3-0.3c-0.3-0.6-0.7-1-1.4-1
                             C14.9,5,9.2,5,3.5,5C2.8,5,2.4,5.3,2.1,6z M21.9,17.6c-2.3-1.6-4.7-3.3-7-4.9c-0.1-0.1-0.5,0-0.7,0.1c-1.5,0.9-2.9,0.9-4.3,0
                             c-0.4-0.3-0.7-0.2-1,0c-2,1.4-4,2.9-6,4.3c-0.2,0.2-0.5,0.4-0.7,0.5c0.3,0.7,0.7,1,1.3,1c5.7,0,11.4,0,17.1,0
                             C21.3,18.6,21.7,18.3,21.9,17.6z M2.2,7.4c0,3,0,5.8,0,8.8c2.1-1.5,4.2-2.9,6.2-4.4C6.3,10.3,4.3,8.9,2.2,7.4z M21.9,7.4
                             c-2.2,1.5-4.2,3-6.3,4.4c2.1,1.5,4.2,2.9,6.3,4.4C21.9,13.2,21.9,10.4,21.9,7.4z"
                      />
                    </g></svg                ></span>
              </button>

              <button
                type="button"
                class="stickybtn ml-2 ev12"
                data-toggle="modal"
                data-target=".download"
              >
                <div class="d-flex align-items-center">
                  <span class="rotateText d-inline-block"
                    >Download Brochure</span
                  >
                  <span                    ><?xml version="1.0" encoding="utf-8"?>
                   
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      style="enable-background: new 0 0 24 24"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          d="M10.8,13.6c0-0.1,0-0.2,0-0.3c0-2.9,0-5.9,0-8.8c0-0.5,0.2-0.8,0.6-0.9c0.5-0.1,1.1,0.2,1.1,0.8c0,0.1,0,0.1,0,0.2
                             c0,3,0,5.9,0,8.9c0,0.1,0,0.1,0,0.3c0.1-0.1,0.1-0.1,0.2-0.2c1-1,2-2,2.9-2.9c0.4-0.4,0.9-0.4,1.3,0c0.4,0.4,0.3,0.9-0.1,1.3
                             c-1.5,1.5-3,3-4.6,4.6c-0.4,0.4-0.9,0.4-1.3,0c-1.5-1.5-3-3-4.6-4.6c-0.3-0.3-0.4-0.6-0.3-1c0.1-0.3,0.4-0.5,0.7-0.6
                             c0.3,0,0.5,0.1,0.8,0.3c1,1,2,2,3,3C10.7,13.4,10.7,13.5,10.8,13.6z"
                        />
                        <path
                          d="M11.7,19.4c-1.8,0-3.5,0-5.3,0c-0.6,0-1-0.4-0.9-1c0-0.4,0.3-0.7,0.7-0.8c0.1,0,0.2,0,0.3,0c3.5,0,6.9,0,10.4,0
                             c0.6,0,1,0.4,1,1c0,0.4-0.4,0.8-0.8,0.8c-0.1,0-0.2,0-0.3,0C15.1,19.4,13.4,19.4,11.7,19.4z"
                        />
                      </g></svg                  ></span>
                </div>
              </button>
            </div> 
            style={{backgroundImage: `linear-gradient( 360deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 20.71%  ), 
        url(${HeroImageEiv12})`, backgroundSize:"1000px",backgroundRepeat:"no-repeat" }}
      </section>*/}
      <section>
        <div className=' object-cover '>
          <img src={HeroImageEiv12} alt='Hero Img' srcset='' />
        </div>
      </section>
      <section class='' id='main-container' style={{ scrollMarginTop: '65px' }}>
        <div class='col-12  bg-[#16b895]'>
          <div class='grid lg:grid-cols-3  ' style={{ overflow: 'hidden' }}>
            <div class='col-span-1 text-white '>
              <div class=' text-2xl font-medium md:text-3xl lg:text-5xl lg:pt-18 text-left p-5 md:p-16'>
                Next-generation eBus for India
              </div>

              <p class='text-left px-5 md:px-10 lg:px-14 lg:text-lg'>
                SWITCH EiV 12 is our first fully electric bus specifically
                designed for the Indian market. This next-generation eBus
                features customer-centric offerings on technology and passenger
                comfort while being contemporary and futuristic.
              </p>
              <br />
              <p class='text-left px-5 md:px-10 lg:px-14 lg:text-lg pb-4'>
                The SWITCH EiV 12 delivers exceptional drive performance and
                efficiency and is embedded with proprietary technology solutions
                including ‘SWITCH iON’ to enable remote, real-time diagnostics
                and monitoring, as well as world-class digital battery
                management tools.
              </p>
              {/* <img
                class='img-fluid d-lg-none d-md-block pb-4'
                src={subBanner}
                alt=''
              /> */}
            </div>
            <div
              class='md:h-[70vh] my-12 mx-4 md:col-span-2 bg-no-repeat'
              // style={{
              //   backgroundImage: `url(${largBanner})`,
              // }}
              data-aos='fade-left'
              data-aos-duration='1500'
            >
              {/* <div class='banner-sm-caption pt-5'></div> */}
              <img
                src={largBanner}
                alt=''
                srcset=''
                className='object-cover md:h-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=' flex md:flex-row flex-col overflow-hidden mb-10'>
          <div className='md:w-1/2 w-full'>
            <div className='md:m-8 m-4 px-4 md:px-10  lg:m-16 text-4xl font-medium '>
              Superior efficiency with long battery life
            </div>
            <div className='md:m-8 m-4 px-4 md:px-10  lg:m-16 '>
              The SWITCH EiV range of buses have been uniquely configured to
              meet customer requirements of varied applications like intracity,
              intercity, staff, school and tarmac, offering maximum passenger
              capacity and comfort. The buses are also equipped with a new
              generation of highly efficient, modular batteries with advanced
              NMC chemistry, specially formulated for the Indian market and
              climatic conditions.
            </div>
            <div className='md:m-8 m-4 px-4 md:px-10 lg:m-16 '>
              <button className='bg-indigo-600 text-white py-2 px-3'>
                ENQUIRE NOW
              </button>
            </div>
          </div>
          <div
            class='md:w-1/2   '

            // style={{ overflow: 'hidden' }}
          >
            <div
              className='object-cover w-full h-full  md:h-96 md:w-96 lg:h-80 lg:w-full px-2 md:pt-20 lg:pt-10'
              data-aos='fade-left'
              data-aos-duration='1500'
            >
              <img src={perfectEngn} alt='' srcset='' />
            </div>
          </div>
        </div>
      </section>
      {/* <section class='generic-padding-sm'>
        <div class='w-full'>
          <h2 class='subHeading w-full sm:mb-2 lg:hidden block p-0 mt-2 mb-4'>
            Superior efficiency with long battery life
          </h2>
          <div class='flex flex-wrap  lg:flex-row xl:flex-row flex-col-reverse items-center'>
            <div class='lg:w-2/5  pl-4 md:w-full lg:mx-1/6 xl:mt-0 lg:mt-0 mt-4 pr-5 superiorSectionLeft'>
              <h2 class='subHeading lg:mb-6 md:mb-2 sm:mb-2 hidden lg:block mt-0'>
                Superior efficiency with long battery life
              </h2>
              <p>
                The SWITCH EiV range of buses have been uniquely configured to
                meet customer requirements of varied applications like
                intracity, intercity, staff, school and tarmac, offering maximum
                passenger capacity and comfort. The buses are also equipped with
                a new generation of highly efficient, modular batteries with
                advanced NMC chemistry, specially formulated for the Indian
                market and climatic conditions.
              </p>

              <button
                class='mt-2 customBtn ev12'
                data-toggle='modal'
                data-target='.enquiry'
              >
                Enquire Now
              </button>
            </div>

            <div
              class='lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4 sm:w-full pr-4 pl-4 w-full lg:flex items-start justify-end md:mt-4 lg:mt-0 pr-0 pl-0 superiorSectionRight'
              style={{ overflow: 'hidden' }}
            >
              <div
                class='clippedImgBg'
                data-aos='fade-left'
                data-aos-duration='1500'
              >
                <picture>
                  <source
                    media='(min-width:991px)'
                    srcset={perfectEngn}
                    class='max-w-full h-auto'
                  />
                  <img
                    src={perfectEngn}
                    class='max-w-full h-auto lg:hidden md:block'
                    alt=''
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     <section class='generic-padding-sm'>
        <div class='sm:w-full pr-4 pl-4'>
          <div class='flex  '>
            <div 
              class='tabLeft clippedLeft'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <ul class='flex flex-wrap list-none pl-0 mb-0  flex-col' id='myTab' role='tablist'>
                <li class=''>
                  <span>
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                  <a
                    class='text-outline text-outline-hover active'
                    data-text='Advanced Technology'
                    id='batteryTech'
                    data-toggle='tab'
                    href='#battery'
                    role='tab'
                    aria-controls='battery'
                    aria-selected='true'
                  >
                    Advanced Technology
                  </a>
                </li>
                <li class=''>
                  <span>
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                  <a
                    class='text-outline text-outline-hover'
                    data-text='Battery technology'
                    id='lightWeightConst'
                    data-toggle='tab'
                    href='#lightWeight'
                    role='tab'
                    aria-controls='lightWeight'
                    aria-selected='false'
                  >
                    Battery technology
                  </a>
                </li>
                <li class=''>
                  <span>
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                  <a
                    class='text-outline text-outline-hover'
                    data-text='High Performance'
                    id='customerFirst'
                    data-toggle='tab'
                    href='#Customer'
                    role='tab'
                    aria-controls='Customer'
                    aria-selected='false'
                  >
                    High Performance
                  </a>
                </li>
                <li class=''>
                  <span>
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                  <a
                    class='text-outline text-outline-hover'
                    data-text='Passenger Focused Environment'
                    id='lowestTco'
                    data-toggle='tab'
                    href='#lowest'
                    role='tab'
                    aria-controls='lowest'
                    aria-selected='false'
                  >
                    Passenger Focused Environment
                  </a>
                </li>
              </ul>
            </div>

            <div class='lg:pl-12 pr-0 mt-2 lg:mt-0 md:mt-0 flex items-center tabRight'>
              <div
                class='tab-content w-full h-full'
                id='myTabContent'
                style={{ overflow: 'hidden' }}
              >
                <div
                  class='tab-pane opacity-100 block active h-full'
                  id='battery'
                  role='tabpanel'
                  aria-labelledby='batteryTech'
                >
                  <div class='xl:flex lg:flex md:flex flex items-center h-full'>
                    <div class='lg:w-3/5 pr-4 pl-4 md:w-2/3 pr-4 pl-4 w-3/5 tabCenterContent'>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Higher density</h3> --> */}
                      <ul class='squareList squareList-lg'>
                        <li>
                          SWITCH EiV delivers more than 100+ embedded
                          connectivity features for authorities and operators to
                          analyse and improve efficiency
                        </li>
                        <li>
                          Vehicle-controlled software to deliver range
                          improvements of up to 20%
                        </li>
                        <li>Latest safety features including FDSS and FDAS</li>
                      </ul>
                    </div>
                    <div
                      class='lg:w-2/5 pr-4 pl-4 md:w-1/3 pr-4 pl-4 w-2/5 tabRightImage'
                      data-aos='fade-down'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    ></div>
                  </div>
                </div>
                <div
                  class='tab-pane h-full'
                  id='lightWeight'
                  role='tabpanel'
                  aria-labelledby='lightWeightConst'
                >
                  <div class='xl:flex lg:flex md:flex flex items-center h-full'>
                    <div class='lg:w-3/5 pr-4 pl-4 md:w-2/3 pr-4 pl-4 w-3/5 tabCenterContent'>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Monocoque construction</h3> --> */}
                      <ul class='squareList squareList-lg'>
                        <li>
                          Advanced NMC technology providing a lightweight
                          battery with higher energy density
                        </li>
                        <li>
                          Advanced cycle life and unique double gun charging up
                          to 240kW leading to &lt;1 hour of DC fast charging
                        </li>
                        <li>
                          Modular battery packs providing a range of up to 500km
                          per day.
                        </li>
                      </ul>
                    </div>
                    <div
                      class='lg:w-2/5 pr-4 pl-4 md:w-1/3 pr-4 pl-4 w-2/5 tabRightImage'
                      data-aos='fade-down'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    ></div>
                  </div>
                </div>
                <div
                  class='tab-pane h-full'
                  id='Customer'
                  role='tabpanel'
                  aria-labelledby='customerFirst'
                >
                  <div class='xl:flex lg:flex md:flex flex items-center h-full'>
                    <div class='lg:w-3/5 pr-4 pl-4 md:w-2/3 pr-4 pl-4 w-3/5 tabCenterContent'>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Adaptable to each customer</h3> --> */}
                      <ul class='squareList squareList-lg'>
                        <li>Proven performance with uptime of over 98%</li>
                        <li>
                          Improved drivability is delivered by permanent magnet
                          synchronous motor
                        </li>
                        <li>
                          Lifetime product care through SWITCH’S dedicated
                          service teams
                        </li>
                      </ul>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Flexible interior design</h3>
                              <ul class="squareList">
                                 <li>Comfortable, versatile seating for up to 28 people</li>
                              </ul>
                              <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Easy access</h3>
                              <ul class="squareList">
                                 <li>HV and LV components are located in pull-out compartments simplifying in-field service and diagnostics</li>
                              </ul> --> */}
                    </div>
                    <div
                      class='lg:w-2/5 pr-4 pl-4 md:w-1/3 pr-4 pl-4 w-2/5 tabRightImage'
                      data-aos='fade-down'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    ></div>
                  </div>
                </div>
                <div
                  class='tab-pane h-full'
                  id='lowest'
                  role='tabpanel'
                  aria-labelledby='lowestTco'
                >
                  <div class='xl:flex lg:flex md:flex flex items-center h-full'>
                    <div class='lg:w-3/5 pr-4 pl-4 md:w-2/3 pr-4 pl-4 w-3/5 tabCenterContent'>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4 mt-4">Advanced engineering</h3> --> */}
                      <ul class='squareList squareList-lg'>
                        <li>
                          Latest air conditioning system and air purifiers to
                          deliver a comfortable environment in all conditions
                        </li>
                        <li>
                          Interior features such as USB charging, WiFi, reading
                          lights and comfort seats with a recliner function
                          ensure customers travel in comfort
                        </li>
                        <li>
                          Ultra-low floor option enables easy ingress and egress
                          for all occupants
                        </li>
                      </ul>
                      {/* <!-- <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Increased range</h3>
                              <ul class="squareList">
                                 <li>Advanced NMC battery technology provides enhanced efficiency and range</li>
                              </ul>
                              <h3 class="lg:mt-12 md:mt-4 pb-3 lg:pb-2 xl:pb-2 md:pb-2 sm:pb-4  mt-4 ">Local assembly and after-sales</h3>
                              <ul class="squareList">
                                 <li>Tailored support increased vehicle on-road time and delivers local jobs and infrastructure
                                 </li>
                              </ul> --> */}
                    </div>
                    <div
                      class='lg:w-2/5 pr-4 pl-4 md:w-1/3  w-2/5 tabRightImage'
                      data-aos='fade-down'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      
      <section class='generic-padding-sm bg-[#00002d]  '>
        <div
          id='insideBus'
          class='carousel insideBus slide'
          data-ride='carousel'
          data-interval='false'
        >
          {/* <!-- <ul class="carousel-indicators">
               <li data-target="#insideBus" data-slide-to="0" class="active"></li>
              <li data-target="#insideBus" data-slide-to="1"></li> 
            </ul> --> */}
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <div class='row align-items-center'>
                <div class='col-lg-10 col-md-12 offset-lg-1 pr-3 mx-auto'>
                  <div class='col-sm-12'>
                    <h2 class='text-4xl font-medium pt-8 text-left mb-5 text-white p-3 md:px-28 md:pt-16 md:pb-10'>
                      Technical Specifications
                    </h2>
                  </div>
                  <div
                    class='col-sm-12 customTable text-white '
                    style={{ position: 'relative' }}
                  >
                    <div class=' p-3 md:px-28  md:pb-3'>
                      <table class='table border '>
                        <tr>
                          <td className='border md:p-2 p-1'>Product</td>
                          <td className='border md:p-2 p-1 bg-indigo-500'>
                            EiV 12 Ultra low entry
                          </td>
                          <td className='border md:p-2 p-1 bg-indigo-500'>
                            EiV 12 Standard
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Application</td>
                          <td className='border md:p-2 p-1'>
                            Intra-City / Tarmac / Staff
                          </td>
                          <td className='border md:p-2 p-1'>
                            Inter-City / Intra-city / Staff / School
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Motor</td>
                          <td className='border md:p-2 p-1'>
                            Permanent Magnet Synchronous AC Motor; 235 KW Peak,
                            140 KW Continuous; 3100 Nm Peak
                          </td>
                          <td className='border md:p-2 p-1'>
                            Permanent Magnet Synchronous AC Motor; 235 KW Peak,
                            140 KW Continuous; 3100 Nm Peak
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>
                            Battery technology
                          </td>
                          <td className='border md:p-2 p-1'>
                            Advanced Lithium-Ion NMC chemistry with Modular
                            battery options
                          </td>
                          <td className='border md:p-2 p-1'>
                            Advanced Lithium-Ion NMC chemistry with Modular
                            battery options
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Suspension</td>
                          <td className='border md:p-2 p-1'>
                            Full Air Suspension
                          </td>
                          <td className='border md:p-2 p-1'>
                            Full Air Suspension
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Brakes</td>
                          <td className='border md:p-2 p-1'>
                            Disc Brakes at Front & Rear
                          </td>
                          <td className='border md:p-2 p-1'>
                            Disc Brakes at Front & Drum at Rear
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Door Locations</td>
                          <td className='border md:p-2 p-1'>FOH / WB / ROH</td>
                          <td className='border md:p-2 p-1'>
                            FOH / WB / ROH / BRT
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Range</td>
                          <td className='border md:p-2 p-1'>
                            300 kms with single charge and up to 500 kms/day
                            with dual gun charging
                          </td>
                          <td className='border md:p-2 p-1'>
                            300 kms with single charge and up to 500 kms/day
                            with dual gun charging
                          </td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Fast Charging</td>
                          <td className='border md:p-2 p-1'>1.5 – 3 hours</td>
                          <td className='border md:p-2 p-1'>1.5 – 3 hours</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>
                            Floor Height (mm)
                          </td>
                          <td className='border md:p-2 p-1'>400</td>
                          <td className='border md:p-2 p-1'>900</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Height (mm)</td>
                          <td className='border md:p-2 p-1'>3180</td>
                          <td className='border md:p-2 p-1'>3350</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Length (mm)</td>
                          <td className='border md:p-2 p-1'>12000</td>
                          <td className='border md:p-2 p-1'>12000</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Width (mm)</td>
                          <td className='border md:p-2 p-1'>2600</td>
                          <td className='border md:p-2 p-1'>2600</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>Wheel Base (mm)</td>
                          <td className='border md:p-2 p-1'>6320</td>
                          <td className='border md:p-2 p-1'>6200</td>
                        </tr>
                        <tr>
                          <td className='border md:p-2 p-1'>
                            Seating Capacity
                          </td>
                          <td className='border md:p-2 p-1'>
                            35+D+WC (Customizable)
                          </td>
                          <td className='border md:p-2 p-1'>
                            40 - 45 + D (Customizable)
                          </td>
                        </tr>
                      </table>
                    </div>
                    <small class='text-white px-3 md:px-28'>
                      *Low floor – Certification WIP
                    </small>
                  </div>
                  <div class='col-sm-12  px-3 md:px-28 pb-8 pt-4'>
                    <button
                      class='bg-green-400 rounded-lg hover:bg-indigo-600 hover:text-white px-3 py-2  '
                      data-toggle='modal'
                      data-target='.download'
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- <div class="carousel-item ">

                  <div class="row ">
                    <div class=" col-md-12  pr-3">
                        <h2 class="subHeading text-left mb-5 text-white d-flex justify-content-center">Dimensions and weights</h2>
                        <div class="text-center">
                        <img src="https://www.switchmobilityev.com/sites/default/files/e1/slide-2-image.jpg" class="img-fluid mx-auto imageSize" data-aos="fade-in" data-aos-duration="1500"/>
                     </div>
                     <div class="row">
                        <div class="col-lg-5 offset-lg-1 customTable">
                        <h3 class="text-left mb-2 text-white">Overall Dimensions</h3>
                        <div class="table-responsive ">
                           <table class="table ">
                              <tr>
                                 <td><span>C</span></td>
                                 <td>Wheelbase</td>
                                 <td>6000 mm</td>
                              </tr>
                              <tr>
                                 <td><span>D</span></td>
                                 <td>Overall length</td>
                                 <td>120000 mm</td>
                              </tr>
                              <tr>
                                 <td><span>E</span></td>
                                 <td>Front overhang</td>
                                 <td>2777 mm</td>
                              </tr>
                              <tr>
                                 <td><span>F</span></td>
                                 <td>Rear overhang</td>
                                 <td>3223 mm</td>
                              </tr>
                              <tr>
                                 <td>&nbsp;</td>
                                 <td>Track front</td>
                                 <td>2234 mm</td>
                              </tr>
                              <tr>
                                 <td>&nbsp;</td>
                                 <td>Track rear</td>
                                 <td>6000 mm</td>
                              </tr>
                              <tr>
                                 <td><span>G</span></td>
                                 <td>Angle of approach</td>
                                 <td>7.2 <sup>0</sup></td>
                              </tr>
                              <tr>
                                 <td><span>H</span></td>
                                 <td>Angle of departure</td>
                                 <td>7.3 <sup>0</sup></td>
                              </tr>
                              <tr>
                                 <td>&nbsp;</td>
                                 <td>% of rear overhang to wheelbase</td>
                                 <td>53%</td>
                              </tr>
                           </table>
                        </div>
                     </div>

                     <div class="col-lg-5 mr-auto">
                        
                        <h3 class="text-left mb-2 text-white">Chassis weights</h3>
                        <div class="table-responsive tableWithBorderBottom  ">
                           <table class="table ">
                              <tr>
          
                                 <td>Front axle (unladen)</td>
                                 <td>4062 kg</td>
                              </tr>
                              <tr>
               
                                 <td>Rear axle (unladen)</td>
                                 <td>7492 kg</td>
                              </tr>
                              <tr>
                                 <td>Kerb weight (standard capacity battery)</td>
                                 <td>10775 kg </td>
                              </tr>
                              <tr>
                                 <td>GVW</td>
                                 <td>18000 kg</td>
                              </tr>

                           </table>
                        </div>

                        <h3 class="text-left mb-2 text-white mt-5">Turning diameter</h3>
                        <div class="table-responsive tableWithBorderBottom">
                           <table class="table ">
                              <tr>
          
                                 <td>Kerb to kerb</td>
                                 <td>18.84 m</td>
                              </tr>
                              <tr>
               
                                 <td>Wall to wall</td>
                                 <td>22.2 m</td>
                              </tr>
                           </table>
                        </div>

                     </div>
                  </div>
<div class="col-lg-5 offset-lg-1">
                        <button class=" customBtn" data-toggle="modal" data-target=".download">Download
                           Brochure</button>
                        </div>
                     </div>
                   

                  </div>
               </div> --> */}
          </div>
          {/* <!-- <a class="carousel-control-prev" href="#insideBus" data-slide="prev">
               <i class="fa-solid fa-arrow-left-long"></i>
            </a>
            <a class="carousel-control-next" href="#insideBus" data-slide="next">
               <i class="fa-solid fa-arrow-right-long"></i>
            </a> --> */}
        </div>
      </section>
      <section class='my-8'>
        <div class='row generic-padding-lg grid md:grid-cols-3 grid-rows'>
          <div class='col-span-2 md:col-span-1'>
            {/* <!-- <h2 class="subHeading mb-4">A free-flowing <br> operation.</h2> --> */}
            <p class='p-5 text-lg pb-4 md:px-5 lg:px-16 lg:text-xl'>
              The current range of SWITCH EV buses in India, have had an uptime
              of over 98% consistently throughout the last few years, which, is
              a testimony to our product performance in terms of reliability and
              durability.
            </p>
          </div>
          <div class='col-lg-8 col-md-12 col-span-2 m-1'>
            <div class='sliderNextPrev grid sm:grid-cols-2 grid-rows'>
              <div
                class='item col-span-1 m-1 bg-gray-200 rounded-xl'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden'>
                  <img
                    src={freeFlowing1}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='freeFlowing'
                  />
                </div>
                <div class='px-2 py-1'>
                  {/* <!-- <h4 class="font-weight-bold ">We’ve thought of everything.</span> </h4> --> */}
                  <p>
                    The modular batteries increase the capacity per battery cell
                    for the same weight, enabling a higher range of kilometres –
                    up to 300-km per day with single charge and up to 500-km per
                    day with dual gun fast charging. The electric drivetrains
                    and batteries are calibrated to ensure superior efficiency
                    with long battery life, delivering a Lower Total Cost of
                    Ownership.
                  </p>
                </div>
              </div>

              <div
                class='item col-span-1 m-1 bg-gray-200 rounded-xl'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <div class='overflow-hidden'>
                  <img
                    src={freeFlowing2}
                    class='hover:scale-110 overflow-hidden duration-300 object-cover w-full'
                    alt='free Flowing 2'
                  />
                </div>
                <div class='px-2 py-1 '>
                  {/* <!-- <h4 class="font-weight-bold ">Comfortably in control.</span> </h4> --> */}
                  <p>
                    Maintenance of this ultra-modern eBus can be carried out
                    quickly and effortlessly.
                  </p>
                </div>
              </div>
              {/*  <!-- <div class="item" data-aos="fade-up"  data-aos-duration="500" >
                     <div class="divZoom">
                        <img src="https://www.switchmobilityev.com/sites/default/files/e1/premium.jpg" class="img-fluid " />
                     </div>
                     <div class="info">
                        <h4 class="font-weight-bold  ">Above all, a duty of care.</span>
                        </h4>
                        <p>SWITCH e1 prioritises driver and passenger well-being.</p>
                        <p>Active and passive safety are prime considerations. SWITCH e1 helps customers deliver a comprehensive duty of care for all vehicle occupants. Driver aids designed to enhance safety include ABS, Electronic Stability Control and blind-spot monitoring amongst others.</p>
                     </div>
                  </div> -->
                 <!-- <div class="item" data-aos="fade-up"  data-aos-duration="500" >
                     <div class="divZoom">
                        <img src="https://www.switchmobilityev.com/sites/default/files/e1/passenger-exp.jpg" class="img-fluid " />
                     </div>
                     <div class="info">
                        <h4 class="font-weight-bold  ">A premium passenger experience.</span>
                        </h4>
                        <p>Every passenger enjoys a luxurious, comfortable and informed journey with SWITCH e1.</p>
                        <p>The attractive and contemporary interior design underscores passenger comfort. Features include dimmable interior lighting, under-seat and reading lights and a flexible stop button configuration combined with optimised grab rail positioning to achieve the best balance of visibility and comfort.</p>
                     </div>
                  </div> --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eiv12;
