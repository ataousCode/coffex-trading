import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import QuoteForm from '../components/forms/QuoteForm';
import {
  Calculator, FileText, Clock, CheckCircle, ArrowRight,
  Package, GraduationCap, Search, Truck, Globe, Users
} from 'lucide-react';

const Quote = () => {
  const location = useLocation();
  const preSelectedService = location.state?.service || '';
  const [selectedCategory, setSelectedCategory] = useState('import-export');

  const serviceCategories = {
    'import-export': {
      title: 'Import & Export Services',
      icon: Package,
      services: [
        {
          id: 'product-sourcing',
          name: 'Product Sourcing',
          description: 'Find the best suppliers and products from China',
          basePrice: 500,
          factors: ['Product complexity', 'Number of suppliers', 'Market research depth']
        },
        {
          id: 'supplier-vetting',
          name: 'Supplier Vetting',
          description: 'Comprehensive background checks and verification',
          basePrice: 300,
          factors: ['Number of suppliers', 'Verification depth', 'Financial assessment']
        },
        {
          id: 'quality-inspection',
          name: 'Quality Inspection',
          description: 'Rigorous quality control processes',
          basePrice: 200,
          factors: ['Product type', 'Inspection complexity', 'Number of units']
        },
        {
          id: 'international-shipping',
          name: 'International Shipping',
          description: 'Reliable logistics solutions worldwide',
          basePrice: 'Variable',
          factors: ['Destination', 'Package size/weight', 'Shipping method', 'Insurance']
        }
      ]
    },
    'education': {
      title: 'Education Services',
      icon: GraduationCap,
      services: [
        {
          id: 'university-admission',
          name: 'University Admission',
          description: 'Complete university application assistance',
          basePrice: 1500,
          factors: ['Number of universities', 'Application complexity', 'Document preparation']
        },
        {
          id: 'visa-assistance',
          name: 'Visa Assistance',
          description: 'Student visa application support',
          basePrice: 500,
          factors: ['Visa type', 'Country requirements', 'Document complexity']
        },
        {
          id: 'language-preparation',
          name: 'Language Preparation',
          description: 'Chinese language training and HSK preparation',
          basePrice: 800,
          factors: ['Course duration', 'Proficiency level', 'Study materials']
        },
        {
          id: 'accommodation-support',
          name: 'Accommodation Support',
          description: 'Housing assistance and cultural orientation',
          basePrice: 300,
          factors: ['Location preference', 'Duration', 'Support level']
        }
      ]
    }
  };

  const benefits = [
    {
      icon: FileText,
      title: 'Detailed Proposal',
      description: 'Receive a comprehensive quote with breakdown of all costs and services'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get your personalized quote within 24 hours of submission'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free quote with no commitment required - compare and decide'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Speak with our specialists to refine your requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tell us about your needs and receive a detailed, personalized quote 
              for our import/export or education services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Request a Quote?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our detailed quotes help you understand exactly what you're getting 
              and make informed decisions about your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <Card.Body>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Select Your Service Category
            </h2>
            <p className="text-lg text-gray-600">
              Choose the category that best matches your needs
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${
                      selectedCategory === key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {serviceCategories[selectedCategory].services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <Card.Body>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {typeof service.basePrice === 'number' 
                          ? `From $${service.basePrice}` 
                          : service.basePrice
                        }
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Pricing factors:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.factors.map((factor, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request Your Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll send you a detailed quote within 24 hours
            </p>
          </div>
          
          <QuoteForm 
            preSelectedService={preSelectedService}
            selectedCategory={selectedCategory}
            services={serviceCategories[selectedCategory].services}
          />
        </div>
      </section>
    </div>
  );
};

export default Quote;