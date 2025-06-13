import React from 'react';
import { Shield, Clock, Globe, Users, Award, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your business is protected with our comprehensive security measures and trusted partnerships.",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times for all your import/export needs and student admission processes.",
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network spanning over 50 countries for seamless international operations.",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to providing personalized solutions for your needs.",
      color: "bg-orange-500"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control processes ensuring the highest standards in all our services.",
      color: "bg-red-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you whenever you need help.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CoffexTrading?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine years of experience with cutting-edge technology to deliver 
            exceptional results for businesses and students worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;