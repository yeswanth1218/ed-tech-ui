import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TeacherSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/teacher-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/teacher-class', label: 'Responsible Class', icon: 'group' },
    { path: '/teacher-timetable', label: 'My Timetable', icon: 'schedule' },
    { path: '/teacher-exams', label: 'Exams & Evaluations', icon: 'assessment' },
    { path: '/teacher-requests', label: 'Requests & Issues', icon: 'report_problem' },
    { path: '/teacher-attendance', label: 'Attendance', icon: 'check_circle_outline' },
    { path: '/teacher-assessments', label: 'Create Assessments', icon: 'create' },
    { path: '/teacher-archive', label: 'Academic Archive', icon: 'archive' },
    { path: '/teacher-analytics', label: 'AI Analytics', icon: 'analytics' },
    { path: '/teacher-leaderboard', label: 'Leaderboard & Rankings', icon: 'leaderboard' }
  ];

  return (
    <aside className="w-80 h-screen p-4 flex flex-col bg-white fixed left-0 top-0">
      <div className="flex items-center mb-8">
        <img 
          src="/logo.png" 
          alt="Beyond Grades Logo" 
          className="h-8 w-auto"
        />
        <span className="text-xl font-bold ml-2">Beyond Grades</span>
      </div>
      
      <nav className="space-y-2 flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          // Check for exact match or related paths for Exams & Evaluations
          const isActive = location.pathname === item.path || 
            (item.path === '/teacher-exams' && 
             (location.pathname === '/answer-sheet-upload' || location.pathname === '/set-question-paper'));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-full transition-colors ${
                isActive 
                  ? 'text-white hover:opacity-90' 
                  : 'text-gray-700 hover:bg-purple-50'
              }`}
              style={isActive ? { backgroundColor: '#581C87' } : {}}
            >
              <span className="material-icons">{item.icon}</span>
              <span className="ml-4">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Teacher Info Section - Moved to bottom */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mt-4">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6H9V4L3 7V9H21ZM21 10H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10ZM8 12H16V14H8V12ZM8 15H13V17H8V15Z"/>
              </svg>
            </div>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
          </div>
          <div className="ml-3">
            <p className="font-semibold text-sm">Dr Ram Gopal</p>
            <p className="text-xs text-gray-500">TCH-2024-015</p>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between">
          <span>Mathematics Dept.</span>
          <span>Class Teacher: 10th</span>
        </div>
      </div>
    </aside>
  );
};

export default TeacherSidebar;