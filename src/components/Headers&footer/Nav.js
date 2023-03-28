import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';
import Logo from '../../assets/logo.png';

// import NavLinks from './NavLinks';
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  return (
    <div className='isolate   fixed z-10 w-full  '>
      <>
        <nav className='bg-white '>
          <div className='flex items-center font-medium justify-between'>
            <div className='z-50 md:p-5 p-4 md:w-auto w-full flex justify-between items-center'>
              <Link to='/'>
                <img
                  src={Logo}
                  alt='logo'
                  className='md:cursor-pointer md:h-9 h-6 '
                />
              </Link>
              <div
                className='text-3xl md:hidden'
                onClick={() => setOpen(!open)}
              >
                <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
              </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-4 '>
              <li>
                <Link
                  to='/'
                  className='py-4 px-3 inline-block hover:text-indigo-500'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='py-4 px-3 inline-block hover:text-indigo-500'
                >
                  About Us
                </Link>
              </li>
              <div>
                {links.map((link) => (
                  <div>
                    <div className='px-3 text-left md:cursor-pointer group '>
                      <h1
                        className='py-4 flex justify-between items-center md:pr-0 pr-2 group'
                        onClick={() => {
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading('');
                          setSubHeading('');
                        }}
                      >
                        {link.name}
                        <span className='text-xl md:hidden inline'>
                          <ion-icon
                            name={`${
                              heading === link.name
                                ? 'chevron-up'
                                : 'chevron-down'
                            }`}
                          ></ion-icon>
                        </span>
                        <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                          <ion-icon name='chevron-down'></ion-icon>
                        </span>
                      </h1>
                      {link.submenu && (
                        <div>
                          <div className='absolute top-12 hidden group-hover:md:block hover:md:block'>
                            <div className='py-3'>
                              <div  className='w-4 h-4 left-3 absolute mt-1 bg-indigo-800 rotate-45'></div>
                            </div>
                            <div className='bg-indigo-800 p-5 grid grid-cols-2 gap-2 '>
                              {link.sublinks.map((mysublinks) => (
                                <div>
                                  <h1 className='text-lg font-semibold text-green-300'>
                                    {mysublinks.Head}
                                  </h1>
                                  {mysublinks.sublink.map((slink) => (
                                    <li className='text-sm text-white my-2.5'>
                                      <Link
                                        to={slink.link}
                                        className='hover:text-primary'
                                      >
                                        {slink.name}
                                      </Link>
                                    </li>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                      {/* sublinks */}
                      {link.sublinks.map((slinks) => (
                        <div>
                          <div>
                            <h1
                              onClick={() =>
                                subHeading !== slinks.Head
                                  ? setSubHeading(slinks.Head)
                                  : setSubHeading('')
                              }
                              className='py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5'
                            >
                              {slinks.Head}

                              <span className='text-xl md:mt-1 md:ml-2 inline'>
                                <ion-icon
                                  name={`${
                                    subHeading === slinks.Head
                                      ? 'chevron-up'
                                      : 'chevron-down'
                                  }`}
                                ></ion-icon>
                              </span>
                            </h1>
                            <div
                              className={`${
                                subHeading === slinks.Head
                                  ? 'md:hidden'
                                  : 'hidden'
                              }`}
                            >
                              {slinks.sublink.map((slink) => (
                                <li className='py-3 pl-14'>
                                  <Link to={slink.link}>{slink.name}</Link>
                                </li>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <li>
                <Link
                  to='/tech'
                  className='py-4 px-3 inline-block hover:text-indigo-500'
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to='/news'
                  className='py-4 px-3 inline-block hover:text-indigo-500'
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='py-4 px-3 inline-block hover:text-indigo-500'
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-green-300 fixed w-full text-lg text-indigo-600  top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
            >
              <li>
                <Link
                  to='/'
                  className='py-5 px-3 inline-block hover:text-indigo-500'
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='py-5 px-3 inline-block hover:text-indigo-500'
                  onClick={() => setOpen(!open)}
                >
                  About Us
                </Link>
              </li>
              {/* <NavLinks  /> */}
              <div>
                {links.map((link) => (
                  <div >
                    <div className='px-3 text-left md:cursor-pointer group '>
                      <h1
                        className='py-4 flex justify-between items-center md:pr-0 pr-2 group'
                        onClick={() => {
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading('');
                          setSubHeading('');
                        }}
                      >
                        {link.name}
                        <span className='text-xl md:hidden inline'>
                          <ion-icon
                            name={`${
                              heading === link.name
                                ? 'chevron-up'
                                : 'chevron-down'
                            }`}
                          ></ion-icon>
                        </span>
                        <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                          <ion-icon name='chevron-down'></ion-icon>
                        </span>
                      </h1>
                      {link.submenu && (
                        <div >
                          <div className='absolute top-12 hidden group-hover:md:block hover:md:block'>
                            <div className='py-3'>
                              <div
                                className='w-4 h-4 left-3 absolute 
                    mt-1 bg-indigo-800 rotate-45'
                              ></div>
                            </div>
                            <div className='bg-indigo-800 p-5 grid grid-cols-2 gap-2 ' onClick={() => setOpen(!open)}>
                              {link.sublinks.map((mysublinks) => (
                                <div >
                                  <h1 className='text-lg font-semibold text-green-300'>
                                    {mysublinks.Head}
                                  </h1>
                                  {mysublinks.sublink.map((slink) => (
                                    <li className='text-sm text-white my-2.5' >
                                      <Link
                                        to={slink.link}
                                        className='hover:text-primary'
                                        
                                      >
                                        {slink.name}
                                      </Link>
                                    </li>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Mobile menus */}
                    <div
                      className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
                    >
                      {/* sublinks */}
                      {link.sublinks.map((slinks) => (
                        <div>
                          <div>
                            <h1
                              onClick={() =>
                                subHeading !== slinks.Head
                                  ? setSubHeading(slinks.Head)
                                  : setSubHeading('')
                              }
                              className='py-4 pl-7 font-semibold  flex justify-between items-center md:pr-0 pr-5'
                            >
                              {slinks.Head}

                              <span className='text-xl md:mt-1 md:ml-2 inline'>
                                <ion-icon
                                  name={`${
                                    subHeading === slinks.Head
                                      ? 'chevron-up'
                                      : 'chevron-down'
                                  }`}
                                ></ion-icon>
                              </span>
                            </h1>
                            <div
                              className={`${
                                subHeading === slinks.Head
                                  ? 'md:hidden'
                                  : 'hidden'
                              }`}
                            >
                              {slinks.sublink.map((slink) => (
                                <li className='py-3 pl-14'>
                                  <Link to={slink.link} onClick={() => setOpen(!open)}>{slink.name}</Link>
                                </li>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <li>
                <Link
                  to='/tech'
                  className='py-5 px-3 inline-block hover:text-indigo-500'
                  onClick={() => setOpen(!open)}
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to='/news'
                  className='py-5 px-3 inline-block hover:text-indigo-500'
                  onClick={() => setOpen(!open)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='py-5 px-3 inline-block hover:text-indigo-500'
                  onClick={() => setOpen(!open)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Nav;
