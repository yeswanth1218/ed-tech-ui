import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features" className="relative z-10 py-24 px-6 lg:px-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
                <div className="absolute bottom-20 right-10 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>

                <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-6 h-6 border-2 border-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/2 left-16 w-5 h-5 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3.8s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                        <span className="text-sm font-semibold text-[#693393]">Why Beyond Grades?</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#0d141c] mb-6">
                        Why Beyond Grades?
                    </h2>
                </div>

                {/* Two Column Layout - Problems vs Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
                    {/* Problems Column */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#0d141c] mb-6 text-left">
                            The Problem - <span className="text-red-600 font-black">The Unseen Burden of Evaluation</span>
                        </h3>

                        <div className="space-y-5 flex-1">
                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200/30">
                                <h4 className="text-lg font-semibold text-[#0d141c] mb-3 flex items-start">
                                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                    <span>The Teacher-Student Ratio:</span>
                                </h4>
                                <p className="text-[#49719c] text-sm leading-relaxed ml-9">In India, the average teacher has to manage a large number of students, making individual attention a challenge. Manually evaluating answer sheets for every student is a monumental and time-consuming task.</p>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200/30">
                                <h4 className="text-lg font-semibold text-[#0d141c] mb-3 flex items-start">
                                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                    <span>Human Fatigue & Inconsistency:</span>
                                </h4>
                                <p className="text-[#49719c] text-sm leading-relaxed ml-9">After grading several papers, fatigue inevitably sets in. This can lead to unintentional inconsistencies in evaluation, no matter how dedicated the teacher is.</p>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200/30">
                                <h4 className="text-lg font-semibold text-[#0d141c] mb-3 flex items-start">
                                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                    <span>Lost Opportunities for Insight:</span>
                                </h4>
                                <p className="text-[#49719c] text-sm leading-relaxed ml-9">The primary goal of an exam is to understand a student's grasp of a subject. But when the focus is just on grading, we lose the opportunity to identify specific learning gaps and patterns for each child.</p>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200/30">
                                <h4 className="text-lg font-semibold text-[#0d141c] mb-3 flex items-start">
                                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                    <span>Student Hesitation:</span>
                                </h4>
                                <p className="text-[#49719c] text-sm leading-relaxed ml-9">Many students feel hesitant to question their grades, fearing scrutiny or judgment. This creates a communication barrier and leaves valuable learning moments unexplored.</p>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#0d141c] mb-6 text-left">
                            The Solution - <span className="text-[#693393] font-black">Freeing Teachers to Do What They Do Best: Teach.</span>
                        </h3>

                        <div className="space-y-5 flex-1">
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5 border border-purple-200/30">
                                <p className="text-[#49719c] text-sm leading-relaxed mb-4">BeyondGrades.ai is an AI-powered platform designed to support teachers, not replace them. We tackle the evaluation workload head-on and unlock the valuable data hidden within your students' work.</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5 border border-purple-200/30">
                                <h4 className="text-lg font-semibold text-[#0d141c] mb-4 text-left">Our solution is built on two core pillars:</h4>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                        <div>
                                            <h5 className="text-base font-semibold text-[#0d141c] mb-2">Effortless & Transparent AI Evaluation:</h5>
                                            <p className="text-[#49719c] text-sm leading-relaxed">We automate the grading process with unparalleled accuracy and provide detailed, reason-based feedback.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-gradient-to-r from-[#0b79ee] to-[#6366f1] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                        <div>
                                            <h5 className="text-base font-semibold text-[#0d141c] mb-2">Deep AI Analysis & Progress Tracking:</h5>
                                            <p className="text-[#49719c] text-sm leading-relaxed">We turn grades into a roadmap for success, offering insights for students, teachers, and the administration.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;


