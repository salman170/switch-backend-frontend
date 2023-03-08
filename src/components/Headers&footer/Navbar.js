import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=' isolate w-full px-1 py-1 '>
      <div className=' px-3  lg:px-3 z-50'>
        <nav
          className='flex items-center py-2 justify-between h-16'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link
              className='flex title-font font-medium items-center text-gray-900 '
              to='/'
            >
              <span className=' text-xl'>
                <img src={logo} alt='logo' className='w-[140px]' />
              </span>
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                className='h-6 w-6 bg-white border-1 rounded-md '
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-6'>
            <Link
              to='/'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              About Us
            </Link>
            <Link
              to='/vehicles'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              Vehicles
            </Link>
            <Link
              to='/tech'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              Tech
            </Link>
            <Link
              to='/news'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              News
            </Link>
            <Link
              to='/contact'
              className='text-md font-semibold uppercase leading-6  hover:text-indigo-500'
            >
              Contact
            </Link>
          </div>
        </nav>
        <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className=' rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <Link
                    to='/'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    Home
                  </Link>
                  <Link
                    to='/about'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    About Us
                  </Link>
                  <Link
                    to='/vehicles'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    Vehicles
                  </Link>
                  <Link
                    to='/tech'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    Tech
                  </Link>
                  <Link
                    to='/news'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    News
                  </Link>
                  <Link
                    to='/contact'
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
