import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
            {/* Animated Background Shapes for Footer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Responsive floating elements - hide some on mobile */}
                <div className="absolute top-12 left-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/5 sm:bg-blue-400/10 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '3.6s' }}></div>
                <div className="hidden sm:block absolute top-20 right-12 w-4 h-4 bg-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.4s', animationDuration: '4.1s' }}></div>
                <div className="absolute bottom-16 left-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-emerald-400/5 sm:bg-emerald-400/10 rounded-full animate-ping" style={{ animationDelay: '2.6s', animationDuration: '3.4s' }}></div>
                <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400/10 rounded-full animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '3.9s' }}></div>
                <div className="hidden sm:block absolute bottom-24 right-16 w-4 h-4 bg-indigo-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '3.7s' }}></div>

                {/* Geometric Shapes - hide some on mobile */}
                <div className="hidden lg:block absolute top-16 right-1/5 w-6 h-6 border border-blue-300/10 rotate-45 animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '4.2s' }}></div>
                <div className="hidden md:block absolute bottom-32 left-1/6 w-3 h-3 border border-purple-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '3.8s' }}></div>
                <div className="hidden lg:block absolute top-2/3 left-12 w-5 h-5 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rotate-12 animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '3.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1 text-center sm:text-left">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center sm:justify-start">
                            <img
                                src="/icon-logo.png"
                                alt="BeyondGrades.ai Logo"
                                className="size-8 sm:size-10 rounded-xl shadow-lg object-contain"
                            />
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">BeyondGrades.ai</h3>
                                <p className="text-xs sm:text-sm text-gray-400">Evaluate | Aggregate | Analyze</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Transforming education through intelligent automation, comprehensive analytics, and personalized learning experiences.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="mailto:admin@beyondgrades.ai" className="hover:text-white transition-colors break-all">Email Support</a></li>
                            <li><a href="tel:+918800465165" className="hover:text-white transition-colors">Phone Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
                        © 2024 BeyondGrades.ai. All rights reserved. Made with ❤️ for education.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;