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
      {isOpen && (
      menu.map((link) => (
        <Link
          key={link.title}
          to={link.path}
          className="block px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          {link.title}
        </Link>
      ))
      )}
    </div>
  );
};

export default MobileMenu;