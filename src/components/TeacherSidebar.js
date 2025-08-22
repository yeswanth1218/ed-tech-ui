import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TeacherSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/teacher-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/teacher-class', label: 'Responsible Class', icon: 'school' },
    { path: '/teacher-timetable', label: 'My Timetable', icon: 'schedule' },
    { path: '/teacher-exams', label: 'Exams & Evaluations', icon: 'quiz' },
    { path: '/teacher-requests', label: 'Requests & Issues', icon: 'support_agent' },
    { path: '/teacher-attendance', label: 'Attendance', icon: 'how_to_reg' },
    { path: '/teacher-assessments', label: 'Create Assessments', icon: 'assignment' },
    { path: '/teacher-archive', label: 'Academic Archive', icon: 'folder' },
    { path: '/teacher-analytics', label: 'AI Analytics', icon: 'analytics' },
    { path: '/teacher-leaderboard', label: 'Leaderboard & Rankings', icon: 'leaderboard' }
  ];

  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-[#101418] text-base font-medium leading-normal">Skool</h1>
            <p className="text-[#5c728a] text-sm font-normal leading-normal">Teacher Portal</p>
          </div>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              // Check for exact match or related paths for Exams & Evaluations
              const isActive = location.pathname === item.path || 
                (item.path === '/teacher-exams' && 
                 (location.pathname === '/answer-sheet-upload' || location.pathname === '/set-question-paper'));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full transition-colors ${
                    isActive ? 'bg-[#eaedf1]' : 'hover:bg-[#f5f5f5]'
                  }`}
                >
                  <div className="text-[#101418]">
                    <span className="material-icons" style={{fontSize: '24px'}}>{item.icon}</span>
                  </div>
                  <p className="text-[#101418] text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Teacher Info Section */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl border border-[#d4dbe2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="material-icons text-green-600" style={{fontSize: '20px'}}>person</span>
            </div>
            <div className="flex-1">
              <p className="text-[#101418] text-sm font-medium">Dr. Sarah Wilson</p>
              <p className="text-[#5c728a] text-xs">TCH-2024-015</p>
            </div>
          </div>
          <div className="flex justify-between text-xs text-[#5c728a]">
            <span>Mathematics Dept.</span>
            <span>Class Teacher: 12-A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;