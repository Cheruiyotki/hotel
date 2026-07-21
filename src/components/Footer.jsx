import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary-gold text-3xl">🔥</div>
              <span className="font-heading text-xl font-bold">Golden Gates</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Warm country hospitality. Contemporary comfort.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Located in the stunning outskirts of Nyeri, surrounded by lush forests and breathtaking views of Mt Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Rooms', path: '/rooms' },
                { label: 'Reservations', path: '/reservations' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Services & Amenities', path: '/amenities' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Dine', path: '/dining' },
                { label: 'Meetings & Events', path: '/events' },
                { label: 'Things To Do', path: '/things-to-do' },
                { label: 'Conference Rooms', path: '/conferences' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary-gold flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>P.O. Box 1621-10100</p>
                  <p>Nyeri, Kenya</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-primary-gold flex-shrink-0" />
                <a 
                  href="mailto:connect@goldengateshotels.com"
                  className="text-sm text-gray-400 hover:text-primary-gold transition-colors"
                >
                  connect@goldengateshotels.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-primary-gold flex-shrink-0" />
                <a 
                  href="tel:+254707029292"
                  className="text-sm text-gray-400 hover:text-primary-gold transition-colors"
                >
                  +254 707 029 292
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <a 
                href="https://facebook.com/goldengateshotel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://maps.google.com/?q=Golden+Gates+Hotel+Nyeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
              <a 
                href="mailto:connect@goldengateshotels.com"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+254707029292"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Golden Gates Hotel. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
