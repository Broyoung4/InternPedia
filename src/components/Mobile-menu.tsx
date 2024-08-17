import { Dialog, DialogTitle, DialogOverlay, Transition, TransitionChild } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { HiBars3, HiXMark } from "react-icons/hi2";
import Search, { SearchSkeleton } from './Search';

const MobileMenu = ({menu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu when screen width exceeds 768px
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Only run this effect once

  return (
    <div>
      <button
        onClick={openMobileMenu}
        className="block flex-none md:hidden"
      >
        <HiBars3 size={30} className="h-6 w-6 text-neutral-500 dark:text-white" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeMobileMenu}
        >
          <div className="min-h-screen text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Menu
                  </DialogTitle>
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <HiXMark className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className='mt-4'>
                  <ul className='space-y-4'>
                    {menu.map((link) => (
                      <li key={link.title}>
                        <Link to={`/product/${link.id}`} className='text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100' onClick={closeMobileMenu}>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileMenu;