import React, { useEffect } from 'react';
import patternBoxSvg from '../../assets/themes/custom/switchmobility/resources/images/pattern-box.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section
        className='flex bg-no-repeat my-4 md:my-8 lg:py-12'
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='container  max-w-full mx-auto sm:px-2'>
          <div className='flex flex-wrap justify-around '>
            <div className='w-4/5 md:w-2/5  xl:w-2/5 pr-2 md:pr-4 md:pl-2 mb-4 mt-8 offset-1 xl:mx-1/5 '>
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
      <section className='bg-[#edede6] py-10 '>
        <div className='flex my-12 flex-col md:flex-row justify-between '>
          <div className=''>
            <div
              className='text-5xl pb-12 pt-12 pl-8 md:pl-16 lg:pl-20'
              data-aos='fade-up'
            >
              <h2 className='text-left pr-2'>Here to help You</h2>
            </div>
            <div className='type-of-block'>
              <div className='text-xl pl-8 md:pl-16 lg:pl-20'>
                <p
                  className='text-indigo-500 pb-8'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  If you've got a question, drop us a line or give us a call.
                </p>

                <div data-aos='fade-up' data-aos-delay='700'>
                  <p>
                    <span className='font-medium text-2xl underline-offset-4 underline'>
                      Saboo RKS Motor - Maruti Suzuki Arena
                    </span>
                    <br />
                    Saboo Towers, 6-3-905,
                    <br />
                    Raj Bhavan Rd, Matha Nagar,
                    <br />
                    Somajiguda, Hyderabad,
                    <br />
                    Telangana 500082
                  </p>
                  <p className='font-serif'>
                    Tel: <a href='tel:+919848898488'>+91-9848898488</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=''></div> */}
          <div className='w-full mt-12 md:mt-0 md:pr-2 md:w-1/2 '>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7420128487547!2d78.454762175723!3d17.424164283469278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6feb9ea5%3A0x1e0a3e3dabcb8701!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Arena%20(Sales%20%26%20Service%2C%20Somajiguda%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1678944732967!5m2!1sen!2sin'
              height='500'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              title='Saboo Maruti'
              style={{
                width: '100%',
                border: '4px solid white ',
                borderRadius: '10px',
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
