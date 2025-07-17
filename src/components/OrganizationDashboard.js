import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const OrganizationDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Organization Dashboard" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />

          {/* Main Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Organization Dashboard</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Comprehensive overview of institutional performance and analytics.</p>
              </div>
            </div>

            {/* Announcement Banner */}
            <div className="flex items-center gap-4 bg-[#f0f2f5] px-4 py-3 @container">
              <div className="text-[#101418]" data-icon="Megaphone" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M228,128a76.08,76.08,0,0,1-76,76H96a76,76,0,0,1,0-152h56A76.08,76.08,0,0,1,228,128Z" opacity="0.2"></path>
                  <path d="M240,120v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM144,32a8,8,0,0,0-8,8V64H96A72,72,0,0,0,96,208h40v24a8,8,0,0,0,16,0V40A8,8,0,0,0,144,32ZM96,192a56,56,0,0,1,0-112h40V192Zm88-64v16a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Z"></path>
                </svg>
              </div>
              <p className="text-[#101418] text-base font-normal leading-normal">New semester evaluation reports are now available. Review the latest performance metrics and insights.</p>
            </div>

            {/* Performance Overview Cards */}
            <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score by Class</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">84.2%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Across all classes</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Performance Trend Over Time</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">+5.3%</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Improvement this quarter</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white border border-[#d4dbe2]">
                <p className="text-[#101418] text-base font-medium leading-normal">Top Performing Departments</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">Science</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Leading department</p>
              </div>
            </div>

            {/* Performance Cards */}
            <div className="flex flex-wrap gap-4 px-4 py-6">
              {/* Average Score by Class */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Average Score by Class</p>
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight truncate">78%</p>
                <div className="flex gap-1">
                  <p className="text-[#5c728a] text-base font-normal leading-normal">All Classes</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+5%</p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  {['Class 10A', 'Class 10B', 'Class 9A', 'Class 9B', 'Class 11A'].map((className, index) => {
                    const heights = ['30%', '20%', '10%', '80%', '90%'];
                    return (
                      <React.Fragment key={className}>
                        <div className="border-[#5c728a] bg-[#eaedf1] border-t-2 w-full" style={{height: heights[index]}}></div>
                        <p className="text-[#5c728a] text-[13px] font-bold leading-normal tracking-[0.015em]">{className}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Performance Trend */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Performance Trend Over Time</p>
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight truncate">Improving</p>
                <div className="flex gap-1">
                  <p className="text-[#5c728a] text-base font-normal leading-normal">Last 12 Months</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+2%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#5c728a" strokeWidth="3" strokeLinecap="round"></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#eaedf1"></stop>
                        <stop offset="1" stopColor="#eaedf1" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(month => (
                      <p key={month} className="text-[#5c728a] text-[13px] font-bold leading-normal tracking-[0.015em]">{month}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Performing Departments */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d4dbe2] p-6">
                <p className="text-[#101418] text-base font-medium leading-normal">Top Performing Departments</p>
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight truncate">Science</p>
                <div className="flex gap-1">
                  <p className="text-[#5c728a] text-base font-normal leading-normal">All Departments</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+10%</p>
                </div>
                <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                  {[{name: 'Science', width: '60%'}, {name: 'Math', width: '20%'}, {name: 'English', width: '30%'}, {name: 'History', width: '40%'}, {name: 'Physics', width: '30%'}].map(dept => (
                    <React.Fragment key={dept.name}>
                      <p className="text-[#5c728a] text-[13px] font-bold leading-normal tracking-[0.015em]">{dept.name}</p>
                      <div className="h-full flex-1">
                        <div className="border-[#5c728a] bg-[#eaedf1] border-r-2 h-full" style={{width: dept.width}}></div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;