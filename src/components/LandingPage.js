import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [loginType, setLoginType] = useState('student');

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      {/* Fun Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rotate-45 opacity-50 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-pink-200 rotate-12 opacity-40"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-80 right-1/3 w-14 h-14 bg-green-200 rotate-45 opacity-50"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-solid border-b-[#e7edf4] px-10 py-3">
        <div className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-6">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d141c] text-xl font-bold leading-tight tracking-[-0.015em]">EduTrack</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-8">
              <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-colors" href="#features">Features</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-colors" href="#about">About</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-colors" href="#contact">Contact</a>
            </div>
            
            {/* Login Type Toggle */}
            <div className="flex bg-[#e7edf4] rounded-lg p-1">
              {['student', 'teacher', 'org'].map((type) => (
                <button
                  key={type}
                  onClick={() => setLoginType(type)}
                  className={`py-1 px-3 rounded-md text-xs font-medium transition-colors ${
                    loginType === type
                      ? 'bg-white text-[#0d141c] shadow-sm'
                      : 'text-[#49719c] hover:text-[#0d141c]'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            
            <Link 
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0969da] transition-colors" 
              to="/login"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative z-10 flex-1 flex flex-col justify-center items-center px-10 py-32 text-center">
          <div className="flex flex-col gap-8 max-w-[600px]">
            <div className="relative">
              <h1 className="text-[#0d141c] text-5xl font-black leading-tight tracking-[-0.033em] lg:text-7xl lg:font-black lg:leading-tight lg:tracking-[-0.033em]">
                Evaluate.
                <span className="text-[#0b79ee]"> Track.</span>
                <br />Analyze.
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce"></div>
            </div>
            
            <p className="text-[#49719c] text-lg font-normal leading-relaxed">
              The simplest way to track student progress and boost performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <Link 
                className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[#0b79ee] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#0969da] transition-all duration-300 transform hover:scale-105 shadow-lg" 
                to="/login"
              >
                Get Started
              </Link>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/80 backdrop-blur-sm text-[#0d141c] text-lg font-bold leading-normal tracking-[0.015em] border-2 border-[#e7edf4] hover:border-[#0b79ee] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* Fun stats */}
            <div className="flex justify-center gap-8 mt-12 text-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0b79ee]">10K+</span>
                <span className="text-sm text-[#49719c]">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0b79ee]">500+</span>
                <span className="text-sm text-[#49719c]">Schools</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0b79ee]">98%</span>
                <span className="text-sm text-[#49719c]">Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-20 px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0d141c] mb-16">Why Choose EduTrack?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0d141c] mb-3">Smart Analytics</h3>
                <p className="text-[#49719c]">AI-powered insights that help you understand student performance patterns.</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0d141c] mb-3">Lightning Fast</h3>
                <p className="text-[#49719c]">Get instant results and real-time updates on student progress.</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0d141c] mb-3">Personalized</h3>
                <p className="text-[#49719c]">Tailored learning paths and recommendations for every student.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-solid border-t-[#e7edf4] px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-4 text-[#0d141c] mb-4 md:mb-0">
            <div className="size-5">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-[#0d141c] text-base font-bold">EduTrack</span>
          </div>
          
          <div className="text-[#49719c] text-sm">
            © 2024 EduTrack. Made with ❤️ for education.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;