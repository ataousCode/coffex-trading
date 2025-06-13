import React from 'react';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              About
              <span className="block text-yellow-300">CoffexTrading</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto">
              Bridging continents through trade and education. We are your trusted partner 
              in international business and academic pursuits, connecting opportunities 
              across borders since 2019.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-xl mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;