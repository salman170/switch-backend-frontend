import React, { useEffect } from 'react';
import patternBoxSvg from '../../assets/themes/custom/switchmobility/resources/images/pattern-box.svg';
import pattern from '../../assets/themes/custom/switchmobility/resources/images/pattern.png';
import expoImage from '../../assets/sites/default/files/2023-02/auto-expo-lead-news-banner_2.jpg';

//images imports
import FormulaERace from "../../assets/sites/default/files/2023-02/Formula-E1-img1.jpg"
import SwitchEiv22 from "../../assets/sites/default/files/2023-02/flag-off-img3.jpg"
import jsw from "../../assets/sites/default/files/2022-11/jsw-image-for-news.jpg"
import Birmingham from "../../assets/sites/default/files/2022-11/Switch-BusExpo-Birmingham-news_1.jpg"
import Mahesh from "../../assets/sites/default/files/2022-11/Mahesh.jpg"
import reBirth from "../../assets/sites/default/files/2022-08/EIV-22-for-news_1.jpg"
import chalo from "../../assets/sites/default/files/2022-08/chalo.png"
import ev12 from "../../assets/sites/default/files/2022-06/EV12.jpg"
import e1 from "../../assets/sites/default/files/2022-06/e1.jpg"
import sara from "../../assets/sites/default/files/2022-05/sara-img-news.jpg"
import thumbnail from "../../assets/sites/default/files/2022-05/THUMBNAILNEWS_0.png"
import metrocity from "../../assets/sites/default/files/2022-04/metrocity-news.jpg"
import swiMo from "../../assets/sites/default/files/2022-04/swi_mo.jpg"
import groundBreaking from "../../assets/sites/default/files/2022-04/groundbreaking.jpg"



