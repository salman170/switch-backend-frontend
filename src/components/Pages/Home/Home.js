import React, { useEffect } from 'react';
import vBUSES from '../../../assets/video/vBUSES.mp4';
import switchInfographic from '../../../assets/sites/default/files/Switch-Infographic_updated3860.png?v=1';
import switchInfographicupdated from '../../../assets/sites/default/files/Switch-Infographic_updated-mob3860.jpg?v=1';
import bannerTech from '../../../assets//sites/default/files/banner-tech.jpg';

import Slider from './Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const width = window.innerWidth;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section>
        <Slider />
      </section>
      <section className='p-xl bg-stone-200'>
        <div className='container'>
          <div
            className='text-4xl lg:text-6xl pt-16 pl-12 pb-12'
            data-aos='fade-up'
          >
            <h2 className='title' data-editor-processed='true'>
              Cleaner, smarter journeys
              <br />
              Cleaner, connected cities
            </h2>
          </div>
          <div className='divide-x'></div>
          <div className='flex justify-between flex-col md:flex-row '>
            <div className='mx-12 mb-24'>
              <p
                className='text-xl'
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                At SWITCH, we're working with cities across the world to make
                everyday life better. Our carbon neutral transport solutions are
                built with your whole community in mind.
              </p>
            </div>
            <div className='mx-12 '>
              <h3
                className=' text-blue-600 text-xl'
                data-aos='fade-up'
                data-aos-delay='200'
                data-editor-processed='true'
              >
                A carbon neutral certified company
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className='video-container'>
        <video
          width='100%'
          preload='metadata'
          loop
          autoPlay
          playsinline
          muted
          className='d-block'
        >
          <source src={vBUSES} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className='generic-padding'>
        <div className='container-fluid'>
          <div className='flex'>
            <div className='col-md-5'>
              <div
                className='text-3xl lg:text-5xl pt-16 pl-12 pb-8'
                data-aos='fade-up'
              >
                <h2 className='title'>Leading the charge</h2>
              </div>
              <p
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                In 2014, we introduced the first British built, pure electric
                buses to London’s roads. Since then, we’ve clocked over 30
                million electric miles.
              </p>
            </div>
            <div className='pt-16 pl-12 pb-8'>
              <h3
                className='text-blue-600 text-xl'
                data-aos='fade-up'
                data-aos-delay='200'
                data-editor-processed='true'
              >
                Explore our current range
              </h3>
            </div>
          </div>

          <div className='row gutter-100 mb-3'>
            <div
              className='col-md-6 col-lg-4 mb-5'
              data-aos='fade-in'
              data-aos-delay='300'
            >
              <div className='prod-title'>
                <h3 className='title'>SWITCH e1</h3>
              </div>
              <div className='prod-pic'>
                <img
                  src='sites/default/files/2022-06/e1-vehicle-img.jpg'
                  alt='SWITCH e1'
                  className='img-fluid'
                />
              </div>
              <div className='prod-btm'>
                <a
                  className='d-flex justify-content-between'
                  href='en/switch-e1.html'
                >
                  <span>MORE INFORMATION</span>
                  <img
                    src='themes/custom/switchmobility/resources/images/chevron-right.svg'
                    width='20'
                    alt='MORE INFORMATION'
                  />
                </a>
              </div>
            </div>

            <div
              className='col-md-6 col-lg-4 mb-5'
              data-aos='fade-in'
              data-aos-delay='400'
            >
              <div className='prod-title'>
                <h3 className='title'>SWITCH EiV 12</h3>
              </div>
              <div className='prod-pic'>
                <img
                  src='sites/default/files/2022-06/vehicle_ev12_0.jpg'
                  alt='SWITCH EiV 12'
                  className='img-fluid'
                />
              </div>
              <div className='prod-btm'>
                <a
                  className='d-flex justify-content-between'
                  href='en/switch-eiv12.html'
                >
                  <span>MORE INFORMATION</span>
                  <img
                    src='themes/custom/switchmobility/resources/images/chevron-right.svg'
                    width='20'
                    alt='MORE INFORMATION'
                  />
                </a>
              </div>
            </div>

            <div
              className='col-md-6 col-lg-4 mb-5'
              data-aos='fade-in'
              data-aos-delay='500'
            >
              <div className='prod-title'>
                <h3 className='title'>SWITCH EiV 22</h3>
              </div>
              <div className='prod-pic'>
                <img
                  src='sites/default/files/2022-08/EIV-22-thumb-img.jpg'
                  alt='SWITCH EiV 22'
                  className='img-fluid'
                />
              </div>
              <div className='prod-btm'>
                <a
                  className='d-flex justify-content-between'
                  href='en/switch-eiv22.html'
                >
                  <span>MORE INFORMATION</span>
                  <img
                    src='themes/custom/switchmobility/resources/images/chevron-right.svg'
                    width='20'
                    alt='MORE INFORMATION'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='flex flex-col md:flex-row bg-emerald-500 mb-5 '>
        <div
          class='w-full md:w-1/2 h-[500px] bg-cover bg-no-repeat'
          style={{ backgroundImage: `url(${bannerTech})` }}
        ></div>
        <div class='w-full md:w-1/2 h-[500px] generic-padding flex items-end md:items-start'>
          <div class='flex flex-col justify-between h-full px-6 md:px-12 py-8'>
            <div
              class='flex flex-col md:flex-row items-center md:justify-between mb-8'
              data-aos='fade-up'
            >
              <div class='md:w-2/3'>
                <h2
                  class='text-white text-3xl md:text-4xl font-bold leading-tight title mt-10'
                  data-editor-processed='true'
                >
                  A connected world
                </h2>
              </div>
              <div class='md:w-1/3 text-right'>
                <div
                  class='text-white font-semibold category'
                  data-editor-processed='true'
                >
                  TECHNOLOGY
                </div>
              </div>
            </div>
            <div
              class='flex flex-col md:flex-row items-end md:items-center'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div class='md:w-1/2'>
                <p
                  class='text-white text-lg leading-6'
                  data-editor-processed='true'
                >
                  Powered by SWITCH proprietary tech and the latest innovations
                  in electromobility.
                </p>
              </div>
              <div class='md:w-1/2 text-right mt-6 md:mt-0'>
                <Link
                  to='/tech'
                  class='relative px-8 py-2 text-xl lg:text-2xl overflow-hidden font-medium text-white border-[3px] border-gray-100 shadow-inner group'
                >
                  <span class='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-400 group-hover:w-full ease'></span>
                  <span class='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-400 group-hover:w-full ease'></span>
                  <span class='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
                  <span class='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
                  <span class='absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100'></span>
                  <span class='relative transition-colors duration-300 delay-200 group-hover:text-indigo-500 ease'>
                    DISCOVER
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='split-column-full split-column-right bg-  mb-5'>
        <div className='row no-gutters'>
          <div
            className='bg-no-repeat w-full h-full bg-cover'
            style={{ backgroundImage: `url(${bannerTech})` }}
          ></div>

          <div className='col-md-6 generic-padding'>
            <div className='d-flex flex-column h-100'>
              <div className='row section-heading mb-5' data-aos='fade-up'>
                <div className='col-lg-8'>
                  <h2 className='title' data-editor-processed='true'>
                    A connected world
                  </h2>
                </div>
                <div className='col-lg-4 text-right'>
                  <div className='category' data-editor-processed='true'>
                    TECHNOLOGY
                  </div>
                </div>
              </div>

              <div
                className='row mt-auto align-items-end'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <div className='col-lg-6'>
                  <div>
                    <p className='m-0' data-editor-processed='true'>
                      Powered by SWITCH proprietary tech and the latest
                      innovations in electromobility.
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 text-lg-right mt-3'>
                  <a
                    href='en/technology.html'
                    className='btn btn-rectangle btn-white'
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='mb-5'>
        {width > 425 ? (
          <img src={switchInfographic} className='' alt='Switch infographic' />
        ) : (
          <img
            src={switchInfographicupdated}
            className='img-fluid d-sm-none d-block w-100'
            alt='switchInfographicupdated'
          />
        )}
      </section>

      {/* <section className='generic-padding bg-color-blue-grid text-center text-white d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='section-heading' data-aos='fade-up'>
            <h2 className='title' data-editor-processed='true'>
              SWITCH Up
            </h2>
            <p
              className='subtitle web-font-2'
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              Mobility innovation backed by over 100 years of experience.
              <br />
              Find out how we're switching things up.
            </p>
          </div>
          <a
            href='en/company.html'
            className='btn btn-rectangle btn-white'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Our Story
          </a>
        </div>
      </section> */}
      <section className='py-8 bg-[#505bfe] text-center text-white flex items-center min-h-[74vh]'>
        <div className='container mx-auto'>
          <div className='section-heading' data-aos='fade-up'>
            <h2
              className='text-3xl lg:text-5xl pt-16  pb-6'
              data-editor-processed='true'
            >
              SWITCH Up
            </h2>
            <p
              className='text-xl lg:text-2xl font-medium pb-6'
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              Mobility innovation backed by over 100 years of experience. <br />
              Find out how we're switching things up.
            </p>
          </div>
          {/* <a
            href='en/company.html'
            // className='text-xl lg:text-2xl  inline-block align-middle text-center select-none border-[3px] border-white font-normal py-2 px-12 leading-normal no-underline   '
            
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Our Story
          </a> */}

          <Link
            to='/contact'
            class='relative px-8 py-2 text-xl lg:text-2xl overflow-hidden font-medium text-white border-[3px] border-gray-100 shadow-inner group'
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <span class='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-400 group-hover:w-full ease'></span>
            <span class='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-400 group-hover:w-full ease'></span>
            <span class='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
            <span class='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
            <span class='absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100'></span>
            <span class='relative transition-colors duration-300 delay-200 group-hover:text-indigo-500 ease'>
              OUR STORY
            </span>
          </Link>
        </div>
      </section>

      {/* <section
          className="generic-padding full-banner text-center text-white d-none align-items-center"
          id=""
          data-background="/sites/default/files/banner-future-vehicles.jpg"
          data-link=""
        >
          <div className="container-fluid">
            <div className="section-heading" data-aos="fade-up">
              <h2 className="title">A peek into the future</h2>
              <p
                className="subtitle web-font-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Modular, net zero, lowest TCO. <br />
                The next generation of SWITCH vehicles.
              </p>
            </div>
            <a
              href="future-vehicles.html"
              className="btn btn-rectangle btn-white"
              data-aos="fade-up"
              data-aos-delay="200"
              >See More</a
            >
          </div>
        </section>

        <section className="generic-padding">
          <div className="container-fluid">
            <div className="row mb-md-4">
              <div className="col-sm-6">
                <div
                  className="section-heading section-heading-xs"
                  data-aos="fade-up"
                >
                  <h2 className="title">Latest News From SWITCH</h2>
                </div>
              </div>
              <div className="col-sm-6 text-md-right">
                <a
                  href="en/news.html"
                  className="btn btn-rectangle d-none d-md-inline-block"
                  >All News</a
                >
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-4 mb-4 mb-sm-0"
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <div className="row align-items-end">
                  <div className="col-lg-6 mb-3 mb-lg-0">
                    <img
                      src="sites/default/files/2023-02/Formula-E1-img1.jpg"
                      alt="Formula E Race"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="29Z" className="datetime">15.02.23</time>
                    </div>
                    <h4 className="title mb-1">Formula E Race</h4>
                    <a
                      className="link-blue"
                      href="en/news/formula-e-race76e3.html?nid=3469"
                      >READ MORE</a
                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-4 mb-sm-0"
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <div className="row align-items-end">
                  <div className="col-lg-6 mb-3 mb-lg-0">
                    <img
                      src="sites/default/files/2023-02/flag-off-img3.jpg"
                      alt="Switch Mobility Ltd. delivers first set of SWITCH EiV 22, India’s first electric double decker buses to BEST"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="35Z" className="datetime">13.02.23</time>
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. delivers first set of SWITCH EiV 22,
                      India’s first electric double decker buses to BEST
                    </h4>
                    <a
                      className="link-blue"
                      href="en/news/switch-mobility-ltd-delivers-first-set-switch-eiv-22-indias-first-electric-double-decker-buses0222.html?nid=3468"
                      >READ MORE</a
                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-4 mb-sm-0"
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <div className="row align-items-end">
                  <div className="col-lg-6 mb-3 mb-lg-0">
                    <img
                      src="sites/default/files/2023-02/auto-expo-lead-news-banner_2.jpg"
                      alt="SWITCH Mobility to Showcase 3 New Electric Vehicles at Auto Expo 2023"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="32Z" className="datetime">04.01.23</time>
                    </div>
                    <h4 className="title mb-1">
                      SWITCH Mobility to Showcase 3 New Electric Vehicles at
                      Auto Expo 2023
                    </h4>
                    <a
                      className="link-blue"
                      href="en/news/switch-mobility-showcase-3-new-electric-vehicles-auto-expo-20231089.html?nid=3103"
                      >READ MORE</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        <section
          className="intro-newsletter generic-padding d-flex"
          id=""
          data-link=""
        >
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-10 col-md-5 col-xl-5 mb-4 mt-5 offset-1 offset-xl-2"
              >
                <div
                  className="section-heading section-heading-sm mb-5"
                  data-aos="fade-up"
                >
                  <h2 className="title" data-editor-processed="true">
                    We're on a journey.<br />
                    Will you join us?
                  </h2>
                </div>
                <h4
                  className="web-font-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-editor-processed="true"
                >
                  Sign up and be the first to hear about our EV buses and vans.
                </h4>
              </div>

              <div className="col-md-6 col-xl-4 offset-xl-1 pl-xl-0">
                <div
                  className="form-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3
                    className="mb-3 text-blue d-none d-md-block"
                    data-editor-processed="true"
                  >
                    Sign up
                  </h3>
                  <div className="type-of-block">
                    <div className="block-inner">
                      <form id="signupForm" className="form-primary">
                        <div className="form-group">
                          <label className="sr-only" for="emailAddress"
                            >Email address Ashwani</label
                          >
                          <input
                            type="email"
                            className="form-control"
                            name="newsletteryouremail"
                            id="emailAddress"
                            placeholder="Enter your email address here"
                          />
                          <div className="error-msg" id="errEmailAddress"></div>
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="fullName"
                            >Full name</label
                          >
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            maxlength="150"
                            name="newsletteryourname"
                            placeholder="Full name"
                          />
                          <div className="error-msg" id="errFullName"></div>
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="jobtitle"
                            >Job Title</label
                          >
                          <input
                            type="text"
                            className="form-control"
                            id="jobtitle"
                            maxlength="150"
                            name="jobtitle"
                            placeholder="Job title"
                          />
                          <div className="error-msg" id="errJobTitle"></div>
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="company">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            id="company"
                            maxlength="150"
                            name="newslettercompanyname"
                            placeholder="Company"
                          />
                          <input
                            type="hidden"
                            name="leadsource"
                            value="en.html"
                          />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" for="interest">Interest</label>
                          <select
                            className="form-control custom-select"
                            id="interest"
                            name="newsletterinterest"
                          >
                            <option value>Interest</option>
                            <option value="Aftersales / Parts">
                              Aftersales / Parts
                            </option>
                            <option value="Customer - private">
                              Customer - private
                            </option>
                            <option value="Customer - public">
                              Customer - public
                            </option>
                            <option value="Enthusiast">Enthusiast</option>
                            <option value="Investor">Investor</option>
                            <option value="Local authority">
                              Local authority
                            </option>
                            <option value="Media">Media</option>
                            <option value="Policy maker">Policy maker</option>
                            <option value="Recruitment">Recruitment</option>
                            <option value="Supplier">Supplier</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="error-msg" id="errInterest"></div>
                        </div>
                        <div className="form-group">
                          <div className="d-flex justify-content-between">
                            <div className="form-check">
                              <input
                                className="custom-control-input"
                                name="subscribe_newsletter"
                                value="1"
                                type="checkbox"
                                id="subscribeCheck"
                              />
                              <label
                                className="custom-control-label"
                                for="subscribeCheck"
                                >Subscribe to news and updates from
                                SWITCH</label
                              >
                            </div>
                            <button
                              type="button"
                              id="signupSubmit"
                              className="btn btn-circle"
                            >
                              &#10004;
                            </button>
                          </div>
                          <div className="error-msg" id="errSubscribeCheck"></div>
                        </div>
                        <div className="display-def-9">
                          <p className="mb-2">
                            SWITCH Mobility is committed to protecting and
                            respecting your privacy.
                            <br />
                            We only use your personal information to provide the
                            information you requested from us.
                          </p>
                          <p className="mb-0">
                            For more information on how to unsubscribe, our
                            privacy practices, and how we are committed to
                            protecting and respecting your privacy, please
                            review our
                            <a className="link-grey" href="en/privacy-policy.html"
                              >Privacy Policy</a                            >.
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
    </div>
  );
};

export default Home;
