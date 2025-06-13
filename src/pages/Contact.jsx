import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import ContactForm from '../components/forms/ContactForm';
import ZoomSchedulerModal from '../components/common/ZoomSchedulerModal';
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  Globe, Users, Award, CheckCircle, ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [consultationInfo, setConsultationInfo] = useState(null);

  // Check for consultation parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const type = urlParams.get('type');
    
    if (service && type === 'consultation') {
      let serviceName = '';
      if (service === 'import-export') {
        serviceName = 'Import/Export Services';
      } else if (service === 'education') {
        serviceName = 'University Admission Services';
      }
      
      if (serviceName) {
        setConsultationInfo({
          service: serviceName,
          type: 'Free Consultation'
        });
      }
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+86 138 0013 8000", "+1 (555) 123-4567"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@coffextrading.com", "support@coffextrading.com"],
      description: "Send us your inquiries anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Shanghai, China", "New York, USA"],
      description: "Visit our offices worldwide"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here to help during business hours"
    }
  ];

  const faqs = [
    {
      question: "How long does the import/export process take?",
      answer: "The timeline varies depending on the product type, origin, and destination. Typically, it takes 2-6 weeks for complete processing including documentation and shipping."
    },
    {
      question: "What documents are required for international trade?",
      answer: "Common documents include commercial invoice, packing list, bill of lading, certificate of origin, and any specific permits required for your product category."
    },
    {
      question: "Do you provide university admission guarantees?",
      answer: "While we cannot guarantee admission, our success rate is over 95%. We carefully assess your profile and only recommend universities where you have strong chances of acceptance."
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary based on the service complexity and requirements. We provide transparent pricing with no hidden costs. Contact us for a detailed quote."
    },
    {
      question: "Do you offer support after service completion?",
      answer: "Yes, we provide ongoing support for 6 months after service completion. For education services, we offer support throughout the first academic year."
    }
  ];

  const handleQuickContact = async (type) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle contact action
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {consultationInfo && (
              <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block mb-6">
                <p className="font-semibold">
                  🎯 {consultationInfo.type} Request for {consultationInfo.service}
                </p>
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              {consultationInfo 
                ? `Ready to discuss your ${consultationInfo.service.toLowerCase()}? Our expert team is here to provide personalized guidance.`
                : "Ready to start your journey? Contact our expert team for personalized solutions and professional guidance."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                icon={<MessageCircle />}
                onClick={() => setShowZoomModal(true)}
              >
                Schedule Zoom Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} hover className="text-center">
                  <Card.Body>
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Card.Title className="text-xl mb-3">{info.title}</Card.Title>
                    <div className="space-y-2 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="font-semibold text-gray-900">
                          {detail}
                        </div>
                      ))}
                    </div>
                    <Card.Description>{info.description}</Card.Description>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {consultationInfo ? `Request ${consultationInfo.type}` : 'Send us a Message'}
              </h2>
              <p className="text-gray-600 mb-8">
                {consultationInfo 
                  ? `Fill out the form below to request your free consultation for ${consultationInfo.service.toLowerCase()}. We'll get back to you within 24 hours.`
                  : "Fill out the form below and we'll get back to you within 24 hours."
                }
              </p>
              <ContactForm />
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Locations
              </h2>

              {/* Office Details */}
              <div className="space-y-6">
                <Card>
                  <Card.Body>
                    <Card.Title className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Shanghai Office
                    </Card.Title>
                    <Card.Description>
                      Room 1205, Building A<br />
                      Guangzhou, Guangdong Province<br />
                      People's Republic of China<br />
                      <strong>Phone:</strong> +86 177 6539 9420
                    </Card.Description>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      New York Office
                    </Card.Title>
                    <Card.Description>
                      Suite 500, Empire State Building<br />
                      350 5th Avenue<br />
                      New York, NY 10118<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </Card.Description>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <Card.Body>
                  <Card.Title className="flex items-start mb-3">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    {faq.question}
                  </Card.Title>
                  <Card.Description className="ml-8">
                    {faq.answer}
                  </Card.Description>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <Button
              size="lg"
              icon={<ArrowRight />}
              onClick={() => handleQuickContact('support')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Zoom Scheduler Modal */}
      <ZoomSchedulerModal 
        isOpen={showZoomModal} 
        onClose={() => setShowZoomModal(false)} 
      />

      {/* Loading Overlay */}
      {loading && <Loading fullScreen text="Connecting you with our team..." />}
    </div>
  );
};

export default Contact;