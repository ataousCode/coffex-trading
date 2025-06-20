import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import {
  Play, Pause, Volume2, Maximize, Globe, GraduationCap,
  TrendingUp, Users, Award, CheckCircle, ArrowRight,
  Ship, Plane, BookOpen, MapPin
} from 'lucide-react';

const VideoSection = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Update this path to match your video file name
  const videoSrc = '/videos/company-intro.mp4'; // Change this to your actual video filename

  const importExportFeatures = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to 50+ countries with established trade relationships"
    },
    {
      icon: Ship,
      title: "Logistics Excellence",
      description: "End-to-end shipping solutions with real-time tracking"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Data-driven insights for profitable trade opportunities"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assured",
      description: "100% regulatory compliance with international trade laws"
    }
  ];

  const admissionFeatures = [
    {
      icon: GraduationCap,
      title: "Top Universities",
      description: "Partnerships with 200+ prestigious universities worldwide"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Dedicated advisors with 10+ years of admission experience"
    },
    {
      icon: Award,
      title: "95% Success Rate",
      description: "Proven track record of successful university admissions"
    },
    {
      icon: BookOpen,
      title: "Complete Support",
      description: "From application to visa, we handle every step"
    }
  ];

  const handleVideoPlay = () => {
    setShowVideo(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoToggle = () => {
    if (isPlaying) {
      handleVideoPause();
    } else {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch how we transform businesses through international trade and help students 
            achieve their academic dreams at world-class universities.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="mb-20">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            {!showVideo ? (
              /* Video Thumbnail */
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center cursor-pointer" onClick={handleVideoPlay}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your Gateway to Global Success</h3>
                  <p className="text-lg opacity-90">See how we've helped thousands achieve their goals</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 bg-opacity-20 rounded-full blur-xl"></div>
              </div>
            ) : (
              /* Actual Video Player */
              <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full"
                style={{
                  objectFit: 'contain',
                  backgroundColor: '#000'
                }}
                src={videoSrc}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onError={(e) => {
                  console.error('Video error:', e.target.error);
                  console.log('Video source:', videoSrc);
                }}
                onLoadedData={() => console.log('Video loaded successfully')}
                controls={false}
                preload="metadata"
                playsInline
                webkit-playsinline="true"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Video Controls */}
              <div className="absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center group pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <button
                    onClick={handleVideoToggle}
                    className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 mr-4"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                  </button>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 z-10"
              >
                <span className="text-white text-xl">×</span>
              </button>
              
              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-10">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <button onClick={handleVideoToggle} className="hover:text-blue-300 transition-colors">
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <button className="hover:text-blue-300 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're looking to expand your business globally or pursue higher education abroad, 
              we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue text-blue-600"
                icon={<Globe />}
                onClick={() => navigate('/services')}
              >
                Explore Trade Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                icon={<GraduationCap />}
                onClick={() => navigate('/student-admission')}
              >
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;