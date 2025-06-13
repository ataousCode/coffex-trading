import React, { useState } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';
import StudentAdmissionForm from '../components/forms/StudentAdmissionForm';
import {
  GraduationCap, FileText, Users, Globe, Award, CheckCircle,
  ArrowRight, Star, Clock, Phone, Mail, Download, Send
} from 'lucide-react';

const StudentAdmission = () => {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
    // Scroll to form section
    setTimeout(() => {
      const formSection = document.getElementById('admission-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleApplyNow = () => {
    setShowForm(true);
    setTimeout(() => {
      const formSection = document.getElementById('admission-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Expert guidance in choosing the right Chinese university for your academic goals.",
      features: ["Program matching", "University rankings", "Admission requirements", "Scholarship opportunities"]
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Complete assistance with university application processes and documentation.",
      features: ["Document preparation", "Application review", "Essay assistance", "Interview preparation"]
    },
    {
      icon: Users,
      title: "Visa Assistance",
      description: "Professional support for student visa applications and requirements.",
      features: ["Visa consultation", "Document verification", "Application tracking", "Interview preparation"]
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Comprehensive support for adapting to life and study in China.",
      features: ["Cultural orientation", "Language support", "Accommodation help", "Local guidance"]
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete our comprehensive application form with all required documents"
    },
    {
      step: "02",
      title: "Document Review",
      description: "Our experts review your application and verify all documents"
    },
    {
      step: "03",
      title: "University Matching",
      description: "We match you with suitable universities based on your profile"
    },
    {
      step: "04",
      title: "Admission & Visa",
      description: "Complete admission process and visa assistance for your journey"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Study in <span className="text-yellow-300">China</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Your gateway to world-class education in China. We provide comprehensive
              support for international students seeking admission to Chinese universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                icon={<Send />}
                onClick={handleGetStarted}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                icon={<Download />}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support throughout your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} hover shadow="lg">
                  <Card.Header>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <Card.Title className="text-xl mb-2">{service.title}</Card.Title>
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
                    <Button className="w-full" icon={<ArrowRight />}>
                      Learn More
                    </Button>
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
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start your educational journey in China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {showForm && (
        <section id="admission-form" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Student Admission Application
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete the form below to start your application process. Our team will review your application and contact you within 24 hours.
              </p>
            </div>
            
            <StudentAdmissionForm />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {showForm 
              ? "Complete the application form above or contact us for immediate assistance."
              : "Apply now or contact us today for a free consultation and take the first step towards studying in China."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!showForm && (
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                icon={<Send />}
                onClick={handleApplyNow}
              >
                Apply Now
              </Button>
            )}
            <Button
              size="lg"
              className={showForm ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "border-white text-white hover:bg-white hover:text-blue-600"}
              variant={showForm ? "default" : "outline"}
              icon={<Phone />}
            >
              Call Now: +86 138 0013 8000
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              icon={<Mail />}
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

export default StudentAdmission;