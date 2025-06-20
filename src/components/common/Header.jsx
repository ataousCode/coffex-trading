import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Globe, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-1 sm:mb-0">
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>Global Import & Export Solutions</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+86 177 6539 9420</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@coffextrading.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/logo.jpg" 
                alt="CoffexTrading Logo" 
                className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  Coffex Trading
                </span>
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  Global Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

           {/* CTA Button */}
           <div className="hidden lg:block">
            <Link
              to="/quote"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;