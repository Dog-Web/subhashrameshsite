import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import './navbar.css'; // Import the custom CSS file


const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Real Weddings', path: '/real-weddings' },
    { name: 'Packages', path: '/packages' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Enquire', path: '/enquire' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="hidden sticky md:flex w-full justify-center space-between bg-white opacity-60 py-4 ">
       <ul className="flex space-x-8">
       {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`nav-link text-gray-700 px-2 transition-all duration-300 ${
                  isActive ? 'font-bold' : ''
                }`}
              >
                {item.name}
                <div
                  className={`absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 ${
                    isActive ? 'bg-gray-900' : ''
                  } group-hover:bg-gray-900`}
                />
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 transition-all duration-300 ${
                    isActive ? 'bg-gray-900' : ''
                  } group-hover:bg-gray-900`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;