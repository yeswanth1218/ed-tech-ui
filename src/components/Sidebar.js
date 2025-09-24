import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'home' },
    { path: '/departments', label: 'Departments', icon: 'school' },
    { path: '/upload', label: 'AI Evaluation', icon: 'description' },
    { path: '/student-performance', label: 'Students', icon: 'people' },
    { path: '/evaluation', label: 'Insights & Analytics', icon: 'assessment' },
    { path: '/financials', label: 'Financials', icon: 'account_balance' },
    { path: '/admin', label: 'Settings', icon: 'settings' }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden ${isOpen ? '' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
      <div className={`fixed md:static top-0 left-0 h-full z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 md:w-80`}>
        <div className="layout-content-container flex flex-col h-full min-h-screen md:min-h-[700px] justify-between bg-gray-50 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-[#101418] text-base font-medium leading-normal">Skool</h1>
              <p className="text-[#5c728a] text-sm font-normal leading-normal">Admin</p>
            </div>
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path || 
                                (item.path === '/upload' && location.pathname === '/organization-exam-creation');
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;