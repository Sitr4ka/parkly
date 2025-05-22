import React from 'react';

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-6 w-full">
          <div className="w-full md:w-[700px] py-20">
            <h1 className="font-bold text-gray-900 mb-6">
              Smart <span className="text-primary">Parking</span> Solutions <br />
              for <span className="text-primary">Modern</span> Cities
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Find and reserve parking spaces in seconds. Save time, <br />
              reduce stress, and never worry about parking again.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-primary text-white font-medium !rounded-button hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-white text-primary font-medium border border-primary !rounded-button hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
