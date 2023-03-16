import React, { useEffect } from 'react';
import patternBoxSvg from '../../assets/themes/custom/switchmobility/resources/images/pattern-box.svg';
import expoImage from '../../assets/sites/default/files/2023-02/auto-expo-lead-news-banner_2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <section className='split-column-full bg-color-blue text-black'>
        <div className='row no-gutters'>
          <div
            className='h-full'
            style={{
              backgroundImage: ` url(${expoImage})`,
            }}
          ><img src={expoImage} alt="Expo 2023" srcset="" /></div>
          <div className='col-md-6 generic-padding'>
            <div className='d-flex flex-column h-100' data-aos='fade-up'>
              <div className='row section-heading mb-5 align-items-end'>
                <div className='col-lg-8'>
                  <h2 className='title'>
                    SWITCH Mobility to Showcase 3 New Electric Vehicles at Auto
                    Expo 2023
                  </h2>
                </div>
                <div className='col-lg-4 text-right'>
                  <div className='category'>News</div>
                </div>
              </div>

              <div className='row mt-auto align-items-end'>
                <div className='col-lg-6'>
                  <div>
                    <p className='m-0'>
                      SWITCH to unveil a range of concept vehicles from the
                      all-new IeV series catering to last mile and mid mile
                      mobility applications, and a range of ultra-modern
                      electric buses catering to special applications
                    </p>
                  </div>
                </div>

                <div className='col-lg-6 text-lg-right mt-3'>
                  <a
                    href='news/switch-mobility-showcase-3-new-electric-vehicles-auto-expo-20231089.html?nid=3103'
                    className='btn btn-rectangle btn-white sw-news'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='split-column-full bg-indigo-800 text-white min-h-[60vh]'>
        <div className='flex flex-wrap  no-gutters'>
          <div
            className='md:w-1/2 pr-4 pl-4 generic-padding split-col-banner'
            style={{
              backgroundImage: ` url(${expoImage})`,
            }}
          ></div>
          <div className='md:w-1/2 pr-4 pl-4 generic-padding h-full'>
            <div className='flex flex-col h-full' data-aos='fade-up'>
              <div className='flex flex-wrap  section-heading mb-5 items-end'>
                <div className='lg:w-2/3 pr-4 pl-4'>
                  <h2 className='title'>
                    SWITCH Mobility to Showcase 3 New Electric Vehicles at Auto
                    Expo 2023
                  </h2>
                </div>
                <div className='lg:w-1/3 pr-4 pl-4 text-right'>
                  <div className='category'>News</div>
                </div>
              </div>

              <div className='flex flex-wrap  mt-auto items-end'>
                <div className='lg:w-1/2 pr-4 pl-4'>
                  <div>
                    <p className='m-0'>
                      SWITCH to unveil a range of concept vehicles from the
                      all-new IeV series catering to last mile and mid mile
                      mobility applications, and a range of ultra-modern
                      electric buses catering to special applications
                    </p>
                  </div>
                </div>

                <div className='lg:w-1/2 pr-4 pl-4 lg:text-right mt-3'>
                  <a
                    href='news/switch-mobility-showcase-3-new-electric-vehicles-auto-expo-20231089.html?nid=3103'
                    className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-rectangle btn-white sw-news'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='intro-newsletter generic-padding flex bg-no-repeat mt-4'
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='container  max-w-full mx-auto sm:px-2'>
          <div className='flex flex-wrap justify-around '>
            <div className='w-4/5 md:w-2/5  xl:w-2/5 pr-2 md:pr-4 md:pl-4 mb-4 mt-8 offset-1 xl:mx-1/5 '>
              <div
                className='text-3xl lg:text-5xl md:pt-12 pt-4 md:pl-12 pb-12'
                data-aos='fade-up'
              >
                <h2 className='title' data-editor-processed='true'>
                  We're on a journey.
                  <br />
                  Will you join us?
                </h2>
              </div>
              <h4
                className='  md:pl-12 lg:text-3xl text-xl '
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                Contact us and be the first to hear about our EV buses and vans.
              </h4>
            </div>

            <div className='md:w-1/2 md:px-4 px-5 xl:w-1/3 xl:mx-1/6 xl:pl-0'>
              <div
                className='form-wrapper'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3
                  className='my-6 text-blue-600 text-3xl hidden md:block'
                  data-editor-processed='true'
                >
                  Contact Us
                </h3>
                <div className=''>
                  <div className=''>
                    <form id='signupForm' className=''>
                      <div className='mb-4'>
                        <label className='sr-only' for='emailAddress'>
                          Email address Ashwani
                        </label>
                        <input
                          type='email'
                          className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 hover:shadow-lg hover:shadow-indigo-500 border-indigo-700 '
                          name='newsletteryouremail'
                          id='emailAddress'
                          placeholder='Enter your email address here'
                        />
                        <div className='error-msg' id='errEmailAddress'></div>
                      </div>
                      <div className='mb-4'>
                        <label className='sr-only' for='fullName'>
                          Full name
                        </label>
                        <input
                          type='text'
                          className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed  border-2 hover:shadow-lg hover:shadow-indigo-500 border-indigo-700 '
                          id='fullName'
                          maxlength='150'
                          name='newsletteryourname'
                          placeholder='Full name'
                        />
                        <div className='error-msg' id='errFullName'></div>
                      </div>
                      <div className='mb-4'>
                        <label className='sr-only' for='jobtitle'>
                          Job Title
                        </label>
                        <input
                          type='text'
                          className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed  border-2 hover:shadow-lg hover:shadow-indigo-500 border-indigo-700 '
                          id='jobtitle'
                          maxlength='150'
                          name='jobtitle'
                          placeholder='Job title'
                        />
                        <div className='error-msg' id='errJobTitle'></div>
                      </div>
                      <div className='mb-4'>
                        <label className='sr-only' for='company'>
                          Company
                        </label>
                        <input
                          type='text'
                          className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed  border-2 hover:shadow-lg hover:shadow-indigo-500 border-indigo-700 '
                          id='company'
                          maxlength='150'
                          name='newslettercompanyname'
                          placeholder='Company'
                        />
                        <input
                          type='hidden'
                          name='leadsource'
                          value='en.html'
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='sr-only' for='interest'>
                          Interest
                        </label>
                        <select
                          className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed  border-2 hover:shadow-lg hover:shadow-indigo-500 border-indigo-700 '
                          id='interest'
                          name='newsletterinterest'
                        >
                          <option value>Interest</option>
                          <option value='Aftersales / Parts'>
                            Aftersales / Parts
                          </option>
                          <option value='Customer - private'>
                            Customer - private
                          </option>
                          <option value='Customer - public'>
                            Customer - public
                          </option>
                          <option value='Enthusiast'>Enthusiast</option>
                          <option value='Investor'>Investor</option>
                          <option value='Local authority'>
                            Local authority
                          </option>
                          <option value='Media'>Media</option>
                          <option value='Policy maker'>Policy maker</option>
                          <option value='Recruitment'>Recruitment</option>
                          <option value='Supplier'>Supplier</option>
                          <option value='Other'>Other</option>
                        </select>
                        <div className='error-msg' id='errInterest'></div>
                      </div>
                      <div className='mb-4'>
                        <div className='flex justify-between'>
                          <div className='relative block mb-2 '>
                            <input
                              type='checkbox'
                              name='subscribe_newsletter'
                              id='subscribeCheck'
                              className='mr-2 w-6 h-6'
                            />
                            <label
                              className=' text-lg'
                              htmlFor='subscribeCheck'
                            >
                              Subscribe to news and updates from SWITCH
                            </label>
                          </div>
                          <button
                            type='submit'
                            id='signupSubmit'
                            className='align-middle text-center  border-2 border-indigo-500  whitespace-no-wrap  py-1 px-1 font-medium no-underline rounded-full hover:shadow-lg hover:shadow-indigo-500 '
                          >
                            Submit
                          </button>
                        </div>
                        <div className='error-msg' id='errSubscribeCheck'></div>
                      </div>
                      <div className='display-def-9'>
                        <p className='mb-2 text-sm'>
                          SWITCH Mobility is committed to protecting and
                          respecting your privacy.
                          <br />
                          We only use your personal information to provide the
                          information you requested from us.
                        </p>
                        <p className='text-sm mb-4'>
                          For more information on how to unsubscribe, our
                          privacy practices, and how we are committed to
                          protecting and respecting your privacy, please review
                          our
                          <a
                            className='link-grey'
                            href='en/privacy-policy.html'
                          >
                            {' '}
                            Privacy Policy
                          </a>
                          .
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

export default News;
