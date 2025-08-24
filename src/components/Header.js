import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ title = "Skool" }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    // Clear any stored authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    sessionStorage.clear();
    
    // Close the dropdown
    setIsProfileOpen(false);
    
    // Navigate to login page
    navigate('/login');
  };
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#101418]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em]">{title}</h2>
        </div>
        <div className="flex items-center gap-9">
          <Link className="text-[#101418] text-sm font-medium leading-normal" to="/dashboard">Dashboard</Link>
          <Link 
            className={`text-sm font-medium leading-normal ${
              location.pathname === '/upload' || location.pathname === '/organization-exam-creation'
                ? 'text-blue-600 font-semibold' 
                : 'text-[#101418]'
            }`} 
            to="/upload"
          >
            Exams
          </Link>
          <Link className="text-[#101418] text-sm font-medium leading-normal" to="/student-performance">Students</Link>
          <Link className="text-[#101418] text-sm font-medium leading-normal" to="/evaluation">Reports</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#5c728a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <span className="material-icons" style={{fontSize: '24px'}}>search</span>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101418] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c728a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <span className="material-icons" style={{fontSize: '20px'}}>
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        
        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face")'
            }}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          ></div>
          
          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  View Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Settings
                </Link>
                <hr className="my-1" />
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;