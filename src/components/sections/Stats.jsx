import React from 'react';
import { TrendingUp, Users, Globe, Award, Clock, CheckCircle } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1,000+",
      label: "Happy Clients",
      description: "Businesses and students served worldwide"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Global reach across all continents"
    },
    {
      icon: TrendingUp,
      number: "$50M+",
      label: "Trade Volume",
      description: "Total value of transactions facilitated"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Client satisfaction and project completion"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: CheckCircle,
      number: "500+",
      label: "Students Placed",
      description: "Successful university admissions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent the trust our clients place in us and 
            the success we've achieved together over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-blue-600 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;