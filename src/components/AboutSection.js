import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-10 bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Responsive floating elements - smaller on mobile */}
                <div className="absolute top-20 left-6 sm:left-12 w-2 h-2 sm:w-4 sm:h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3.1s' }}></div>
                <div className="absolute top-32 right-12 sm:right-24 w-3 h-3 sm:w-5 sm:h-5 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.6s', animationDuration: '3.9s' }}></div>
                <div className="hidden sm:block absolute bottom-24 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDelay: '2.2s', animationDuration: '3.3s' }}></div>
                <div className="hidden md:block absolute top-1/3 right-1/5 w-6 h-6 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.7s' }}></div>
                <div className="absolute bottom-32 right-6 sm:right-12 w-2 h-2 sm:w-4 sm:h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.3s', animationDuration: '4.1s' }}></div>

                <div className="hidden sm:block absolute top-24 right-1/6 w-6 h-6 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{ animationDelay: '2.7s', animationDuration: '3.5s' }}></div>
                <div className="hidden md:block absolute bottom-40 left-1/5 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.3s' }}></div>
                <div className="hidden lg:block absolute top-1/2 left-20 w-7 h-7 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.9s', animationDuration: '3.2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-semibold text-[#693393]">What is BeyondGrades.ai?</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0d141c] mb-4 sm:mb-6 px-2">
                        The New Leap in Education Through
                        <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Artificial Intelligence</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-[#49719c] max-w-3xl mx-auto px-2">
                        BeyondGrades is an AI platform that is designed to change the way of manual evaluations and gives us the results which are beyond <span className="bg-[#693393]/70 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-sm sm:text-base">mere grades</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0d141c] mb-4 sm:mb-6">Our Mission</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-[#49719c] mb-4 sm:mb-6">
                            Just as AI is revolutionizing industries from healthcare to finance, it can certainly be a new catalyst for efficiency and effectiveness in education. It is about working smarter. 
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-[#49719c] mb-4 sm:mb-6 lg:mb-8">
                            We see it as a tool that brings lot of efficiency and can change the way we understand, help and guide a student today.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-[#49719c] mb-4 sm:mb-6 lg:mb-8">
                            The team BeyondGrades is a taking a leap to beyond the conventional extents with the help of AI and show things which cannot be seen otherwise
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#693393] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#0d141c] mb-1 sm:mb-2">Innovation First</h4>
                                    <p className="text-xs sm:text-sm lg:text-base text-[#49719c]">We leverage the latest advances in AI and machine learning to create solutions that were impossible just a few years ago.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#0b79ee] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#0d141c] mb-1 sm:mb-2">Student-Centric</h4>
                                    <p className="text-xs sm:text-sm lg:text-base text-[#49719c]">Every feature we build is designed with the student's learning journey and success in mind.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#6366f1] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#0d141c] mb-1 sm:mb-2">Educator Partnership</h4>
                                    <p className="text-xs sm:text-sm lg:text-base text-[#49719c]">We work closely with educators to understand their challenges and build solutions that truly make a difference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative text-center mb-6 sm:mb-8 lg:mb-12">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Responsive floating elements - hidden on mobile for performance */}
                        <div className="hidden sm:block absolute top-8 left-12 w-4 h-4 bg-blue-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3.6s' }}></div>
                        <div className="hidden md:block absolute top-16 right-20 w-5 h-5 bg-purple-400/15 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.9s' }}></div>
                        <div className="hidden lg:block absolute bottom-12 left-1/4 w-3 h-3 bg-emerald-400/15 rounded-full animate-ping" style={{ animationDelay: '2.2s', animationDuration: '3.3s' }}></div>
                        <div className="hidden lg:block absolute top-1/3 right-1/6 w-6 h-6 bg-orange-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4.1s' }}></div>
                        <div className="hidden sm:block absolute bottom-20 right-16 w-4 h-4 bg-indigo-400/15 rounded-full animate-pulse" style={{ animationDelay: '1.9s', animationDuration: '3.7s' }}></div>

                        <div className="hidden md:block absolute top-12 right-1/5 w-6 h-6 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{ animationDelay: '2.6s', animationDuration: '3.8s' }}></div>
                        <div className="hidden lg:block absolute bottom-16 left-1/6 w-5 h-5 border-2 border-purple-300/15 rounded-full animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '4.0s' }}></div>
                        <div className="hidden lg:block absolute top-2/3 left-18 w-7 h-7 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '3.5s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;


