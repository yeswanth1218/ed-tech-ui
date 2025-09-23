import React from 'react';

const SolutionsSection = () => {
    return (
        <section id="solutions" className="relative z-10 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-semibold text-[#693393]">How? - The Million $ Question</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0d141c] mb-4 sm:mb-6 px-2">
                        Revolutionary
                        <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> AI-Powered Solutions</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-[#49719c] max-w-3xl mx-auto px-2">
                        Transform your educational approach with our cutting-edge AI technology that goes beyond traditional grading to provide meaningful insights and guidance.
                    </p>
                </div>

                {/* Horizontal Layout - Two Sections Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24">

                    {/* First Section - Stop grading start guiding */}
                    <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/50 min-h-[500px] sm:min-h-[600px]">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#693393]/90 to-[#0b79ee]/90"></div>

                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-3 h-3 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '3.3s' }}></div>
                            <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-2 h-2 sm:w-4 sm:h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.9s', animationDuration: '3.7s' }}></div>
                            <div className="hidden sm:block absolute bottom-16 left-16 w-8 h-8 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.3s', animationDuration: '4.0s' }}></div>
                            <div className="absolute top-1/2 right-6 sm:right-12 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.4s' }}></div>

                            {/* Geometric Shapes */}
                            <div className="hidden md:block absolute top-20 right-20 w-12 h-12 border-2 border-white/15 rotate-45 animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }}></div>
                            <div className="hidden sm:block absolute bottom-20 left-20 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '3.8s' }}></div>
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-start text-center py-4 sm:py-6 lg:py-8">
                            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-4 sm:mb-6 mx-auto">
                                <span className="text-xs sm:text-sm font-semibold text-white">Revolutionary Approach</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 sm:mb-6 leading-tight">
                                Stop Grading
                                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Start Guiding</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto">
                                Imagine a world where grading happens almost instantly, with perfect consistency.
                            </p>

                            <div className="space-y-2 sm:space-y-3">
                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">From Paper to Platform in Seconds</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">Simply take snapshots of student answer sheets. Our AI handles the rest.</p>
                                </div>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Autonomous Answer Extraction</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">The AI intelligently identifies, extracts, and sorts each answer from the handwritten sheets.</p>
                                </div>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Customized Evaluation</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">The system evaluates each answer based on the answer key and rubrics you provide. You remain in complete control of the academic standards.</p>
                                </div>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Detailed, Transparent Feedback</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">For every mark awarded or deducted, the AI provides a clear, concise reason. This eliminates ambiguity for students and parents.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Section - Grades tell you what happened we tell you what */}
                    <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/50 min-h-[500px] sm:min-h-[600px]">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0b79ee]/90 to-[#6366f1]/90"></div>

                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-3 h-3 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
                            <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-2 h-2 sm:w-4 sm:h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2.1s', animationDuration: '3.9s' }}></div>
                            <div className="hidden sm:block absolute bottom-16 left-16 w-8 h-8 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '4.2s' }}></div>
                            <div className="absolute top-1/2 right-6 sm:right-12 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '2.7s', animationDuration: '3.6s' }}></div>

                            {/* Geometric Shapes */}
                            <div className="hidden md:block absolute top-20 right-20 w-12 h-12 border-2 border-white/15 rotate-45 animate-pulse" style={{ animationDelay: '1.4s', animationDuration: '4.4s' }}></div>
                            <div className="hidden sm:block absolute bottom-20 left-20 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '3.0s', animationDuration: '4.0s' }}></div>
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-start text-center py-4 sm:py-6 lg:py-8">
                            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-4 sm:mb-6 mx-auto">
                                <span className="text-xs sm:text-sm font-semibold text-white">Predictive Intelligence</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 sm:mb-6 leading-tight">
                                <span className="block">The Aftermath</span>
                                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Understanding the "Why"</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto">
                                Grades are just data points. The real value lies in the patterns they reveal.
                            </p>

                            <div className="space-y-2 sm:space-y-3">
                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Personalized Student Roadmaps</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">Our AI analyzes an individual's performance over time, identifying recurring mistakes, areas of strength, and topics that need more focus. It provides personalized guidance to help them improve.</p>
                                </div>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Holistic Classroom Insights for Teachers</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">Get a bird's-eye view of your class performance. Understand which concepts the class as a whole is struggling with. This allows you to adjust your teaching strategies in real-time to address common challenges.</p>
                                </div>

                                <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300 text-center">
                                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2">Breaking Down Barriers</h3>
                                    <p className="text-white/80 text-xs leading-relaxed">We create a safe space for inquiry. The fear of scrutiny is gone. The unspoken issues and unanswered questions are brought to the forefront, fostering a more open and effective learning environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;


