import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    console.log('Logged Out');
    navigate('/');
  };

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Events', path: '/home/events' },
    { label: 'Villas', path: '/home/villas' },
    { label: 'Profile', path: '/home/profile' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'My Bookings', path: '/home/mybookings' },
    { label: 'Health Status', path: '/home/health' },
  ];

  return (
    <nav className='bg-green-200 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Brand */}
          <div className='flex-shrink-0'>
            <Link to='/home' className='text-2xl font-bold tracking-wide text-black'>
              Club
            </Link>
          </div>

          {/* Toggle button for mobile */}
          <div className='flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='text-black-900 focus:outline-none focus:ring-2 focus:ring-white'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6 text-white-900'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className='text-lg font-bold tracking-wide hover:underline hover:decoration-2 transition duration-200'
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={onLogout}
              className='ml-4 bg-blue-300 text-blue-700 font-semibold px-4 py-1.5 rounded hover:bg-gray-200 transition'
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-blue-800 px-4 pb-4 pt-2 space-y-2 text-white-900'>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className='block py-2 px-2 rounded text-lg font-semibold tracking-wide text-white hover:bg-blue-600 hover:text-yellow-300 transition'
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            className='mt-2 w-full bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-200'
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
