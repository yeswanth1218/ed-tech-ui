import React from 'react';
import Header from './header/Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import SolutionsSection from './SolutionsSection';
import ProductNeed from './ProductNeed';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Enhanced Background with AI-themed elements - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated grid pattern - Responsive sizing */}
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px sm:50px sm:50px'
          }}></div>
        </div>

        {/* Floating AI-themed elements - Responsive positioning and sizing */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl opacity-15 sm:opacity-20 animate-pulse transform rotate-12"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 sm:opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-20 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl sm:rounded-3xl opacity-15 sm:opacity-25 transform -rotate-12"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-16 sm:right-40 w-8 h-8 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg sm:rounded-xl opacity-15 sm:opacity-20 animate-pulse"></div>
        <div className="absolute top-32 sm:top-60 left-1/4 sm:left-1/3 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-30 sm:opacity-40 animate-ping"></div>
        <div className="absolute top-40 sm:top-80 right-1/4 sm:right-1/3 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl sm:rounded-2xl opacity-20 sm:opacity-30 transform rotate-45"></div>

        {/* Neural network inspired connections - Hidden on mobile for performance */}
        <svg className="absolute inset-0 w-full h-full opacity-5 sm:opacity-10 hidden sm:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#3b82f6" opacity="0.5" />
              <circle cx="150" cy="100" r="2" fill="#6366f1" opacity="0.5" />
              <circle cx="100" cy="150" r="2" fill="#8b5cf6" opacity="0.5" />
              <line x1="50" y1="50" x2="150" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="150" y1="100" x2="100" y2="150" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SolutionsSection />
        <ProductNeed />
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;