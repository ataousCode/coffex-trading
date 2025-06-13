import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Search, CheckCircle, Truck, GraduationCap, FileText, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Find the best suppliers and products from China with our extensive network and expertise.",
      features: ["Supplier verification", "Price negotiation", "Quality assessment"]
    },
    {
      icon: Search,
      title: "Supplier Vetting",
      description: "Comprehensive background checks and verification of potential business partners.",
      features: ["Background verification", "Financial assessment", "Quality certification"]
    },
    {
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Rigorous quality control processes to ensure products meet international standards.",
      features: ["Pre-shipment inspection", "Quality reports", "Compliance verification"]
    },
    {
      icon: Truck,
      title: "International Shipping",
      description: "Reliable logistics solutions for seamless delivery of your products worldwide.",
      features: ["Customs clearance", "Door-to-door delivery", "Real-time tracking"]
    },
    {
      icon: GraduationCap,
      title: "University Admission",
      description: "Complete assistance for international students seeking admission to Chinese universities.",
      features: ["University selection", "Application support", "Visa assistance"]
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Professional handling of all documentation required for trade and education.",
      features: ["Document preparation", "Translation services", "Legal compliance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for international trade and education, 
            tailored to meet your specific needs and requirements.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;