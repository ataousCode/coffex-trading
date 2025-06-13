import React from 'react';

const Journey = () => {
  const journeyImages = [
    {
      src: '/images/saku.jpg',
      alt: 'Client meeting',
      caption: 'CoffexTrading CEO China Director'
    },
    {
      src: '/images/chris.jpg',
      alt: 'Team building',
      caption: 'Team member Zimbabwe Director'
    },
    {
      src: '/images/business.jpg',
      alt: 'Business meeting in Shanghai',
      caption: 'Expanding partnerships in Shanghai'
    },
    {
      src: '/images/market.jpg',
      alt: 'Visiting local markets',
      caption: 'Exploring local markets for new products'
    },
    {
      src: '/images/m1.jpg',
      alt: 'International conference',
      caption: 'Representing at international trade conference'
    },
    {
      src: '/images/set.jpg',
      alt: 'University visit',
      caption: 'Meeting with Universities students'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Moments from our global adventures building connections and creating opportunities.
          </p>
        </div>

        {/* Journey Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeyImages.map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-lg font-bold p-4 text-center"
                  style={{ display: 'none' }}
                >
                  Journey Image Placeholder
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-6">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;