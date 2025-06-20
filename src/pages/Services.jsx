import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import { 
  Package, Search, CheckCircle, Truck, GraduationCap, FileText, 
  ArrowRight, Star, Users, Globe, Award, Phone, Mail, 
  ChevronRight, Download, Shield, Clock
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('import-export');
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetQuote = async (service) => {
    setLoading(true);
    try {
      // Navigate to contact form with pre-filled service
      navigate(`/contact?service=${encodeURIComponent(service)}&type=consultation`);
    } catch (error) {
      console.error('Error navigating to consultation:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadBrochure = async () => {
    setDownloadLoading(true);
    try {
      let brochureUrl;
      let fileName;
      
      if (activeTab === 'import-export') {
        // For Import & Export brochure
        brochureUrl = '/brochures/import-export-brochure.pdf';
        fileName = 'Import_Export_Services_Brochure.pdf';
      } else {
        // For Student services brochure
        brochureUrl = '/brochures/student-services-brochure.pdf';
        fileName = 'Student_Services_Brochure.pdf';
      }

      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = brochureUrl;
      link.download = fileName;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message (you can replace this with a toast notification)
      alert(`${fileName} download started successfully!`);
    } catch (error) {
      console.error('Error downloading brochure:', error);
      alert('Sorry, there was an error downloading the brochure. Please try again later.');
    } finally {
      setDownloadLoading(false);
    }
  };

  const importExportServices = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Find the best suppliers and products from China with our extensive network and expertise.",
      features: ["Supplier verification", "Price negotiation", "Quality assessment", "Market research"],
      price: "Starting from $500",
      popular: true
    },
    {
      icon: Search,
      title: "Supplier Vetting",
      description: "Comprehensive background checks and verification of potential business partners.",
      features: ["Background verification", "Financial assessment", "Quality certification", "Risk analysis"],
      price: "Starting from $300"
    },
    {
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Rigorous quality control processes to ensure products meet international standards.",
      features: ["Pre-shipment inspection", "Quality reports", "Compliance verification", "Photo documentation"],
      price: "Starting from $200"
    },
    {
      icon: Truck,
      title: "International Shipping",
      description: "Reliable logistics solutions for seamless international trade operations.",
      features: ["Customs clearance", "Door-to-door delivery", "Real-time tracking", "Insurance coverage"],
      price: "Quote on demand"
    }
  ];

  const educationServices = [
    {
      icon: GraduationCap,
      title: "University Admission",
      description: "Complete assistance for international students seeking admission to Chinese universities.",
      features: ["University selection", "Application support", "Visa assistance", "Scholarship guidance"],
      price: "Starting from $800",
      popular: true
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Professional handling of all documentation required for education applications.",
      features: ["Document preparation", "Translation services", "Legal compliance", "Apostille services"],
      price: "Starting from $150"
    },
    {
      icon: Users,
      title: "Student Support",
      description: "Ongoing support for international students throughout their academic journey.",
      features: ["Accommodation assistance", "Cultural orientation", "Academic support", "Emergency assistance"],
      price: "Starting from $200/month"
    },
    {
      icon: Globe,
      title: "Language Preparation",
      description: "Comprehensive language training and test preparation for Chinese universities.",
      features: ["HSK preparation", "IELTS/TOEFL support", "Academic writing", "Speaking practice"],
      price: "Starting from $400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Import Business Owner",
      content: "CoffexTrading helped us find reliable suppliers in China. Their quality inspection service saved us from potential issues.",
      rating: 5
    },
    {
      name: "Tinotenda Kazembe",
      role: "University Student",
      content: "Thanks to their university admission service, I'm now studying at Southwest University of Science and Technology. Excellent support throughout the process.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Export Manager",
      content: "Professional, reliable, and efficient. Their shipping solutions have streamlined our international operations.",
      rating: 5
    }
  ];

  const getCurrentServices = () => {
    return activeTab === 'import-export' ? importExportServices : educationServices;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Comprehensive solutions for international trade and education, 
              tailored to meet your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                icon={<Phone />}
                onClick={() => handleGetQuote('consultation')}
                loading={loading}
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                icon={<Download />}
                onClick={handleDownloadBrochure}
                loading={downloadLoading}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('import-export')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'import-export'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Import & Export
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Education Services
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {getCurrentServices().map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} hover shadow="lg" className="relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  
                  <Card.Header>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <Card.Title className="text-xl mb-2">{service.title}</Card.Title>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Body>
                    <Card.Description className="mb-6">
                      {service.description}
                    </Card.Description>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>

                  <Card.Footer>
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1"
                        onClick={() => handleGetQuote(service.title)}
                        loading={loading}
                      >
                        Get Quote
                      </Button>
                      <Button variant="outline" icon={<ArrowRight />}>
                        Learn More
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient process to get you started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free initial consultation to understand your needs' },
              { step: '02', title: 'Planning', desc: 'Develop a customized strategy for your requirements' },
              { step: '03', title: 'Execution', desc: 'Implement the plan with regular progress updates' },
              { step: '04', title: 'Delivery', desc: 'Successful completion and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and let us help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
              icon={<Phone />}
              onClick={() => handleGetQuote('phone-consultation')}
            >
              Call Now: +86 177 6539 9420
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              icon={<Mail />}
              onClick={() => handleGetQuote('email-consultation')}
            >
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Loading Overlay */}
      {loading && <Loading fullScreen text="Processing your request..." />}
    </div>
  );
};

export default Services;