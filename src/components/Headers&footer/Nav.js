import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import NavLinks from './NavLinks';
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='isolate   fixed z-10 w-full  '>
      <div className=''>
      <nav className='bg-white '>
        <div className='flex items-center font-medium justify-between'>
          <div className='z-50 md:p-5 p-3 md:w-auto w-full flex justify-between items-center'>
          <Link
              
              to='/'
            >
            <img src={Logo} alt='logo' className='md:cursor-pointer md:h-9 h-5 ' />
            </Link>
            <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
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
            <li >
              <Link
                to='/about'
                className='py-4 px-3 inline-block hover:text-indigo-500'
              >
                About Us
              </Link>
            </li>
            <NavLinks />
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
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
          >
            <li>
              <Link
                to='/'
                className='py-7 px-3 inline-block hover:text-indigo-500'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='py-7 px-3 inline-block hover:text-indigo-500'
              >
                About Us
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link
                to='/tech'
                className='py-7 px-3 inline-block hover:text-indigo-500'
              >
                Tech
              </Link>
            </li>
            <li>
              <Link
                to='/news'
                className='py-7 px-3 inline-block hover:text-indigo-500'
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='py-7 px-3 inline-block hover:text-indigo-500'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Nav;
