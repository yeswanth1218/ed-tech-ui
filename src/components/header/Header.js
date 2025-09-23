import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginType, setLoginType] = useState('student');
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`relative z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex items-center justify-between whitespace-nowrap max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 sm:gap-4 text-[#0d141c] hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                    <div className="relative">
                        <img
                            src="/icon-logo.png"
                            alt="BeyondGrades.ai Logo"
                            className="size-8 sm:size-10 rounded-xl shadow-lg object-contain"
                        />
                        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                        <h2 className="text-[#0d141c] text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em]">BeyondGrades.ai</h2>
                        <p className="text-xs text-[#49719c] font-medium hidden sm:block">Evaluate | Aggrigate | Analyze</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-8 relative">
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#features">
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#solutions">
                            Solutions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#contact">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#about">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Enhanced Login Type Toggle - Hidden on mobile */}
                    <div className="hidden md:flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 shadow-inner">
                        {['student', 'teacher', 'org'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setLoginType(type)}
                                className={`py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg text-xs font-semibold transition-all duration-200 ${loginType === type
                                    ? 'bg-white text-[#0d141c] shadow-md transform scale-105'
                                    : 'text-[#49719c] hover:text-[#0d141c] hover:bg-white/50'
                                    }`}
                            >
                                {type === 'org' ? 'Admin' : type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    <a
                        className="flex min-w-[80px] sm:min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 sm:h-11 px-4 sm:px-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        href="/login"
                    >
                        Get Started
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
                    <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
                        <a 
                            className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 py-2 border-b border-gray-100" 
                            href="#features"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a 
                            className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 py-2 border-b border-gray-100" 
                            href="#solutions"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Solutions
                        </a>
                        <a 
                            className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 py-2 border-b border-gray-100" 
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <a 
                            className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 py-2 border-b border-gray-100" 
                            href="#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                        
                        {/* Mobile Login Type Toggle */}
                        <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 shadow-inner mt-4">
                            {['student', 'teacher', 'org'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setLoginType(type)}
                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${loginType === type
                                        ? 'bg-white text-[#0d141c] shadow-md transform scale-105'
                                        : 'text-[#49719c] hover:text-[#0d141c] hover:bg-white/50'
                                        }`}
                                >
                                    {type === 'org' ? 'Admin' : type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;


