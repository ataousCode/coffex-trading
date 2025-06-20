import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Start Your
              <span className="block text-yellow-300">Global Journey?</span>
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Whether you're looking to expand your business internationally or 
              pursue your education in China, we're here to make it happen.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-300" />
                <span className="text-gray-100">+86 177 6539 9420</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-300" />
                <span className="text-gray-100">info@coffextrading.com</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - CTA Buttons */}
          <div className="space-y-6">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 border border-gray-400">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get Started Today</h3>
              
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-yellow-500 text-black text-center px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </Link>
                
                <Link
                  to="/student-admission"
                  className="block w-full bg-transparent border-2 border-yellow-300 text-yellow-300 text-center px-6 py-4 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition-all duration-300"
                >
                  Apply for University
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center w-full text-yellow-300 hover:text-yellow-200 transition-colors duration-200 font-medium"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;