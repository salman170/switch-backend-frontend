import React, { useEffect } from 'react';

import homeBanner from '../../../assets/sites/default/files/vehicle-banner.jpg';
import blueSvg from '../../../assets/themes/custom/switchmobility/resources/images/pattern-blue.svg';
import switch_e1 from '../../../assets/sites/default/files/2022-06/e1-vehicle-img.jpg';
import switch_metrodecker from '../../../assets/sites/default/files/2021-05/prod-metrodecker.jpg';
import switch_metrocity from '../../../assets/sites/default/files/2021-05/prod-metrocity.jpg';
import switch_solo from '../../../assets/sites/default/files/2021-05/prod-solo.jpg';
import switch_eiv12 from '../../../assets/sites/default/files/2022-06/vehicle_ev12_0.jpg';
import switch_eiv22 from '../../../assets/sites/default/files/2022-08/EIV-22-thumb-img.jpg';
import switch_ievSeries from '../../../assets/sites/default/files/2023-01/IeV-Series-vehicle-page-img.jpg';
import switch_eiv7 from '../../../assets/sites/default/files/2023-01/EiV7-vehicle-page-img.jpg';
import moreInfo from '../../../assets/themes/custom/switchmobility/resources/images/chevron-right.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Solo = () => {
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
            className='object-cover w-full relative '
          />
        </div>
      </section>

      <section className=' bg-[#edede6] flex justify-center'>
        <div className='container lg:mx-12 '>
          <div
            className='text-2xl md:text-3xl lg:text-4xl pt-8  md:pt-16 pl-8  pb-6 '
            data-aos='fade-up'
          >
            <h2 className='text-[#505bfe]' data-editor-processed='true'>
              From London’s red double-deckers to rapid charging networks in
              Ahmedabad – our trusted range is leading the way in zero-emission
              public transport.
            </h2>
          </div>

          <div
            className=' w-full divide-x-8 h-[5px] bg-no-repeat pb-6 my-10'
            style={{ backgroundImage: `url(${blueSvg})` }}
          ></div>

          <div className='flex flex-col md:flex-row justify-between'>
            <div
              className='text-lg md:text-xl px-8 md:mb-24 mb-12 md:w-1/3 text-justify'
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              <div className='text-[#505bfe] font-semibold font-mono text-center pb-3'>
                A proven track record
              </div>
              <div>
                Our EVs are already on the road. We’ve delivered over 300
                vehicles and clocked over 30 million electric miles in developed
                and developing markets.
              </div>
            </div>

            <div
              className='text-lg md:text-xl px-8 md:mb-24 mb-12 md:w-1/3 text-justify'
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              <div className='text-[#505bfe] font-semibold font-mono text-center pb-3'>
                Advanced offering
              </div>
              <div>
                Buses and eLCVs fitted with the latest battery innovations and
                SWITCH proprietary tech. Our smart solutions mean lower costs
                for you.
              </div>
            </div>

            <div
              className='text-lg md:text-xl px-8 md:mb-24 mb-12 md:w-1/3 text-justify'
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              <div className='text-[#505bfe] font-semibold font-mono text-center pb-3'>
                Unrivalled service
              </div>
              <div>
                You’re never on your own. From customisation to aftersales and
                updates, we’ll be with you at every step.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className='flex flex-col md:flex-row '>
            <div className='w-1/2'>
              <h2
                className='text-3xl md:text-4xl lg:text-5xl pt-16 pl-12 pb-8'
                data-aos='fade-up'
              >
                Explore our current vehicles
              </h2>

              <p
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
                className='pl-12 lg:text-lg '
              >
                100% electric with zero tailpipe emissions. Meet the fleets on
                the road today.
              </p>
            </div>
            <div></div>
          </div>
          <div className='pt-16 pl-12 pb-8 '>
            <div
              className='text-[#00c389] text-2xl '
              data-aos='fade-up'
              data-aos-delay='200'
              data-editor-processed='true'
            >
              Vehicles from SWITCH Mobility Ltd:
            </div>
          </div>
          <div className=' my-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-12 sm:grid-cols-2'>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='300'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>SWITCH e1</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-lg lg:rounded-xl'>
                <img
                  src={switch_e1}
                  alt='SWITCH e1'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white'
                  to='/e1'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='400'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>Metrodecker</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl'>
                <img
                  src={switch_metrodecker}
                  alt='Metrodecker'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white'
                  to='/metrodecker'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='500'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>Metrocity</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl '>
                <img
                  src={switch_metrocity}
                  alt='Metrocity'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white '
                  to='/metrocity'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='600'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>Solo</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl '>
                <img
                  src={switch_solo}
                  alt='Solo'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white '
                  to='/solo'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
          </div>
          <div className='pt-16 pl-12 pb-8 '>
            <div
              className='text-[#00c389] text-2xl '
              data-aos='fade-up'
              data-aos-delay='200'
              data-editor-processed='true'
            >
              Vehicles from SWITCH Global Ltd:
            </div>
          </div>
          <div className=' my-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-12 sm:grid-cols-2'>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='300'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>SWITCH EiV 12</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl'>
                <img
                  src={switch_eiv12}
                  alt='SWITCH EiV 12'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white'
                  to='/eiv12'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='400'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>SWITCH EiV 22</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl '>
                <img
                  src={switch_eiv22}
                  alt='SWITCH EiV 22'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white '
                  to='/eiv22'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='500'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>SWITCH IeV Series</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-lg lg:rounded-xl'>
                <img
                  src={switch_ievSeries}
                  alt='SWITCH IeV Series'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white'
                  to='/iev'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='600'>
              <div className='text-xl lg:text-3xl my-5 font-semibold text-center'>
                <h3>SWITCH EiV 7</h3>
              </div>
              <div className='border-2 border-indigo-700 overflow-hidden rounded-xl '>
                <img
                  src={switch_eiv7}
                  alt='SWITCH EiV 7'
                  className='hover:scale-105 ease-in duration-300'
                />
              </div>
              <div className='bg-indigo-700 mt-1'>
                <Link
                  className='flex justify-between px-2 lg:py-3 py-2 text-white '
                  to='/eiv7'
                >
                  <span>MORE INFORMATION</span>
                  <img src={moreInfo} width='28' alt='MORE INFORMATION' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solo;
