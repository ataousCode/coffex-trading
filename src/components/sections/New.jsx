import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-yellow-300">Global Trade</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed">
                Connecting businesses worldwide with seamless import/export solutions 
                and helping students achieve their academic dreams in China.
              </p>
            </div>

            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/student-admission"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Student Admission
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
            
          </div>
          
          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 border border-gray-400">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-black bg-opacity-50 rounded-lg border border-gray-500">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Global Import/Export</h3>
                    <p className="text-gray-300 text-sm font-medium">Seamless international trade solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-black bg-opacity-50 rounded-lg border border-gray-500">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Student Services</h3>
                    <p className="text-gray-300 text-sm font-medium">University admission assistance</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-black bg-opacity-50 rounded-lg border border-gray-500">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quality Assurance</h3>
                    <p className="text-gray-300 text-sm font-medium">Rigorous quality control processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;