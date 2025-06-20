import React from "react";
import { Target, Eye, Heart, Globe } from "lucide-react";

const CompanyStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2012, CoffexTrading emerged from a vision to simplify
                international trade and educational opportunities. What started
                as a small consultancy has grown into a trusted global partner,
                helping businesses expand internationally and students achieve
                their academic dreams.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began when our founder recognized the challenges
                faced by businesses trying to navigate complex international
                markets and students seeking quality education abroad. Today,
                we've successfully facilitated thousands of transactions and
                helped hundreds of students secure admissions to top Chinese
                universities.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To bridge global opportunities by providing seamless trade
                    solutions and educational pathways that empower businesses
                    and individuals to thrive internationally.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To become the world's most trusted platform for
                    international trade and education, creating a borderless
                    world of opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Values
                  </h3>
                  <p className="text-gray-600">
                    Integrity, excellence, and customer-centricity guide
                    everything we do. We believe in building lasting
                    relationships based on trust and mutual success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CEO Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                {/* CEO Picture */}
                <div className="w-48 h-48 mx-auto mb-6">
                  <img
                    src="/images/ceo-photo.jpg"
                    alt="Trymore Sakubende - CEO"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                    style={{ display: "none" }}
                  >
                    <span className="text-white text-4xl font-bold">TS</span>
                  </div>
                </div>

                {/* CEO Name */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-wide">
                    SAKUBENDE TRYMORE
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">
                    Coffex Trading CEO
                  </p>
                </div>

                {/* CEO Description */}
                <p className="text-gray-700 max-w-md mx-auto leading-relaxed text-lg">
                  With over 10+ years of experience in international trade and
                  education consulting, Trymore leads CoffexTrading with a
                  vision to create seamless global opportunities for businesses
                  and students in China.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
