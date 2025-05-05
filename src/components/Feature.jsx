import React from 'react';

const Feature = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Features for Smart Parking
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our innovative platform makes finding and booking parking spaces effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1   */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-sm transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Booking</h3>
              <p className="text-gray-600">
                Book parking spots in advance with just a few taps on your smartphone. Receive
                instant confirmation and directions.
              </p>
            </div>

            {/* Feature 2   */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-sm transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Security</h3>
              <p className="text-gray-600">
                All our parking locations are monitored round-the-clock with CCTV cameras and
                on-site security personnel.
              </p>
            </div>

            {/* Feature 3   */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-sm transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-map-pin-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Locations</h3>
              <p className="text-gray-600">
                Access thousands of parking spots across 50+ cities. Find convenient parking
                wherever your journey takes you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
