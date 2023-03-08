import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
// import logo from "../assets/procuren-logo-white.png";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '/about' },
  { name: 'Vehicles', href: '/vehicles' },
  { name: 'Tech', href: '/tech' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=" w-full px-1 py-1 ">
     
      <div className="px-6  lg:px-8 z-50">
        <nav className="flex items-center py-2 justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a
            className="flex title-font font-medium items-center text-gray-900 "
            href="/"
          >
            <span className=" text-xl">
              <img src="" alt="logo" className="h-12" />
            </span>
          </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 bg-white border-1 rounded-md " aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-semibold uppercase leading-6  hover:text-indigo-500">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
              <button
                type="button"
                className=" rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 ">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 uppercase"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
     
    </div>
  )
}