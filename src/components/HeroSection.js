import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 lg:px-10 py-20 lg:py-32 text-center">
            {/* AI Badge - moved higher and closer to nav */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mx-auto mb-12">
                <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#693393]">Bringing AI to where it matters the most</span>
                <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
            </div>

            <div className={`flex flex-col gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                <div className="relative">
                    <h1 className="text-[#0d141c] text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-6">
                        What if Grading Took
                        <br />
                        <span className="bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] bg-clip-text text-transparent">
                            Minutes,
                        </span>
                        <br />
                        <span className="relative">
                            Not Weekends?
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0b79ee] to-[#8b5cf6] rounded-full"></div>
                        </span>
                    </h1>

                    {/* Floating elements around title */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-bounce transform rotate-12"></div>
                    <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-8 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl opacity-40 animate-ping"></div>
                </div>

                {/* Sarcastic Quote - Big, Italic, Quoted with Individual Word Hover */}
                <div className="text-center mb-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold italic leading-relaxed max-w-5xl mx-auto whitespace-nowrap">
                        <span className="text-black">"</span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">No</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">Wands.</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">No</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">Wizards.</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">No</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">Wingardium</span>
                        <span className="text-[#693393]"> </span>
                        <span className="text-[#693393] inline-block transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-lg hover:text-purple-500 cursor-pointer">Leviosa.</span>
                        <span className="text-black">"</span>
                    </p>
                </div>

                <p className="text-[#49719c] text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
                    Just AI, doing the heavy lifting in evaluation—faster, fairer, and far more consistent than human fatigue ever could.
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
                    <Link
                        className="group flex min-w-[220px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative"
                        to="/infographic"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#0b79ee] to-[#693393] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10">👉 Experience the Real Magic</span>
                    </Link>
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


