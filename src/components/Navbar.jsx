import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'Rooms',
      path: '/rooms',
      submenu: [
        { label: 'All Rooms', path: '/rooms' },
        { label: 'Premier', path: '/rooms/premier' },
        { label: 'Suite', path: '/rooms/suite' },
        { label: 'Superior', path: '/rooms/superior' },
        { label: 'Deluxe', path: '/rooms/deluxe' },
        { label: 'Family', path: '/rooms/family' },
        { label: 'Twin', path: '/rooms/twin' },
        { label: 'Standard', path: '/rooms/standard' },
      ]
    },
    {
      label: 'Stay & Dine',
      submenu: [
        { label: 'Services & Amenities', path: '/amenities' },
        { label: 'Dine', path: '/dining' },
      ]
    },
    {
      label: 'Experiences',
      submenu: [
        { label: 'Things To Do', path: '/things-to-do' },
      ]
    },
    {
      label: 'Meetings & Events',
      submenu: [
        { label: 'Meetings & Events', path: '/events' },
        { label: 'Conference Rooms', path: '/conferences' },
      ]
    },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary-navy shadow-lg' 
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="text-primary-gold text-2xl md:text-3xl font-heading font-bold">🔥</div>
            <span className="hidden sm:inline text-white font-heading text-lg md:text-xl font-bold">
              Golden Gates
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.path || '#'}
                className="px-4 py-2 text-white hover:text-primary-gold transition-colors duration-300 flex items-center gap-1"
              >
                {link.label}
                {link.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.submenu && (
                <div className="absolute left-0 mt-0 w-48 bg-primary-navy rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-4 py-2 text-white hover:bg-navy-800 hover:text-primary-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link to="/reservations">
            <Button variant="secondary" size="md">
              BOOK NOW
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-primary-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-primary-navy border-t border-navy-800 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-navy-800 rounded transition-colors"
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="bg-navy-800 py-2 rounded">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-6 py-2 text-white/80 hover:text-primary-gold text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-white hover:bg-navy-800 hover:text-primary-gold rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-navy-800">
              <Link to="/reservations" className="block">
                <Button variant="secondary" size="md" className="w-full">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