import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* this is top content */}
      <section
        className='split-column-full bg-[#505bfe] text-white h-full '
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className='flex flex-wrap   no-gutters  h-full'>
          <div className='md:w-1/2 w-full'>
            <img
              src={expoImage}
              alt='expo'
              srcset=''
              className='object-cover h-full'
            />
          </div>
          <div className='md:w-1/2 pr-4 pl-4 '>
            <div className='flex flex-col ' data-aos='fade-up'>
              <div className='text-5xl  mt-16 items-end  h-1/2'>
                <div className='lg:w-2/3 pr-4 pl-4 mb-28 lg:mb-40 xl:mb-[500px] xl:mt-28'>
                  <div className='lg:texl-5xl md:text-4xl text-3xl '>
                    SWITCH Mobility to Showcase 3 New Electric Vehicles at Auto
                    Expo 2023
                  </div>
                </div>
                {/* <div className='lg:w-1/3 pr-4 pl-4 text-right'>
                  <div className='category'>News</div>
                </div> */}
              </div>

              <div className='flex flex-wrap  mt-auto items-end mb-12 h-1/2'>
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

      {/* this is middle content */}
      {/* <section className="generic-padding pb-0">
          <div className="container-fluid">
            <div className="flex flex-col justify- filter-block font-mono">
              <div className='flex justify-between'>

              <h4 className="filter-label mb-md-0">Filter Stories By:</h4>
              <a className="btn sw-news" href="news6833.html?tags=1">News</a>
              <a className="btn sw-news" href="news0e4f.html?tags=2">Press</a>
              <a className="btn sw-news" href="news12d1.html?tags=3">People</a>

              <a className="btn sw-news" href="news331a.html?tags=5">Technology</a>
              </div>
              <div className=''>

              </div>
            </div>

            <div className="view-filters" style={{ display: 'none' }}>
              <form
                className="views-exposed-form"
                data-drupal-selector="views-exposed-form-news-page-block-1"
                action="https://www.switchmobilityev.com/news"
                method="get"
                id="views-exposed-form-news-page-block-1"
                accept-charset="UTF-8"
                class="form-newsletter"
              >
                <div
                  className="row dark-grey-pattern no-gutters justify-content-center align-items-center pt-4 pb-3"
                >
                  <div
                    className="justify-content-center align-items-center d-md-flex"
                  >
                    <h3 className="mr-3 filter-label">Filter By</h3>

                    <div
                      className="form-row align-items-center"
                      data-aos="fade-up"
                      data-aos-delay="1000"
                    >
                      <div className="d-flex justify-content-between">
                        <label for="edit-tags">Tags (field_tags)</label>
                        <select
                          data-drupal-selector="edit-tags"
                          id="edit-tags"
                          name="tags"
                          className="form-select"
                        >
                          <option value="All" selected="selected">
                            - Any -
                          </option>
                          <option value="1">News</option>
                          <option value="3">People</option>
                          <option value="4">Planet</option>
                          <option value="2">Press</option>
                          <option value="5">Technology</option>
                        </select>
                      </div>
                    </div>

                    <button
                      data-drupal-selector="edit-submit-news-page"
                      type="submit"
                      id="edit-submit-news-page"
                      value="Apply"
                      className="button js-form-submit form-submit btn btn-circle"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <ul className="row list-unstyled mb-0">
              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="100">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2023-02/Formula-E1-img1.jpg"
                      alt="Formula E Race"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2023-02-15T10:32:29Z" className="datetime"
                        >15.02.23</time                      >
                    </div>
                    <h4 className="title mb-1">Formula E Race</h4>
                    <a
                      className="link-blue sw-news"
                      href="news/formula-e-race76e3.html?nid=3469"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="200">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2023-02/flag-off-img3.jpg"
                      alt="Switch Mobility Ltd. delivers first set of SWITCH EiV 22, India’s first electric double decker buses to BEST"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2023-02-13T10:30:35Z" className="datetime"
                        >13.02.23</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. delivers first set of SWITCH EiV 22,
                      India’s first electric double decker buses to BEST
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-delivers-first-set-switch-eiv-22-indias-first-electric-double-decker-buses0222.html?nid=3468"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="300">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-11/jsw-image-for-news.jpg"
                      alt="SWITCH Mobility Partners with JSW to Introduce Electric Buses for Employee Transportation"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-28T09:27:54Z" className="datetime"
                        >28.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      SWITCH Mobility Partners with JSW to Introduce Electric
                      Buses for Employee Transportation
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-partners-jsw-introduce-electric-buses-employee-transportation2b4f.html?nid=2793"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="400">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-11/Switch-BusExpo-Birmingham-news_1.jpg"
                      alt="Showcasing a greener future at Euro Bus Expo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-10T03:36:35Z" className="datetime"
                        >10.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Showcasing a greener future at Euro Bus Expo
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/showcasing-greener-future-euro-bus-expofae1.html?nid=2626"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="500">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-11/Mahesh.jpg"
                      alt="SWITCH announces Senior Level Organisational Changes Mahesh Babu elevated as CEO"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-04T14:12:31Z" className="datetime"
                        >04.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      SWITCH announces Senior Level Organisational Changes
                      Mahesh Babu elevated as CEO
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-announces-senior-level-organisational-changes-mahesh-babu-elevated-ceo8e63.html?nid=2552"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="600">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-08/EIV-22-for-news_1.jpg"
                      alt="Re-birth of an Icon: Switch Mobility Ltd. unveils India’s first and unique electric double-decker bus - Switch EiV 22"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-08-18T14:41:43Z" className="datetime"
                        >18.08.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Re-birth of an Icon: Switch Mobility Ltd. unveils India’s
                      first and unique electric double-decker bus - Switch EiV
                      22
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/re-birth-icon-switch-mobility-ltd-unveils-indias-first-and-unique-electric-double-decker-bus4025.html?nid=1447"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="700">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-08/chalo.png"
                      alt="Switch Mobility and Chalo join hands to deploy 5,000 electric buses across India"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-08-11T04:34:22Z" className="datetime"
                        >11.08.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility and Chalo join hands to deploy 5,000
                      electric buses across India
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-and-chalo-join-hands-deploy-5000-electric-buses-across-india2272.html?nid=1362"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="800">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-06/EV12.jpg"
                      alt="Switch India launches next generation electric bus platform - SWITCH EiV 12"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-06-14T14:56:56Z" className="datetime"
                        >14.06.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch India launches next generation electric bus
                      platform - SWITCH EiV 12
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-india-launches-next-generation-electric-bus-platform-switch-eiv-12e16e.html?nid=754"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-5" data-aos="fade-in" data-aos-delay="900">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-06/e1.jpg"
                      alt="Switch Mobility Ltd. launches all new, ‘SWITCH e1’ 12m bus."
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-06-07T15:46:38Z" className="datetime"
                        >07.06.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. launches all new, ‘SWITCH e1’
                      12m bus.
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-launches-all-new-switch-e1-12m-busbb04.html?nid=642"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1000"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-05/sara-img-news.jpg"
                      alt="Sara Borjas appointed new Head of R&amp;D of Switch Mobility Iberia"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-05-12T17:05:29Z" className="datetime"
                        >12.05.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Sara Borjas appointed new Head of R&amp;D of Switch
                      Mobility Iberia
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/sara-borjas-appointed-new-head-rd-switch-mobility-iberia9039.html?nid=622"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1100"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-05/THUMBNAILNEWS_0.png"
                      alt="Switch Mobility: One Year On"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-05-10T03:36:51Z" className="datetime"
                        >10.05.22</time                      >
                    </div>
                    <h4 className="title mb-1">Switch Mobility: One Year On</h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-one-year493b.html?nid=616"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1200"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-04/metrocity-news.jpg"
                      alt="Switch Mobility Ltd. to showcase current and future products at BUS2BUS, Berlin"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-04-20T14:23:06Z" className="datetime"
                        >20.04.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. to showcase current and future
                      products at BUS2BUS, Berlin
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-showcase-current-and-future-products-bus2bus-berlin6c97.html?nid=584"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1300"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-04/swi_mo.jpg"
                      alt="Switch Mobility certified carbon neutral"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-03-21T04:36:51Z" className="datetime"
                        >21.03.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility certified carbon neutral
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-certified-carbon-neutral6d58.html?nid=559"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1400"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src="../sites/default/files/2022-04/groundbreaking.jpg"
                      alt="Groundbreaking Ceremony in Spain marks milestone for Switch Mobility"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-03-18T12:00:00Z" className="datetime"
                        >18.03.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Groundbreaking Ceremony in Spain marks milestone for
                      Switch Mobility
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/groundbreaking-ceremony-spain-marks-milestone-switch-mobilityf83d.html?nid=553"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </section> */}

      <section className='font-mono'>
        <div></div>
        <div className='flex flex-wrap'>
        <div className="flex flex-wrap">
              <div className="w-1/4 gap-2" data-aos="fade-in" data-aos-delay="100">
                <div className="row align-items-end">
                  <div className="xl:w-[400px] lg:w-[300px] md:w-[200px] w-full">
                    <img
                      src={FormulaERace}
                      alt="Formula E Race"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2023-02-15T10:32:29Z" className="datetime"
                        >15.02.23</time                      >
                    </div>
                    <h4 className="title mb-1">Formula E Race</h4>
                    <a
                      className="link-blue sw-news"
                      href="news/formula-e-race76e3.html?nid=3469"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full lg:w-1/4 gap-2" data-aos="fade-in" data-aos-delay="200">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={SwitchEiv22}
                      alt="Switch Mobility Ltd. delivers first set of SWITCH EiV 22, India’s first electric double decker buses to BEST"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2023-02-13T10:30:35Z" className="datetime"
                        >13.02.23</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. delivers first set of SWITCH EiV 22,
                      India’s first electric double decker buses to BEST
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-delivers-first-set-switch-eiv-22-indias-first-electric-double-decker-buses0222.html?nid=3468"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full lg:w-1/4 gap-2" data-aos="fade-in" data-aos-delay="300">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={jsw}
                      alt="SWITCH Mobility Partners with JSW to Introduce Electric Buses for Employee Transportation"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-28T09:27:54Z" className="datetime"
                        >28.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      SWITCH Mobility Partners with JSW to Introduce Electric
                      Buses for Employee Transportation
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-partners-jsw-introduce-electric-buses-employee-transportation2b4f.html?nid=2793"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full lg:w-1/4 gap-2" data-aos="fade-in" data-aos-delay="400">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={Birmingham}
                      alt="Showcasing a greener future at Euro Bus Expo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-10T03:36:35Z" className="datetime"
                        >10.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Showcasing a greener future at Euro Bus Expo
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/showcasing-greener-future-euro-bus-expofae1.html?nid=2626"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full lg:w-1/4 gap-2" data-aos="fade-in" data-aos-delay="500">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={Mahesh}
                      alt="SWITCH announces Senior Level Organisational Changes Mahesh Babu elevated as CEO"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-11-04T14:12:31Z" className="datetime"
                        >04.11.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      SWITCH announces Senior Level Organisational Changes
                      Mahesh Babu elevated as CEO
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-announces-senior-level-organisational-changes-mahesh-babu-elevated-ceo8e63.html?nid=2552"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full lg:w-1/4 gap-2" data-aos="fade-in" data-aos-delay="600">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={reBirth}
                      alt="Re-birth of an Icon: Switch Mobility Ltd. unveils India’s first and unique electric double-decker bus - Switch EiV 22"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-08-18T14:41:43Z" className="datetime"
                        >18.08.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Re-birth of an Icon: Switch Mobility Ltd. unveils India’s
                      first and unique electric double-decker bus - Switch EiV
                      22
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/re-birth-icon-switch-mobility-ltd-unveils-indias-first-and-unique-electric-double-decker-bus4025.html?nid=1447"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="w-1/4 gap-2" data-aos="fade-in" data-aos-delay="700">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={chalo}
                      alt="Switch Mobility and Chalo join hands to deploy 5,000 electric buses across India"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-08-11T04:34:22Z" className="datetime"
                        >11.08.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility and Chalo join hands to deploy 5,000
                      electric buses across India
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-and-chalo-join-hands-deploy-5000-electric-buses-across-india2272.html?nid=1362"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="w-1/4 gap-2" data-aos="fade-in" data-aos-delay="800">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={ev12}
                      alt="Switch India launches next generation electric bus platform - SWITCH EiV 12"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-06-14T14:56:56Z" className="datetime"
                        >14.06.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch India launches next generation electric bus
                      platform - SWITCH EiV 12
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-india-launches-next-generation-electric-bus-platform-switch-eiv-12e16e.html?nid=754"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div className="w-1/4 gap-2" data-aos="fade-in" data-aos-delay="900">
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={e1}
                      alt="Switch Mobility Ltd. launches all new, ‘SWITCH e1’ 12m bus."
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-06-07T15:46:38Z" className="datetime"
                        >07.06.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. launches all new, ‘SWITCH e1’
                      12m bus.
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-launches-all-new-switch-e1-12m-busbb04.html?nid=642"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1000"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={sara}
                      alt="Sara Borjas appointed new Head of R&amp;D of Switch Mobility Iberia"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-05-12T17:05:29Z" className="datetime"
                        >12.05.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Sara Borjas appointed new Head of R&amp;D of Switch
                      Mobility Iberia
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/sara-borjas-appointed-new-head-rd-switch-mobility-iberia9039.html?nid=622"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1100"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={thumbnail}
                      alt="Switch Mobility: One Year On"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-05-10T03:36:51Z" className="datetime"
                        >10.05.22</time                      >
                    </div>
                    <h4 className="title mb-1">Switch Mobility: One Year On</h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-one-year493b.html?nid=616"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1200"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={metrocity}
                      alt="Switch Mobility Ltd. to showcase current and future products at BUS2BUS, Berlin"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-04-20T14:23:06Z" className="datetime"
                        >20.04.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility Ltd. to showcase current and future
                      products at BUS2BUS, Berlin
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-ltd-showcase-current-and-future-products-bus2bus-berlin6c97.html?nid=584"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1300"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={swiMo}
                      alt="Switch Mobility certified carbon neutral"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-03-21T04:36:51Z" className="datetime"
                        >21.03.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Switch Mobility certified carbon neutral
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/switch-mobility-certified-carbon-neutral6d58.html?nid=559"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>

              <div
                className="col-sm-4 mb-5"
                data-aos="fade-in"
                data-aos-delay="1400"
              >
                <div className="row align-items-end">
                  <div className="w-[500px]">
                    <img
                      src={groundBreaking}
                      alt="Groundbreaking Ceremony in Spain marks milestone for Switch Mobility"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="pub-date">
                      <time datetime="2022-03-18T12:00:00Z" className="datetime"
                        >18.03.22</time                      >
                    </div>
                    <h4 className="title mb-1">
                      Groundbreaking Ceremony in Spain marks milestone for
                      Switch Mobility
                    </h4>
                    <a
                      className="link-blue sw-news"
                      href="news/groundbreaking-ceremony-spain-marks-milestone-switch-mobilityf83d.html?nid=553"
                      >READ MORE</a                    >
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* this is form code */}
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
