import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // If we're not on the root page, navigate first
    if (location.pathname !== '/Personal-Portfolio') {
      navigate('/Personal-Portfolio');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the root page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleScrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (typeof scrollToTop === 'function') {
          scrollToTop();
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (typeof scrollToTop === 'function') {
        scrollToTop();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/Personal-Portfolio') {
      navigate('/Personal-Portfolio');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', action: handleScrollToTop },
    { name: 'Skills', action: () => scrollToSection('skills') },
    { name: 'Projects', action: () => scrollToSection('projects') },
    { name: 'Experience', action: () => scrollToSection('experience') },
    { name: 'References', action: () => scrollToSection('references') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="text-3xl font-mono text-gray-800 hover:opacity-80 transition-opacity"
          >
            <span className="font-thin">&lt;</span>
            <span className="font-semibold">Pranaav.dev</span>
            <span className="font-light">/&gt;</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center group"
          >
            <span
              className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-600 my-1 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-gray-700 hover:text-gray-900 font-medium relative group"
              >
                <span className="relative inline-block">
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 
                    group-hover:scale-x-100 group-hover:origin-left origin-right"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="px-4">
                <button
                  onClick={link.action}
                  className="py-2 text-gray-700 hover:text-gray-900 font-medium relative group"
                >
                  <span className="relative inline-block">
                    {link.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 
                      group-hover:scale-x-100 group-hover:origin-left origin-right"
                    />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;