import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PermissionModal from './PermissionModal';

const Dashboard = () => {
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('');

  const toggleRightSidebar = () => {
    setIsRightSidebarCollapsed(!isRightSidebarCollapsed);
  };

  const handleAddClick = (actionType) => {
    setModalActionType(actionType);
    setModalOpen(true);
  };
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden font-sans" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Dashboard" />
        <div className="gap-1 px-2 md:px-6 flex flex-1 flex-col md:flex-row justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col w-full max-w-full md:max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-2 md:p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Command Center - Vellore Institute of Technology</p>
                <p className="text-[#5c728a] text-sm font-normal leading-normal">Your comprehensive organizational management dashboard - Stay updated with announcements, events, and institutional activities.</p>
              </div>
            </div>
            
            {/* Organization Overview Cards */}
            <div className="flex flex-wrap gap-2 md:gap-4 p-2 md:p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-[#101418] text-base font-medium leading-normal">Total Students</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">2,847</p>
                <p className="text-blue-600 text-sm font-normal leading-normal">Active enrollment</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-gradient-to-br from-white to-green-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-green-100 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-[#101418] text-base font-medium leading-normal">Faculty Members</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">156</p>
                <p className="text-green-600 text-sm font-normal leading-normal">Teaching staff</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-gradient-to-br from-white to-purple-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-purple-100 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-[#101418] text-base font-medium leading-normal">Active Programs</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">24</p>
                <p className="text-purple-600 text-sm font-normal leading-normal">Academic & extracurricular</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-gradient-to-br from-white to-orange-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-orange-100 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-[#101418] text-base font-medium leading-normal">Upcoming Events</p>
                <p className="text-[#101418] tracking-light text-2xl font-bold leading-tight">8</p>
                <p className="text-orange-600 text-sm font-normal leading-normal">This month</p>
              </div>
            </div>

            {/* Announcements & News */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Latest Announcements</h2>
              <button 
                onClick={() => handleAddClick('announcement')}
                className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <span className="material-icons" style={{fontSize: '20px'}}>add</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
              <div className="bg-gradient-to-br from-white to-red-50 border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-red-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-red-600">
                      <path d="M228,128a76.08,76.08,0,0,1-76,76H96a76,76,0,0,1,0-152h56A76.08,76.08,0,0,1,228,128Z" opacity="0.2"></path>
                      <path d="M240,120v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM144,32a8,8,0,0,0-8,8V64H96A72,72,0,0,0,96,208h40v24a8,8,0,0,0,16,0V40A8,8,0,0,0,144,32ZM96,192a56,56,0,0,1,0-112h40V192Zm88-64v16a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-red-600">URGENT</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Mid-Term Hall Tickets Released</h3>
                <p className="text-sm text-gray-600 mb-3">Hall tickets for mid-term examinations (Nov 15-22) are now available for download.</p>
                <button className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">Download Now</button>
              </div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-blue-600">
                      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,184a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm128,96a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600">EVENT</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Annual Sports Day 2024</h3>
                <p className="text-sm text-gray-600 mb-3">Join us for the annual sports day on December 5th. Registration for various events is now open.</p>
                <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">Register Now</button>
              </div>
            </div>
            
            {/* Recent Events & Activities */}
            <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Events & Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4">
              <div className="bg-gradient-to-br from-white to-green-50 border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-green-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256" className="text-green-600">
                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V88H40ZM40,200V104H216v96Z"></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Science Exhibition</h3>
                  <p className="text-sm text-gray-600 mb-3">Students showcased innovative projects in the annual science exhibition held last week.</p>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Completed</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256" className="text-blue-600">
                    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v52h24A8,8,0,0,1,168,148Z"></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Inter-School Basketball League</h3>
                  <p className="text-sm text-gray-600 mb-3">Our basketball team secured 2nd position in the district championship finals.</p>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Sports Achievement</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-purple-50 border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-purple-100 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256" className="text-purple-600">
                    <path d="M232,64V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z" opacity="0.2"></path>
                    <path d="M216,40H40A24,24,0,0,0,16,64V192a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V64A24,24,0,0,0,216,40ZM40,56H216a8,8,0,0,1,8,8V88H32V64A8,8,0,0,1,40,56ZM216,200H40a8,8,0,0,1-8-8V104H224v88A8,8,0,0,1,216,200Z"></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Cultural Fest 2024</h3>
                  <p className="text-sm text-gray-600 mb-3">Three-day cultural festival featuring music, dance, and drama performances by students.</p>
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Upcoming</span>
                </div>
              </div>
            </div>
            
            {/* Fee Management */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Fee Management</h2>
              <button 
                onClick={() => handleAddClick('fee record')}
                className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <span className="material-icons" style={{fontSize: '20px'}}>add</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 p-2 md:p-4">
               <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-4 bg-gradient-to-br from-white to-yellow-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-yellow-100 transition-all duration-300 transform hover:-translate-y-1">
                 <p className="text-[#101418] text-sm font-medium leading-normal">Payment Tracking</p>
                 <p className="text-[#101418] tracking-light text-xl font-bold leading-tight">₹2,45,000</p>
                 <p className="text-yellow-600 text-xs font-normal leading-normal">Collected this month</p>
               </div>
               <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-4 bg-gradient-to-br from-white to-red-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-red-100 transition-all duration-300 transform hover:-translate-y-1">
                 <p className="text-[#101418] text-sm font-medium leading-normal">Due Dates</p>
                 <p className="text-[#101418] tracking-light text-xl font-bold leading-tight">127</p>
                 <p className="text-red-600 text-xs font-normal leading-normal">Students with pending fees</p>
               </div>
               <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-4 bg-gradient-to-br from-white to-green-50 border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-green-100 transition-all duration-300 transform hover:-translate-y-1">
                 <p className="text-[#101418] text-sm font-medium leading-normal">Receipts</p>
                 <p className="text-[#101418] tracking-light text-xl font-bold leading-tight">1,847</p>
                 <p className="text-green-600 text-xs font-normal leading-normal">Generated this semester</p>
               </div>
             </div>

            {/* Recent Activity */}
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Recent Activity</h2>
              <button 
                onClick={() => handleAddClick('activity record')}
                className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <span className="material-icons" style={{fontSize: '20px'}}>add</span>
              </button>
            </div>
            <div className="px-2 md:px-4 py-2 md:py-3">
              <div className="flex overflow-x-auto rounded-xl border border-[#d4dbe2] bg-gray-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Activity</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">User</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Time</th>
                      <th className="px-4 py-3 text-left text-[#101418] text-sm font-medium leading-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { activity: 'Uploaded Math Exam - Grade 10', user: 'Dr. Sarah Johnson', time: '2 minutes ago', status: 'Processing' },
                      { activity: 'Completed Science Evaluation', user: 'Prof. Michael Chen', time: '15 minutes ago', status: 'Completed' },
                      { activity: 'Generated Performance Report', user: 'Admin User', time: '1 hour ago', status: 'Completed' },
                      { activity: 'Uploaded English Essays', user: 'Ms. Emily Davis', time: '2 hours ago', status: 'Completed' }
                    ].map((item, index) => (
                      <tr key={index} className="border-t border-t-[#d4dbe2]">
                        <td className="h-[72px] px-4 py-2 text-[#101418] text-sm font-normal leading-normal">{item.activity}</td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">{item.user}</td>
                        <td className="h-[72px] px-4 py-2 text-[#5c728a] text-sm font-normal leading-normal">{item.time}</td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Additional Information */}
          <div className={`${isRightSidebarCollapsed ? 'w-12' : 'w-full lg:w-80'} flex flex-col gap-4 p-4 transition-all duration-300`}>
            {/* Toggle Button */}
            <button 
              onClick={toggleRightSidebar}
              className="self-end bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-lg p-2 hover:shadow-md hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              title={isRightSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 256 256" 
                className={`text-gray-600 transition-transform duration-300 ${isRightSidebarCollapsed ? 'rotate-180' : ''}`}
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </button>
            
            {!isRightSidebarCollapsed && (
              <>
                {/* Upcoming Deadlines */}
                <div className="bg-gradient-to-br from-white to-red-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-red-100 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Upcoming Deadlines</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-red-100 hover:shadow-sm hover:bg-red-50 transition-all duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Fee Payment</p>
                        <p className="text-xs text-red-600">Due in 3 days</p>
                      </div>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">High</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-yellow-100 hover:shadow-sm hover:bg-yellow-50 transition-all duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Mid-term Results</p>
                        <p className="text-xs text-yellow-600">Due in 1 week</p>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Medium</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-blue-100 hover:shadow-sm hover:bg-blue-50 transition-all duration-200">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Parent Meeting</p>
                        <p className="text-xs text-blue-600">Due in 2 weeks</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Low</span>
                    </div>
                  </div>
                </div>
            
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-white to-indigo-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Today's Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-green-100 hover:shadow-sm hover:bg-green-50 transition-all duration-200">
                       <span className="text-sm text-gray-600">Present Students</span>
                       <span className="text-sm font-bold text-green-600">2,654 / 2,847</span>
                     </div>
                     <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-blue-100 hover:shadow-sm hover:bg-blue-50 transition-all duration-200">
                       <span className="text-sm text-gray-600">Active Classes</span>
                       <span className="text-sm font-bold text-blue-600">42 / 48</span>
                     </div>
                     <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-purple-100 hover:shadow-sm hover:bg-purple-50 transition-all duration-200">
                       <span className="text-sm text-gray-600">Library Visitors</span>
                       <span className="text-sm font-bold text-purple-600">187</span>
                     </div>
                  </div>
                </div>
            
                {/* Recent Notifications */}
                 <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                   <h3 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Recent Notifications</h3>
                   <div className="space-y-2">
                     <div className="p-2 bg-white rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all duration-200">
                       <p className="text-xs font-medium text-gray-800">New admission inquiry</p>
                       <p className="text-xs text-gray-500">2 minutes ago</p>
                     </div>
                     <div className="p-2 bg-white rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all duration-200">
                       <p className="text-xs font-medium text-gray-800">Staff meeting reminder</p>
                       <p className="text-xs text-gray-500">15 minutes ago</p>
                     </div>
                     <div className="p-2 bg-white rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all duration-200">
                       <p className="text-xs font-medium text-gray-800">Bus route update</p>
                       <p className="text-xs text-gray-500">1 hour ago</p>
                     </div>
                   </div>
                 </div>
             
                 {/* Holiday Calendar */}
                 <div className="bg-gradient-to-br from-white to-teal-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-teal-100 transition-all duration-300 transform hover:-translate-y-1">
                   <h3 className="text-[#101418] text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Holiday Calendar</h3>
                   <div className="space-y-3">
                     <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-teal-100 hover:shadow-sm hover:bg-teal-50 transition-all duration-200">
                       <div>
                         <p className="text-sm font-medium text-gray-800">Diwali Festival</p>
                         <p className="text-xs text-teal-600">Nov 12 - Nov 14</p>
                       </div>
                       <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">3 Days</span>
                     </div>
                     <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-blue-100 hover:shadow-sm hover:bg-blue-50 transition-all duration-200">
                       <div>
                         <p className="text-sm font-medium text-gray-800">Winter Break</p>
                         <p className="text-xs text-blue-600">Dec 20 - Jan 5</p>
                       </div>
                       <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">17 Days</span>
                     </div>
                     <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-purple-100 hover:shadow-sm hover:bg-purple-50 transition-all duration-200">
                       <div>
                         <p className="text-sm font-medium text-gray-800">Republic Day</p>
                         <p className="text-xs text-purple-600">Jan 26</p>
                       </div>
                       <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">1 Day</span>
                     </div>
                     <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-green-100 hover:shadow-sm hover:bg-green-50 transition-all duration-200">
                       <div>
                         <p className="text-sm font-medium text-gray-800">Holi Festival</p>
                         <p className="text-xs text-green-600">Mar 14</p>
                       </div>
                       <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">1 Day</span>
                     </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
      </div>
      
      <PermissionModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionType={modalActionType}
      />
    </div>
  );
};

export default Dashboard;