import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id='contact' className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-['Pacifico'] mb-6">Parking Zone</h3>
              <p className="text-gray-400 mb-6">
                Revolutionizing urban parking with smart, convenient solutions for drivers and
                property owners.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-map-pin-line mr-3 mt-1"></i>
                  <span className="text-gray-400">123 Parking Avenue, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-phone-line mr-3"></i>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-3"></i>
                  <span className="text-gray-400">info@parkingzone.com</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-time-line mr-3"></i>
                  <span className="text-gray-400">24/7 Customer Support</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white border-none !rounded-l-button w-full focus:bg-gray-700"
                />
                <button className="bg-primary px-4 py-2 !rounded-r-button hover:bg-primary/90 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-6">
              <i className="ri-visa-fill ri-2x"></i>
              <i className="ri-mastercard-fill ri-2x"></i>
              <i className="ri-paypal-fill ri-2x"></i>
              <i className="ri-apple-fill ri-2x"></i>
              <i className="ri-google-fill ri-2x"></i>
            </div>
            <p>
              © 2025 Parking Zone. All rights reserved. |{' '}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
