import React, { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 lg:px-10 py-20 lg:py-32 text-center" >
            <div className={`flex flex-col gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mx-auto mb-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#693393]">Powered by Advanced AI Technology</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
                </div>

                <div className="relative">
                    <h1 className="text-[#0d141c] text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-6">
                        Transform Education with
                        <br />
                        <span className="bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] bg-clip-text text-transparent">
                            AI-Powered
                        </span>
                        <br />
                        <span className="relative">
                            Intelligence
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0b79ee] to-[#8b5cf6] rounded-full"></div>
                        </span>
                    </h1>

                    <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-bounce transform rotate-12"></div>
                    <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-8 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl opacity-40 animate-ping"></div>
                </div>

                <p className="text-[#49719c] text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                    Revolutionize student assessment, performance tracking, and educational analytics with our comprehensive AI-driven platform designed for modern institutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
                    <a
                        className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative"
                        href="/login"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#0b79ee] to-[#693393] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10">Start Free Trial</span>
                        <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <button className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/90 backdrop-blur-md text-[#0d141c] text-lg font-bold leading-normal tracking-[0.015em] border-2 border-gray-200 hover:border-[#693393] hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Watch Demo</span>
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;


