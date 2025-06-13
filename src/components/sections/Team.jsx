import React from 'react';

const Team = () => {
  const partners = [
    {
      name: "TadalateStudio",
      type: "Advanced Consulting and IT Partner",
      logo: "/images/tadalate.png",
      website: "https://tadalatestudio.com"
    },
    {
      name: "Morati Logistics",
      type: "Transportation partner.",
      logo: "/images/morati.jpg",
      website: "https://morati.com"
    },
    {
      name: "Toatal Edge",
      type: "Client partner for sourcing.",
      logo: "/images/edge.jpg",
      website: "https://totaledge.com"
    },
    {
      name: "JOYSOL",
      type: "Investments Partner",
      logo: "/images/joy.jpg",
      website: "https://joysol.com"
    },
    {
      name: "君创JUNCHUANG",
      type: "Premier Partner",
      logo: "/images/partners/junchuang.png",
      website: "https://junchuang.com"
    },
    {
      name: "Golden Ride",
      type: "Consulting Partner",
      logo: "/images/partners/golden-ride.png",
      website: "https://goldenride.com"
    },
    {
      name: "Chart Naught Zimbabwe",
      type: "Certified Partner",
      logo: "/images/partners/coffex-trading.png",
      website: "https://chartnaughtzw.com/"
    },
    {
      name: "Xindabill",
      type: "Premier Partner",
      logo: "/images/partners/xindabill.png",
      website: "https://xindabill.com"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We collaborate with leading organizations to deliver comprehensive solutions that drive business success.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {partners.slice(0, 4).map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Partner Logo */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-white text-lg font-bold">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Partner Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {partner.type}
              </p>

              {/* Visit Website Link - Always Visible */}
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {partners.slice(4, 6).map((partner, index) => (
            <div
              key={index + 4}
              className="group relative bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Partner Logo */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-white text-lg font-bold">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Partner Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {partner.type}
              </p>

              {/* Visit Website Link - Always Visible */}
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;