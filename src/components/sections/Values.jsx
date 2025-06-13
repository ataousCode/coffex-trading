import React from 'react';
import { Shield, Users, Lightbulb, Globe, Award, Heart } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, ensuring transparency and honesty in all our dealings.",
      color: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our clients' success is our priority. We go above and beyond to exceed expectations and deliver exceptional value.",
      color: "bg-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to continuously improve our services and stay ahead of the curve.",
      color: "bg-purple-600"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We understand diverse markets and cultures, enabling us to provide culturally sensitive and locally relevant solutions.",
      color: "bg-orange-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in everything we do, maintaining the highest quality standards in all our services.",
      color: "bg-red-600"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about connecting people and businesses, driven by the belief that we can make a positive impact.",
      color: "bg-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide our decisions, shape our culture, 
            and define how we serve our clients around the world.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;